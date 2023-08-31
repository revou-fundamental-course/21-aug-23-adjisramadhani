let user = prompt("Masukkan nama kamu");
document.getElementById("set-name").innerText = user;

function execForm() {
    let today = new Date();
    let nama = document.forms['exec-form']['nama'].value;
    let tanggal = document.forms['exec-form']['tanggal'].value;
    let kelamin = document.forms['exec-form']['kelamin'].value;
    let pesan = document.forms['exec-form']['pesan'].value;

    let tanggalArr = tanggal.split("-");
    let newTanggal = tanggalArr[2] + "-" + tanggalArr[1] + "-" + tanggalArr[0];

    let newToday = today.toString().slice(0, 33);

    document.getElementById("current-time-show").innerText = newToday;
    document.getElementById("name-show").innerHTML = nama;
    document.getElementById("birthdate-show").innerHTML = newTanggal;
    document.getElementById("gender-show").innerHTML = kelamin;
    document.getElementById("message-show").innerHTML = pesan;

    return false;
}

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let i;
    let imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = imgList.length
    }
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideIndex - 1].style.display = "block";
}
