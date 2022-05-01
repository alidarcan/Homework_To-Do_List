// Identifications
const inputDOM = document.querySelector("#task")
const submitDOM = document.querySelector("#liveToastBtn")
const ulDOM = document.querySelector("#list")

// First Config from localStorage
let itemsArray = { ...localStorage }
let keys = Object.keys(itemsArray)
if (keys.length > 0) {
    keys.forEach(element => createLi(element))
}

// Adding Function
function newElement() {
    if (inputDOM.value == "") { //if it's empty
        $('.empty').toast('show');
        return;
    }
    if (localStorage.getItem(inputDOM.value) === null) { // success
        createLi(inputDOM.value);
        $('.success').toast('show')
        inputDOM.value = ""
    }
    else { // if it's already in the list
        $('.same').toast('show')
    }
}

// Creating list lines(todos)
function createLi(text) {
    const liDOM = document.createElement("li")
    liDOM.innerHTML = text
    ulDOM.appendChild(liDOM)
    localStorage.setItem(text, text)
    const image = document.createElement('img') // Adding some visual
    image.src = 'img/trash.png'
    image.height = "25"
    image.classList.add("trash")
    image.addEventListener("click", removeLi)
    liDOM.appendChild(image)
    liDOM.addEventListener("click", updateElement)
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
    localStorage.removeItem(this.parentElement.innerHTML.split("<")[0])
    this.parentElement.remove()
}