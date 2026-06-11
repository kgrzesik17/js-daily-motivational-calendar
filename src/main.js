const daysOfTheWeek = [
  "poniedziałek",
  "wtorek",
  "środa",
  "czwartek",
  "piątek",
  "sobota",
  "niedziela",
];

const table = document.querySelector(".calendar");

function generateTableHead() {
  let html = '<thead class="calendar__head">';

  daysOfTheWeek.map((el) => {
    html += `<td>${el}</td>`;
  });

  console.log("html: " + html);

  table.insertAdjacentHTML("afterbegin", html + "</thead>");
}

function generateTableBody() {
  let html = "<td>";

  table.insertAdjacentHTML("beforeend", html + "</td>");
}

generateTableHead();
generateTableBody();
