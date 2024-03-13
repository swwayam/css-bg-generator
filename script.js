// Generate random color
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Set background color and display color code
function setBackgroundColor(color) {
    const colorBox = document.querySelector('.color-box');
    const colorCode = document.querySelector('.color-code');
    colorBox.style.backgroundColor = color;
    colorCode.textContent = color;
}

// Add event listener to generate button
const generateBtn = document.getElementById('generateBtn');
generateBtn.addEventListener('click', () => {
    const randomColor = generateRandomColor();
    setBackgroundColor(randomColor);
});

// Add event listener to set color button
const setColorBtn = document.getElementById('setColorBtn');
setColorBtn.addEventListener('click', () => {
    const colorPicker = document.getElementById('colorPicker');
    const selectedColor = colorPicker.value;
    setBackgroundColor(selectedColor);
});

// Set initial background color on page load
setBackgroundColor('#FFFFFF');