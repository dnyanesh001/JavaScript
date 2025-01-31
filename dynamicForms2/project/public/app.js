document.addEventListener('DOMContentLoaded', function () {
    const dynamicFieldsContainer = document.getElementById('dynamicFieldsContainer');
    const addFieldButton = document.getElementById('addFieldButton');
    let fieldCounter = 0;

    function createFormField() {
        fieldCounter++;

        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');

        const labelName = prompt('Enter label name:');
        const inputType = prompt('Enter input type (e.g., text, number, email):');
        const fieldName = prompt('Enter field name:');
        const placeholder = prompt('Enter placeholder text:');

        const label = document.createElement('label');
        label.classList.add('form-label');
        label.textContent = labelName;
        label.setAttribute('for', `field${fieldCounter}`);

        const input = document.createElement('input');
        input.type = inputType;
        input.classList.add('form-control');
        input.id = `field${fieldCounter}`;
        input.name = fieldName;
        input.placeholder = placeholder;

        formGroup.appendChild(label);
        formGroup.appendChild(input);
        dynamicFieldsContainer.appendChild(formGroup);
    }

    addFieldButton.addEventListener('click', createFormField);

    const form = document.getElementById('dynamicForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};

        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }

        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Form Data (JSON):', result);
            alert('Form submitted successfully! Check the console for JSON output.');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
