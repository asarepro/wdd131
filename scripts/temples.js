let hambuger = document.querySelector('#menu');
let navigation = document.querySelector('.navigation')
const currentYear = new Date();
const fullyear = currentYear.getFullYear();

hambuger.addEventListener('click',
     () => {
        navigation.classList.toggle('open');
        hambuger.classList.toggle('open');
    }
)



document.getElementById('lastModified').innerHTML = `Last Modification ${document.lastModified}`;

const year = document.getElementById('year').innerHTML += ` ${fullyear} Asare Jeffrey | Ghana 😎`;