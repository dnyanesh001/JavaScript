const API_KEY = 'e04f91e5-4835-4b41-87c3-318c1ceff59e';
const API_URL = 'https://api.deepai.org/api/anime-portrait-generator';
let isGenerating = false;
let currentPage = 1;
const itemsPerPage = 6;
let currentSearchQuery = '';

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadFromStorage();
    setupPagination();

    // Search input listener
    document.getElementById('search-input').addEventListener('input', (e) => {
        currentSearchQuery = e.target.value.toLowerCase();
        currentPage = 1;
        loadFromStorage();
    });
});

async function generateImage() {
    if (isGenerating) return;

    const promptInput = document.getElementById('prompt');
    const stylePreset = document.getElementById('style-preset');
    const sizeSelect = document.getElementById('image-size');

    const prompt = [promptInput.value.trim(), stylePreset.value].filter(Boolean).join(', ');
    const size = sizeSelect.value;

    if (!prompt) {
        showError('Please enter a description first!');
        return;
    }

    isGenerating = true;
    toggleLoading(true);

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'api-key': API_KEY
            },
            body: `text=${encodeURIComponent(prompt)}&size=${size}`
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.error || 'Failed to generate image');
        if (!data.output_url) throw new Error('No image URL received');

        saveImageToStorage({
            url: data.output_url,
            prompt,
            size,
            timestamp: new Date().toISOString()
        });

        promptInput.value = '';
        stylePreset.value = '';
        loadFromStorage();
    } catch (error) {
        showError(`Error: ${error.message}`);
    } finally {
        isGenerating = false;
        toggleLoading(false);
    }
}

function saveImageToStorage(image) {
    const images = JSON.parse(localStorage.getItem('animeImages') || '[]');
    images.unshift(image);
    localStorage.setItem('animeImages', JSON.stringify(images));
}

function loadFromStorage() {
    const allImages = JSON.parse(localStorage.getItem('animeImages') || '[]');

    const filteredImages = allImages.filter(image => {
        return image.prompt.toLowerCase().includes(currentSearchQuery);
    });

    const start = (currentPage - 1) * itemsPerPage;
    const paginatedImages = filteredImages.slice(start, start + itemsPerPage);

    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    paginatedImages.forEach(image => {
        const card = createImageCard(image);
        gallery.appendChild(card);
    });

    updatePagination(filteredImages.length);
}

function createImageCard(image) {
    const card = document.createElement('div');
    card.className = 'image-card';

    card.innerHTML = `
        <img src="${image.url}" class="generated-image" alt="${image.prompt}">
        <div class="prompt-text">${image.prompt}</div>
        <div class="image-actions">
            <button class="download-btn" onclick="downloadImage('${image.url}')">
                <i class="fas fa-download"></i> Download
            </button>
            <button class="share-btn" onclick="showShareOptions('${image.url}', '${image.prompt}')">
                <i class="fas fa-share"></i> Share
            </button>
        </div>
    `;

    return card;
}

function setupPagination() {
    document.getElementById('prev-page').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            loadFromStorage();
        }
    });

    document.getElementById('next-page').addEventListener('click', () => {
        const totalItems = JSON.parse(localStorage.getItem('animeImages') || '[]')
            .filter(image => image.prompt.toLowerCase().includes(currentSearchQuery)).length;
        if (currentPage < Math.ceil(totalItems / itemsPerPage)) {
            currentPage++;
            loadFromStorage();
        }
    });
}

function updatePagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
    document.getElementById('page-info').textContent = 
        `Page ${currentPage} of ${totalPages}`;

    document.getElementById('prev-page').disabled = currentPage === 1;
    document.getElementById('next-page').disabled = currentPage === totalPages;

    if (currentSearchQuery) {
        document.getElementById('page-info').textContent += ` (${totalItems} matches)`;
    }
}

async function downloadImage(url) {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `anime-${Date.now()}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        showError('Failed to download image. Please try again.');
    }
}

function showShareOptions(url, prompt) {
    const encodedText = encodeURIComponent(`Check out this AI-generated anime: ${prompt}`);
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodedText}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

    window.open(twitterUrl, '_blank', 'width=600,height=400');
}

function toggleLoading(show) {
    document.getElementById('loading').style.display = show ? 'block' : 'none';
}

function showError(message) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => errorDiv.style.display = 'none', 5000);
}
