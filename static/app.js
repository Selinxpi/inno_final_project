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
    let x = document.getElementById("divBea");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }
}
function myFunction2() {
    let x = document.getElementById("hide_2");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }
}
function myFunction3() {
    let x = document.getElementById("hide_3");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }
}
function myFunction4() {
    let x = document.getElementById("hide_4");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }
}

function myFunction5() {
    let x = document.getElementById("hide_5");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }
}
function myFunction6() {
    let x = document.getElementById("hide");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }
}

function myFunction7() {
    let x = document.getElementById("hide_6");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }
}