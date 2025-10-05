const modalBtn = document.querySelector(".main-button")
const modal = document.querySelector(".backdrop")
// const modal = document.querySelector(".modal")
modalBtn.addEventListener("click", () => {
    modal.classList.add("is-active")
})