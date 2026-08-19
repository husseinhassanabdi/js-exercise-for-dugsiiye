
const colorPicker = document.getElementById("colorpicker");
const colorPreview = document.getElementById("colorpreview");
const colorHistory = document.getElementById("color history");
const clearHistory = document.getElementById("clearhistory");


colorPicker.addEventListener("input", function () {


    const selectedColor = colorPicker.value;

    
    colorPreview.style.backgroundColor = selectedColor;

    
    const listItem = document.createElement("li");

    
    listItem.textContent = selectedColor;

   
    listItem.style.color = selectedColor;

   
    colorHistory.appendChild(listItem);
});



clearHistory.addEventListener("click", function () {
    colorHistory.innerHTML = "";
});