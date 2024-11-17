const form = document.getElementById('contact-form');
const nameInput = document.getElementById('contact-name');
const numberInput = document.getElementById('contact-number');
const gameInput = document.getElementById('contact-game');
const platInput = document.getElementById('contact-plat');
const hoursInput = document.getElementById('contact-hours');
const contactTable = document.getElementById('contact-table').querySelector('tbody');

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const contactName = nameInput.value;
  const contactNumber = numberInput.value;
  const gameName = gameInput.value;
  const isplat = platInput.value;
  const hoursNumber = hoursInput.value;

  if (contactName === '' || hoursNumber === '') {
    alert('Add more info!');
    return;
  }

  addContactToTable(contactName, contactNumber, gameName, isplat, hoursNumber);

  form.reset();
});

function addContactToTable(contactName, contactNumber, gameName, isplat, hoursNumber) {
  const newRow = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = contactName;

  const numberCell = document.createElement('td');
  numberCell.textContent = contactNumber;

  const gameCell = document.createElement('td');
  gameCell.textContent = gameName;

  const platCell = document.createElement('td');
  platCell.textContent = isplat;

  const hoursCell = document.createElement('td');
  hoursCell.textContent = hoursNumber;

  newRow.appendChild(nameCell);
  newRow.appendChild(numberCell);
  newRow.appendChild(gameName);
  newRow.appendChild(isplat);
  newRow.appendChild(hoursCell);

  contactTable.appendChild(newRow);

};