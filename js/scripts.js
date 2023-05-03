$("document").ready(function(){
    $('form').on('submit',function(){
        let inputVal = $('#fn').val();
        let phoneVal = $('#p').val();
        let checkedBoxes = $('input[type=checkbox]:checked').length;
        if(checkedBoxes < 3){
            alert("Please select at least 3 interests.");
            return false;
        }
        if(!/\s/.test(inputVal)||/\d/.test(inputVal)){
            alert("Invalid name.");
            return false;
        }
        if(!/^\d{9,10}$/.test(phoneVal)){
            alert("Invalid phone number.");
            return false;
        }
        return true;
    })
})
