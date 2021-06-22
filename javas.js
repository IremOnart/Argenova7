form.addEventListener('submit',function(e){
    e.preventDefault();
})

$(document).ready(function(){
    $("#submit").click(function(){
       
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var phonenumber = $("#phone-number").val();
        var gender = $("#gender").val();
        var exampleFormControlTextarea1 = $("#exampleFormControlTextarea1").val();

        if(firstname.length == ""){
            $("#p1").text("Lütfen bu alanı doldurunuz");
            $("#firstname").focus();
            return false;
        }
        else if(lastname.length == ""){
            $("#p2").text("Lütfen bu alanı doldurunuz");
            $("#lastname").focus();
            return false;
        }
        else if(email.length == ""){
            $("#p3").text("Lütfen bu alanı doldurunuz");
            $("#email").focus();
            return false;
        }
        else if(password.length == ""){
            $("#p4").text("Lütfen bu alanı doldurunuz");
            $("#password").focus();
            return false;
        }
        else if(phonenumber.length == ""){
            $("#p5").text("Lütfen bu alanı doldurunuz");
            $("#phonenumber").focus();
            return false;
        }
        else if(gender.length == ""){
            $("#p6").text("Lütfen bu alanı doldurunuz");
            $("#gender").focus();
            return false;
        }
        else if(exampleFormControlTextarea1.length == ""){
            $("#p7").text("Lütfen bu alanı doldurunuz");
            $("#exampleFormControlTextarea1").focus();
            return false;
        }
       
    });
});

$(function() {
    $("#submit").click(function() {
        
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var phonenumber = $("#phone-number").val();
        var gender = $("#gender").val();
        var exampleFormControlTextarea1 = $("#exampleFormControlTextarea1").val();
        
        if(firstname != '' || lastname !='' || email !='' || password != '' || phonenumber != '' || gender != '' || exampleFormControlTextarea1 != ''){
            swal({
                icon: "success",
                title: "Successfully Registered!",
                timer: "10000",

              });
        }
        
       
    })
})
