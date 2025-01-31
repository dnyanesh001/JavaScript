document.addEventListener('DOMContentLoaded', function () {
    const dynamicFieldsContainer = document.getElementById('dynamicFieldsContainer');
    const addFieldButton = document.getElementById('addFieldButton');
  
    let fieldCounter = 0;
  
    function createFormField() {
      fieldCounter++;
  
      const formGroup = document.createElement('div');
      formGroup.classList.add('form-group');
  
      const label = document.createElement('label');
      label.classList.add('form-label');
      label.textContent = Field `${fieldCounter}`;
      label.setAttribute('for', `field${fieldCounter}`);
  
      const input = document.createElement('input');
      input.type = 'text';
      input.classList.add('form-control');
      input.id = `field${fieldCounter}`;
      input.name = `field${fieldCounter}`;
      input.placeholder = `Enter value for Field ${fieldCounter}`;
  
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
  
      console.log('Form Data (JSON):', JSON.stringify(data, null, 2));
  
      // Export JSON as a file
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'form-data.json';
      link.textContent = 'Download JSON';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
  
      alert('Form submitted successfully! JSON file downloaded.');
    });
  });