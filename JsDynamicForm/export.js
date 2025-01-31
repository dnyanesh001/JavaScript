// Create a Blob from the JSON string
const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });

// Create a download link
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'form-data.json';
link.textContent = 'Download JSON';

// Append the link to the body and trigger the download
document.body.appendChild(link);
link.click();

// Clean up
document.body.removeChild(link);
URL.revokeObjectURL(link.href);