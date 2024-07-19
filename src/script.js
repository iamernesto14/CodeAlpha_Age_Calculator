document.addEventListener('DOMContentLoaded', () => {
  
  // Get the input fields
  const dayInput = document.getElementById('day');
  const monthInput = document.getElementById('month');
  const yearInput = document.getElementById('year');

  // Get the button tag
  const btn = document.getElementById('btn');

// Add an event handler to the day input
dayInput.addEventListener('input', function () {
  // checkng for error in the input feld
  if (dayInput.nextElementSibling.innerHTML === 'Must be valid date') {
    dayInput.classList.remove('error');
    monthInput.classList.remove('error');
    yearInput.classList.remove('error');
  }
})

  function calculateAge() {

  }

})