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
  })
});
