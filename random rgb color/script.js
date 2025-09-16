const generateRgbColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};

function updateColor() {
    const color = generateRgbColor();
    const colorBox = document.getElementById("colorBox");
    colorBox.style.backgroundColor = color;

    const colorCode = document.getElementById("colorCode");
    colorCode.innerText = color;
}

const copyColorCode = () => {
    const colorCode = document.getElementById("colorCode");
    const inputtag = document.createElement('input');
    document.body.appendChild(inputtag);

    inputtag.value = colorCode.innerText;
    inputtag.select();
    document.execCommand('copy');

    document.body.removeChild(inputtag);
    alert("Color code copied!");
};

document.getElementById("copyBtn").addEventListener("click", copyColorCode);

function generateBtn() {

    updateColor()
    
}