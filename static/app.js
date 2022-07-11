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
    
        for (const i of mainBox) {
            i.classList.toggle("dark-modeb");
        }
    
        for(const x of mainText) {
            x.classList.toggle("dark-mode");
    }
    }
    }