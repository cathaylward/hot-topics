const container = document.querySelector("main");
let homeBtn = document.querySelectorAll(".home");
console.log(homeBtn);
const portBtn = document.querySelectorAll(".portfolio");

let homeURL = "./partials/home.html";
let portURL = "./partials/portfolio.html";

document.onload = loadContent(homeURL);


function loadContent(URL) {

    fetch(URL)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            container.innerHTML = data;
        })
        .catch(function (error) {
            console.log(error.message);
        });

}

function selectContent(e) {
    e.preventDefault();

    if (e.target.textContent === "home") {
        loadContent(homeURL);
    } else if (e.target.textContent === "portfolio") {
        loadContent(portURL);
    };

};


for (let i = 0; i < homeBtn.length; i++) {
    homeBtn[i].addEventListener("click", selectContent);
};



for (let i = 0; i < portBtn.length; i++) {
    portBtn[i].addEventListener("click", selectContent);
};
