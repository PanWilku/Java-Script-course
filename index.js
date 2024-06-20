document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myForm").addEventListener("submit", function(event){
        event.preventDefault();
        let username = document.getElementById("Username").value;
        console.log(username);
        let password = document.getElementById("Password").value;
        console.log(password)
        let email = document.getElementById("Email").value;
        console.log(email)
    });

    const submit = document.getElementById("Submit");
    const checked_info = document.getElementById("checked-result");
    
    submit.onclick = function(){
        const years = document.querySelectorAll('input[name="year"]');
        let yearChecked = false;
    
        years.forEach((year, index) => {
            if (year.checked){
                checked_info.textContent = `${index + 1} year is checked`;
                yearChecked = true;
                window.alert("You are logged in successfully!")
                window.location.href = "project.html";
            }
        });

        if (!yearChecked) {
            checked_info.textContent = "Select your year!";
            window.alert("Select your year!")
        }
    

}

});



