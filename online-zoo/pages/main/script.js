alert("Пожалуйста, проверьте задание 05.10")
const input = document.querySelector(".range-input");
const labels = document.querySelectorAll(".range-label");

function activeInput(uid) {
    for (const item of labels) {
        item.classList.remove("donat_range-active");
    }
    labels[uid - 1].classList.add("donat_range-active");
}

if (!!input) {
    input.addEventListener("change", () => {
        activeInput(input.value);
    })

    for (let item in labels) {
        if (typeof labels[item] === "object") {
            labels[item].addEventListener("click", () => {
                const range = +item + 1;
                input.value = range;
                activeInput(range);
            })
        }
    }
}



/************HAMBURGER***********/
const hamburger = document.querySelector('.hamburger'); //search hamburger!

function toggleMenu() {
    hamburger.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);

let nav = document.querySelector('.nav');
hamburger.addEventListener('click', function() {
    nav.classList.toggle('active');
})

const nav_link = document.querySelectorAll('.nav_link');
nav_link.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    hamburger.classList.remove('open');
    nav.classList.remove('active');
}