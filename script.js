


const submit = document.getElementById("btm-btn");

submit.addEventListener("click", validate);

function validate(e) {
    e.preventDefault();

    const firstNameField = document.getElementById("test");
    const lastNameField = document.getElementById("test2");
    const emailField = document.getElementById("test3");
    const passwordField = document.getElementById("test4");
    let valid = true;

    if (!firstNameField.value) {
        const nameError = document.getElementById("nameError");
        const lastnameError = document.getElementById("lastnameError");
        const emailError = document.getElementById("emailError");
        const pswError = document.getElementById("pswError")
        
      
        
        
        nameError.classList.add("visible");
        firstNameField.classList.add("invalid");
        
      

        lastnameError.classList.add("visible");
        lastNameField.classList.add("invalid");

        emailError.classList.add("visible");
        emailField.classList.add("invalid");

        pswError.classList.add("visible");
        passwordField.classList.add("invalid");

        document.getElementById("test").placeholder ="";
        document.getElementById("test2").placeholder ="email@example/com"
        document.getElementById("test3").placeholder ="";
        document.getElementById("test4").placeholder ="";

        document.getElementById("test2").style.color="red";
        console.log(document.getElementById("test2"))
        

        }

    
   
    
    
    return valid;
      
}






  /*document.getElementById("test").style.visibility);*/
      /*document.textContent("test").style.visibility = "none";*/

/*if (displaySetting == 'block') {
          firstNameField.style.display = 'none';*/


    