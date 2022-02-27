
// StartBlock On_Project_Start
Toggle();
// EndBlock On_Project_Start

function Toggle(x) {
    let a = document.getElementById("Toggle");
    let b = a.getAttribute("value");
    if (b == "0"){
        document.getElementById("Slide").style.left = "60px";
        document.getElementById("Slide_Indicator").style.color = "#26ff38";
        document.getElementById("Slide_Indicator").style.transform = "rotateZ(90deg)";
        a.setAttribute("value", "1");
    }
    else {
        document.getElementById("Slide").style.left = "20px";
        document.getElementById("Slide_Indicator").style.color = "#ff2626";
        document.getElementById("Slide_Indicator").style.transform = "rotateZ(270deg)";
        a.setAttribute("value", "0");
    }
}

function powerToggle() {
    let a = document.getElementById("powerButton");
    let b = a.getAttribute("value");
    if (b == "0"){
        a.style.background = "linear-gradient(to left, #30CFD0 0%, #009e22 100%)";
        a.style.backgroundClip = "text";
        a.style.webkitTextFillColor = "transparent";
        a.style.transform = "rotateZ(180deg)";
        a.setAttribute("value", "1");
    }
    else {
        a.style.background = "linear-gradient(to left, #9e0022 0%, #30CFD0 100%)";
        a.style.backgroundClip = "text";
        a.style.webkitTextFillColor = "transparent";
        a.style.transform = "rotateZ(0deg)";
        a.setAttribute("value", "0");
    }
}
