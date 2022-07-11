function darkMode(){
    let element = document.body;
    let mainBox = document.getElementsByClassName("main-box");
    let mainText = document.getElementsByClassName("main-text");
    let state = localStorage.getItem("state")

    element.classList.toggle("dark-mode");

    for (const i of mainBox) {
        i.classList.toggle("dark-modeb");
    }

    for(const x of mainText) {
        x.classList.toggle("dark-mode");
    }

    if(state !=="dark"){
        localStorage.setItem("state","dark");
    }else{
        localStorage.setItem("state","light");
    }
}

function darkCheck(){
    let element = document.body;
    let mainBox = document.getElementsByClassName("main-box");
    let mainText = document.getElementsByClassName("main-text");
    let state = localStorage.getItem("state");
    if (state =="dark"){
        element.classList.toggle("dark-mode");
    }
}

function myFunction() {
    var x = document.getElementById("divBea");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
}
function myFunction2() {
    var x = document.getElementById("hide_2");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
}
function myFunction3() {
    var x = document.getElementById("hide_3");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
}
function myFunction4() {
    var x = document.getElementById("hide_4");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
}

function myFunction5() {
    var x = document.getElementById("hide_5");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
}
function myFunction6() {
    var x = document.getElementById("hide");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
}

// function myFunction6() {

//     $(document).ready(function() {
//     $('.form-box1,.form-box2,.form-box3').hide();
//     });


//     $("#hide-text").click(function() {
//         $(".form-box1").show();
//     });

//     $("#hide-text2").click(function() {
//         $(".form-box2").show();
//     });

//     $("#hide-text3").click(function() {
//         $(".form-box3").show();
//     });
// };