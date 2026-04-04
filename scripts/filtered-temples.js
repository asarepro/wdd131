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


// Temple Filterd
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...

    {
        templeName: "Accra Ghana Temple",
        location: "Accra Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-5154.jpg"
    },

    {
        templeName:"Adelaide Australia Temple",
        location: "Australia",
        dedicated: "2000, June , 15",
        area: 10700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4371.jpg"
    },

    {
        templeName:"Alabang Philippines Temple",
        location:"Filinvest City",
        dedicated: "2026, January, 18",
        area: 35998,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/alabang-philippines-temple/alabang-philippines-temple-67738.jpg"
    }
];

templeCards(temples);

function templeCards() {
    temples.forEach(temple => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let location = document.createElement('p');
        let dedication = document.createElement('p');
        let area = document.createElement('p');
        let image = document.createElement('img');

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span>${temple.location}`;
        dedication.innerHTML = `<span class="label>Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span>Size:</span>${temple.area} sq ft`;
        image.setAttribute('src', temple.imageUrl);
        image.setAttribute('alt', `${temple.templeName}`);
        image.setAttribute('loading', 'lazy');

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(image);

        document.querySelector('.figure-container').appendChild(card);
    })
}

// // temples.forEach((temp,index) => { console.log(index+1,temp.templeName) });
// let ys = document.querySelector('#old');

// ys.addEventListener('click',
//     function () {
//         // let fil_arr = ;
//         templeCards(temples.filter(temple => !temple.location.includes("Utah")));
//     }
// )

// function templeCards(param) {
//     param.forEach(temple => {
//         let card = document.createElement('section');
//         let name = document.createElement('h3');
//         let location = document.createElement('p');
//         let dedication = document.createElement('p');
//         let area = document.createElement('p');
//         let image = document.createElement('img');

//         name.textContent = temple.templeName;
//         location.innerHTML = `<span class="label">Location:</span>${temple.location}`;
//         dedication.innerHTML = `<span class="label>Dedicated:</span> ${temple.dedicated}`;
//         area.innerHTML = `<span>Size:</span>${temple.area} sq ft`;
//         image.setAttribute('src', temple.imageUrl);
//         image.setAttribute('alt', `${temple.templeName}`);
//         image.setAttribute('loading', 'lazy');

//         card.appendChild(name);
//         card.appendChild(location);
//         card.appendChild(dedication);
//         card.appendChild(area);
//         card.appendChild(image);

//         document.querySelector('.figure-container').appendChild(card);
//     })
// }


