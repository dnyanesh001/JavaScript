// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const dynamicFieldsContainer = document.getElementById('dynamicFieldsContainer');
    const addFieldButton = document.getElementById('addFieldButton');
  
    // Counter to keep track of dynamically added fields
    let fieldCounter = 0;
  
    // Function to create a new form field group
    function createFormField() {
        fieldCounter++;
  
        // Create a new form group div
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');
  
        // Create a label
        const label = document.createElement('label');
        label.classList.add('form-label');
        label.textContent = `Field ${fieldCounter}`;
        label.setAttribute('for', `field${fieldCounter}`);
  
        // Create an input field
        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add('form-control');
        input.id = `field${fieldCounter}`;
        input.name = `field${fieldCounter}`;
        input.placeholder = `Enter value for Field ${fieldCounter}`;
  
        // Append label and input to the form group
        formGroup.appendChild(label);
        formGroup.appendChild(input);
  
        // Append the form group to the dynamic fields container
        dynamicFieldsContainer.appendChild(formGroup);
    }
  
    // Add event listener to the "Add New Field" button
    addFieldButton.addEventListener('click', createFormField);
  
    // Handle form submission
    const form = document.getElementById('dynamicForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
  
        // Collect form data into a JSON object
        const formData = new FormData(form);
        const data = {};
  
        // Iterate over form data and populate the JSON object
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
  
        // Log the JSON object to the console
        console.log('Form Data (JSON):', JSON.stringify(data, null, 2));
  
        // Show a success message
        alert('Form submitted successfully! Check the console for JSON output.');
    });
});

