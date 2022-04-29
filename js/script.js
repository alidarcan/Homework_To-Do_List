//Yaptığınız yapıya Local Storage'ı da ekleyip verilerin kaybolmamasını sağlayın.


// Identifications
const inputDOM = document.querySelector("#task")
const submitDOM = document.querySelector("#liveToastBtn")
const ulDOM = document.querySelector("#list")

// Adding Function
function newElement() {
    if (inputDOM.value == "") {
        $('.error').toast('show')
    } else {
        const liDOM = document.createElement("li")
        liDOM.innerHTML = inputDOM.value
        ulDOM.appendChild(liDOM)
        inputDOM.value = ""
        const image = document.createElement('img')
        image.src = 'img/trash.png'
        image.height = "25"
        image.classList.add("trash")
        image.addEventListener("click", removeLi)
        liDOM.appendChild(image)
        liDOM.addEventListener("click", updateElement)
        localStorage.setItem(liDOM.getAttribute("#text"), liDOM.innerHTML)
        $('.success').toast('show')
    }
}

// Automatically add when "Enter Button" is hit.
inputDOM.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // ekstra
        submitDOM.click();
    }
});

// Checked or not Checked function of "li" element
function updateElement() {
    if (this.classList.contains("checked")) {
        this.classList.remove("checked")
    } else {
        this.classList.add("checked")
    }
}

// Remove Line
function removeLi() {
    this.parentElement.remove()
}