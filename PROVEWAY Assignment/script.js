 

  const checkboxes = document.querySelectorAll('input[type="checkbox"][name="boxCheckbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        
        checkboxes.forEach((c) => {
          const box = c.closest('.box');
        box.style.backgroundColor = c.checked && '#F4FBF9' ; 
          if (c !== checkbox) {
            const box = c.closest('.box'); 
        box.style.backgroundColor = c.checked &&  '#ffffff';
            
            c.checked = false;
            hideDropdown(c);
          }
        });
      }
      showDropdown(checkbox);
    });
  });

  function showDropdown(checkbox) {
    const dropdown1pair = document.getElementById('dropdown1pair');
    const dropdown2pair = document.getElementById('dropdown2pair');
    const dropdown3pair = document.getElementById('dropdown3pair');

    if (checkbox.id === 'checkbox2') {
      dropdown2pair.classList.toggle('hidden-dropdown', !checkbox.checked);
    } else if (checkbox.id === 'checkbox3') {
      dropdown3pair.classList.toggle('hidden-dropdown', !checkbox.checked);
    }else if(checkbox.id === 'checkbox1'){
      dropdown1pair.classList.toggle('hidden-dropdown', !checkbox.checked);

    }
  }
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      calculateTotal();
    });
  });

  function calculateTotal() {
    const checkboxValues = [0.5, 0.4, 0.6]; 
    let totalAmount = 0;

    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        totalAmount += checkboxValues[index] * 195;
      }
    });

    const totalAmountElement = document.getElementById('totalAmount');
    totalAmountElement.textContent = totalAmount.toFixed(2);
  }
  function hideDropdown(checkbox) {
    const dropdown1pair = document.getElementById('dropdown1pair');
    const dropdown2pair = document.getElementById('dropdown2pair');
    const dropdown3pair = document.getElementById('dropdown3pair');

    if (checkbox.id === 'checkbox2') {
      dropdown2pair.classList.add('hidden-dropdown');
    } else if (checkbox.id === 'checkbox3') {
      dropdown3pair.classList.add('hidden-dropdown');
    }else if(checkbox.id === 'checkbox1'){
      dropdown1pair.classList.add('hidden-dropdown');

    }
  }
