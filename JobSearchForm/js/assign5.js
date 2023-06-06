var err= "";

function FormCheck(){
    err= "";
    var ret = false;
    
    EducationCheck();
    PhoneCheck();

    document.getElementById("errors").innerHTML = err;
    console.log(err);

    if(err==""){
        ret = true;
    }
    return ret;
}




function EducationCheck(){
    var user_education = document.getElementById("Education_Level").value;

    if(user_education == 0){
            err += "Please choose an education";
    }
}


function PhoneCheck(){
    var correct_pattern = /^([0-9]{3}[-]){2}[0-9]{4}$/;
    var user_phone = document.getElementById("Phone_Number").value;
    
    console.log(user_phone);

    if(correct_pattern.test(user_phone) == false){
         err += "Wrong format, Correct Format should be 999-999-9999";
    }

}