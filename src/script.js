document.addEventListener('DOMContentLoaded', () => {
  const dayInput = document.getElementById('day');
  const monthInput = document.getElementById('month');
  const yearInput = document.getElementById('year');
  const displayDay = document.getElementById('display_day');
  const displayMonth = document.getElementById('display_month');
  const displayYear = document.getElementById('display_year');
  const btn = document.getElementById('btn');

  btn.addEventListener('click', calculateAge);

  function calculateAge() {
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);
    const error = document.querySelectorAll('p');


    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      alert('Please enter a valid date.');
      return;
    }

    if (month > 12 || month < 1) {
      const monthError = error[1];
      monthError.textContent = "Enter a valid month";
      monthError.classList.remove('hidden');
      // monthInput.classList.add('border')
      monthInput.classList.add('border-red-500')
      return;
    } else {
      monthError.textContent = "";
      monthInput.classList.remove('border-red-500');
      // monthError.classList.add('hidden');
    }

    // Get the number of days in the given month and year
    const daysInMonth = new Date(year, month, 0).getDate();

    if (day > daysInMonth || day < 1) {
      alert(`Please enter a valid day (1-${daysInMonth}) for the specified month and year.`);
      return;
    }

    const birthdate = new Date(year, month - 1, day); // Months are 0-based in JavaScript
    const currentDate = new Date();

    if (birthdate > currentDate) {
      alert('Birthdate cannot be in the future.');
      return;
    }

    let years = currentDate.getFullYear() - birthdate.getFullYear();
    let months = currentDate.getMonth() - birthdate.getMonth();
    let days = currentDate.getDate() - birthdate.getDate();

    // Adjust for negative months or days
    if (months < 0) {
      years--;
      months += 12;
    }
    if (days < 0) {
      months--;
      const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
      days += previousMonth.getDate();
    }

    // Output Section
    displayDay.textContent = years;
    displayMonth.textContent = months;
    displayYear.textContent = days;
  }
});
