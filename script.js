
const button = document.getElementById("changeColor");
const colorCode = document.getElementById("colorCode");

function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

button.addEventListener("click", function () {
    const newColor = generateRandomColor();

    document.body.style.backgroundColor = newColor;
    colorCode.textContent = newColor;
});
