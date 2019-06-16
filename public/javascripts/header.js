
/// LOGIN MODULE

/// Check for logged in...

// if (localStorage.jwt){
//     var userBtn = document.querySelector(".user-button");
//     userBtn.classList.remove("login-button");
//     userBtn.innerHTML = localStorage.name;
// }else{
//     var loginBtn = document.querySelector(".login-button");
//     var loginClose = document.querySelector(".login-close");

//     loginBtn.addEventListener("click", function() {
//         document.querySelector(".login-container").classList.remove("hidden");
        
//     })
//     loginClose.addEventListener("click", function() {
//         document.querySelector(".login-container").classList.add("hidden");
        
//     })

// }




// var login = function(){

//                 const formData = new FormData(document.querySelector('form.login-form'))

//                 var formJson = JSON.stringify(Object.fromEntries(formData));

//                 console.log(formJson);

//                 fetch(location.protocol + "//" + location.hostname + ":1337/auth/local", 
//                 {
//                     method: 'POST', 
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: formJson,

//                 }).then(function(response) { 
//                     // Convert to JSON
//                     return response.json();
//                 }).then(function(j) {
//                     // Yay, `j` is a JavaScript object
//                     console.log(j); 
//                     if (j.statusCode == 400){
//                         document.querySelector("p.error").innerHTML = "Wrong email or password"
//                     }else if (j.jwt){
//                         document.querySelector("p.error").innerHTML = "Success"
//                         localStorage.setItem("jwt", j.jwt);
//                         localStorage.setItem("name", j.user.firstname);
//                         var userBtn = document.querySelector(".user-button");
//                         userBtn.classList.remove("login-button");
//                         userBtn.innerHTML = localStorage.name;
//                     }
//                 });

//         }



/// MENU OPEN-CLOSE
document.querySelector(".menu-button").addEventListener("click", function() {
document.querySelector(".menu").classList.remove("hidden");
})
document.querySelector(".close-button").addEventListener("click", function() {
    document.querySelector(".menu").classList.add("hidden");
})