
function popupCreateId() {
  let popupCreate = document.querySelector(".popup-user-join-area");
  console.log(popupCreate);
  if (popupCreate.classList.contains("is-active")) {
    popupCreate.classList.remove("is-active");
  } else {
    popupCreate.classList.add("is-active");
  }
}
    