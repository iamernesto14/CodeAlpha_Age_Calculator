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
    dayInput.parentElement.classList.remove('error');
    monthInput.parentElement.classList.remove('error');
    yearInput.parentElement.classList.remove('error');
  }

  // check if date input is greater than 31, then we add the error class
  if (dayInput.value > 31) {
    dayInput.nextElementSibling.innerHTML = "Must be valid day";
    dayInput.classList.add('error');
    dayInput.classList.remove('focus:outline-primary-puple');
  } else {
    dayInput.classList.remove('error')
    dayInput.classList.add('focus:outline-primary-puple')
  }
});

// Add event handler to the month input
monthInput.addEventListener('input', function () {
  // checking for error in the month input field
  if (monthInput.nextElementSibling.innerHTML = "Must be a valid date") {
    dayInput.parentElement.classList.remove('error');
    monthInput.parentElement.classList.remove('error');
    yearInput.parentElement.classList.remove('error');
  }

  // check if a month is greater than 12, we signal an error
  if (monthInput.value > 12) {
    monthInput.nextElementSibling.innerHTML = 'Must be a valid month';
    monthInput.parentElement.classList.add('error');
  } else {
    monthInput.parentElement.classList.remove('error')
  }
});

// Ad event handler to the year input
yearInput.addEventListener('input', function () {
  // checking for error in year input field
  if (yearInput.nextElementSibling.innerHTML = "Must be a valid date") {
    dayInput.parentElement.classList.remove('error');
    monthInput.parentElement.classList.remove('error');
    yearInput.parentElement.classList.remove('error');
  }

  // checking if the specified year is greater than current year
  let Data = new Date();
  if (yearInput.value > Data.getFullYear()) {
    yearInput.nextElementSibling.innerHTML = "Must be in the past";
    yearInput.parentElement.classList.add('error'); 
  } else {
    yearInput.parentElement.classList.remove('error');
  }
});



  function calculateAge() {

  }

})