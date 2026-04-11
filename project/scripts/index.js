const currentYear = new Date();
const fullyear = currentYear.getFullYear();
const year = document.getElementById('year').innerHTML += ` ${fullyear} Asare Jeffrey | Ghana 😎`;
document.getElementById('lastModified').innerHTML = `Last Modification ${document.lastModified}`;

let menu_button = document.querySelector('.menu-button');
let menu_close = document.querySelector('.menu_close');

menu_button.addEventListener('click',
    function () {
        menu_close.classList.toggle('menu_open');
    }
)


let information = document.querySelector('.information');
let info_short = document.querySelector('.info');
information.addEventListener('click',
    function () {
        let info_short = document.querySelector('.info');
        info_short.classList.toggle('infront');
        
    }
)

let close_btn = document.querySelector('.close-btn');

close_btn.addEventListener('click',
    function () {
        info_short.classList.remove('infront');
    }
)


// ============FORMS=============
        document.getElementById("contactForm").addEventListener("submit", function (event) {
            event.preventDefault();

            let isValid = true;

            // Name validation
            const name = document.getElementById("name").value.trim();
            if (name === "") {
                document.getElementById("nameError").textContent = "Name is required.";
                isValid = false;
            } else {
                document.getElementById("nameError").textContent = "";
            }

            // Email validation
            const email = document.getElementById("email").value.trim();
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
            if (email === "") {
                document.getElementById("emailError").textContent = "Email is required.";
                isValid = false;
            } else if (!email.match(emailPattern)) {
                document.getElementById("emailError").textContent = "Enter a valid email address.";
                isValid = false;
            } else {
                document.getElementById("emailError").textContent = "";
            }

            // Message validation
            const message = document.getElementById("message").value.trim();
            if (message === "") {
                document.getElementById("messageError").textContent = "Message cannot be empty.";
                isValid = false;
            } else {
                document.getElementById("messageError").textContent = "";
            }

            // If valid, simulate form submission
            if (isValid) {
                alert("Thank you for contacting us! We will get back to you soon.");
                document.getElementById("contactForm").reset();
            }
        });