const currentYear = new Date();
const fullyear = currentYear.getFullYear();
const year = document.getElementById('year').innerHTML += ` ${fullyear} Asare Jeffrey | Ghana 😎`;
document.getElementById('lastModified').innerHTML = `Last Modification ${document.lastModified}`;