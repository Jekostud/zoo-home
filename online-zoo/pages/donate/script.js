const input = document.querySelector(".range-input");
const labels = document.querySelectorAll(".range-label");

function activeInput(uid) {
    for (const item of labels) {
        item.classList.remove("donatLine-active");
    }
    labels[uid - 1].classList.add("donatLine-active");
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