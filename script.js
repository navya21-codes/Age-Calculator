const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");
const countdownEl = document.getElementById("countdown");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
    return;
  }

  const age = getAge(birthdayValue);
  const daysToNextBirthday = getDaysToNextBirthday(birthdayValue);

  resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old.`;
  countdownEl.innerText = `Your next birthday is in ${daysToNextBirthday} day${
    daysToNextBirthday > 1 ? "s" : ""
  }!`;
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

function getDaysToNextBirthday(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  birthdayDate.setFullYear(currentDate.getFullYear());

  if (birthdayDate < currentDate) {
    birthdayDate.setFullYear(currentDate.getFullYear() + 1);
  }

  const diffTime = Math.abs(birthdayDate - currentDate);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

btnEl.addEventListener("click", calculateAge);