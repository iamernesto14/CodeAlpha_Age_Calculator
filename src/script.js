document.addEventListener("DOMContentLoaded", () => {
  // Get the input fields
  const dayInput = document.getElementById("day");
  const monthInput = document.getElementById("month");
  const yearInput = document.getElementById("year");

  // Get the button tag
  const btn = document.getElementById("btn");

  // Add an event handler to the day input
  dayInput.addEventListener("input", function () {
    if (dayInput.nextElementSibling.innerHTML == "Must be a valid date") {
      dayInput.parentElement.classList.remove("error");
      monthInput.parentElement.classList.remove("error");
      yearInput.parentElement.classList.remove("error");
    }

    if (dayInput.value > 31) {
      dayInput.nextElementSibling.innerHTML = "Must be valid day";
      dayInput.classList.add("error");
      dayInput.previousElementSibling.classList.add("text-primary-light-red");
    } else {
      dayInput.classList.remove("text-primary-light-red");
      dayInput.previousElementSibling.classList.remove("error");
      dayInput.nextElementSibling.innerHTML = "";
    }
  });

  // Add event handler to the month input
  monthInput.addEventListener("input", function () {
    if (monthInput.nextElementSibling.innerHTML == "Must be a valid date") {
      dayInput.parentElement.classList.remove("error");
      monthInput.parentElement.classList.remove("error");
      yearInput.parentElement.classList.remove("error");
    }

    if (monthInput.value > 12) {
      monthInput.nextElementSibling.innerHTML = "Must be a valid month";
      monthInput.classList.add("error");
      monthInput.previousElementSibling.classList.add("text-primary-light-red");
    } else {
      monthInput.classList.remove("text-primary-light-red");
      monthInput.classList.remove("error");
      monthInput.previousElementSibling.classList.remove("text-primary-light-red");
      monthInput.nextElementSibling.innerHTML = "";
    }
  });

  // Add event handler to the year input
  yearInput.addEventListener("input", function () {
    if (monthInput.nextElementSibling.innerHTML == "Must be a valid date") {
      dayInput.parentElement.classList.remove("error");
      monthInput.parentElement.classList.remove("error");
      yearInput.parentElement.classList.remove("error");
    }

    let currentYear = new Date().getFullYear();
    if (yearInput.value > currentYear) {
      yearInput.nextElementSibling.innerHTML = "Must be in the past";
      yearInput.classList.add("error");
      yearInput.previousElementSibling.classList.add("text-primary-light-red");
    } else if (yearInput.value < 0) {
      yearInput.nextElementSibling.innerHTML = "Must be a valid year";
      yearInput.previousElementSibling.classList.add("text-primary-light-red");
      yearInput.classList.add("error");
    } else {
      yearInput.classList.remove("error");
      yearInput.previousElementSibling.classList.remove("text-primary-light-red");
      yearInput.nextElementSibling.innerHTML = "";
    }
  });

  // Handle the button click event
  btn.addEventListener("click", function () {
    // Getting data from input
    const day = parseInt(dayInput.value, 10);
    const month = parseInt(monthInput.value, 10);
    const year = parseInt(yearInput.value, 10);

    // Checking if fields are filled
    if (!day) {
      dayInput.classList.add("error");
      dayInput.previousElementSibling.classList.add("text-primary-light-red");
      dayInput.nextElementSibling.innerHTML = "This field is required";
    }
    if (!month) {
      monthInput.classList.add("error");
      monthInput.previousElementSibling.classList.add("text-primary-light-red");
      monthInput.nextElementSibling.innerHTML = "This field is required";
    }
    if (!year) {
      yearInput.classList.add("error");
      yearInput.previousElementSibling.classList.add("text-primary-light-red");
      yearInput.nextElementSibling.innerHTML = "This field is required";
    }
    if (!day || !month || !year) {
      return;
    }

    const date = new Date(year, month - 1, day);
    const currentData = new Date();

    // Checking if the date is correct
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day || date > currentData) {
      dayInput.previousElementSibling.classList.add("text-primary-light-red");
      dayInput.classList.add("error");
      dayInput.nextElementSibling.innerHTML = "Must be a valid date";
      monthInput.previousElementSibling.classList.add("text-primary-light-red");
      monthInput.classList.add("error");
      monthInput.nextElementSibling.innerHTML = "";
      yearInput.previousElementSibling.classList.add("text-primary-light-red");
      yearInput.classList.add("error");
      yearInput.nextElementSibling.innerHTML = "";
      return;
    } else {
      dayInput.classList.remove("error");
      monthInput.classList.remove("error");
      yearInput.classList.remove("error");
      dayInput.previousElementSibling.classList.remove("text-primary-light-red");
      monthInput.previousElementSibling.classList.remove("text-primary-light-red");
      yearInput.previousElementSibling.classList.remove("text-primary-light-red");
      dayInput.nextElementSibling.innerHTML = "";
    }

    let age_year = currentData.getFullYear() - date.getFullYear();
    let age_month = currentData.getMonth() + 1 - month;
    let age_day = currentData.getDate() - day;

    if (age_month < 0) {
      age_year -= 1;
      age_month += 12;
    }
    if (age_day < 0) {
      age_month -= 1;
      age_day += new Date(year, month - 1, 0).getDate();
    }

    // Display the calculated data in the result fields
    const outputDay = document.getElementById("display_day");
    const outputMonth = document.getElementById("display_month");
    const outputYear = document.getElementById("display_year");

    OutputNumber(outputYear, age_year);
    OutputNumber(outputMonth, age_month);
    OutputNumber(outputDay, age_day);
  });

  // Animated value output function
  function OutputNumber(el, num) {
    let step = 50;
    if (num > 25) step = 35;
    if (num > 50) step = 25;
    if (num > 75) step = 20;
    if (num > 100) step = 10;
    if (num > 200) step = 1;

    let n = 0;
    if (num === 0) {
      el.innerHTML = n;
    } else {
      let interval = setInterval(() => {
        n += 1;
        if (n > num) {
          clearInterval(interval);
          el.innerHTML = num;
        } else {
          el.innerHTML = n;
        }
      }, step);
    }
  }
});
