function checkName() {

    let name =
        document.getElementById("nameInput")
        .value
        .trim()
        .toLowerCase();

    if(name === "simran") {
        window.location.href =
            "khushi1.html";
    }
    else{
        document.getElementById("error")
        .innerHTML =
        "❌ Access Denied! Only Simran Can Enter ❤️";
    }
}