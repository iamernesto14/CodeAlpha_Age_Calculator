document.addEventListener("DOMContentLoaded", () => {
  const dayInput = document.getElementById("day");
  const monthInput = document.getElementById("month");
  const yearInput = document.getElementById("year");
  const btn = document.getElementById('btn');

  btn.addEventListener('click', function () {
    let day = dayInput.value;
    let month = monthInput.value;
    let year = yearInput.value;

    if (!day) {
      alert('Day is required');
    }

    if (!month) {
      alert('Month is required');
    }

    if (!year) {
      alert('Year is required')
    }

    if (!day || !month || !year) {
      return;
    }

    let date = new Date(year, month - 1, 0)
    let currentData = new Date();
    
    if (!(date.getFullYear() == year && date.getMonth() == month - 1 && date.getDate() == day) || (document.getElementsByClassName('error').length) || date > currentData || year < 0) {
      alert('Must be a valid date');
    }

    let age_year = currentData.getFullYear() - date.getFullYear();
    let age_month = 0;
    let age_day = 0;

    if (currentData < new Date(currentData.getFullYear(), month - 1, day)) {
      age_year = age_year - 1;
      age_month = currentData.getMonth() + 1;
      age_day = currentData.getDate();
    } else {
      if (currentData.getMonth() + 1 === month) {
        age_mounth = 0;
        age_day = currentData.getDate() - day;
        console.log(age_day);
      } else {
        age_mounth = currentData.getMonth() + 1 - month;
        if (currentData.getDate() < day) {
          age_month = age_month - 1;
          age_day = currentData.getDate() + new Date(currentData.getFullYear(), currentData.getMonth(), 0).getDate() - day;
        } else {
          age_day = currentData.getDate() - day;
        }
      }
    }

    const displayYear = document.getElementById('display_year').textContent = age_year;
    const displayMonth = document.getElementById('display_month').textContent = age_month;
    const displayDay = document.getElementById('display_day').textContent = age_day;

     
  })
});
