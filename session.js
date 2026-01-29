// header.js
document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username");

    const guestMsg = document.getElementById("guestMsg");
    const userMsg = document.getElementById("userMsg");
    const usernameDisplay = document.getElementById("usernameDisplay");

    if(username){
        // 로그인 되어 있음 → 사용자 이름 표시
        usernameDisplay.textContent = username;
        userMsg.style.display = "inline";
        guestMsg.style.display = "none";
    } else {
        // 로그인 안됨 → 로그인/회원가입 표시
        userMsg.style.display = "none";
        guestMsg.style.display = "inline";
    }
});
