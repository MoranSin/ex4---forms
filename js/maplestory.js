
function popupCreateId() {
  let popupCreate = document.querySelector(".popup-user-join-area");
  console.log(popupCreate);
  if (popupCreate.classList.contains("is-active")) {
    popupCreate.classList.remove("is-active");
  } else {
    popupCreate.classList.add("is-active");
  }
}


$("document").ready(function(){
    $('form').on('submit',function(event){
        debugger;
        let checkedBoxes = $('input[type=checkbox]:checked').length;
        let errorMsg = $("nerrorMsg");
            if(checkedBoxes < 3){
            alert("Please select all difficulties.");
            event.preventDefault();
            return false;
        }
        return true;
    })
})

