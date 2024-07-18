document.addEventListener('DOMContentLoaded', () => {
  const dayInput = document.getElementById('day');
  const monthInput = document.getElementById('month');
  const yearInput = document.getElementById('year');
  const displayDay = document.getElementById('display_day');
  const displayMonth = document.getElementById('display_month');
  const displayYear = document.getElementById('display_year');
  const btn = document.getElementById('btn');

  btn.addEventListener('click', calculateAge);

  