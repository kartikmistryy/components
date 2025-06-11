const inputs = document.querySelectorAll('input[type="checkbox"]');

inputs.forEach(input => {
    input.addEventListener('change', (e) => {
        const parentLi = e.target.parentNode; // Reference the parent <li> element
        if (input.checked) {
            parentLi.classList.add('checkedLi'); // Add animation class when checked
        } else {
            parentLi.classList.remove('checkedLi'); // Remove class when unchecked
        }
    });
});