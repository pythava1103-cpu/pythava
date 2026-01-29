// 가짜 사용자 DB
const fakeDB = [
    { "uid": "admin", "upw": "1234", "name": "Administrator" },
    { "uid": "guest", "upw": "guest", "name": "Visitor_01" }
];

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const id = document.getElementById('userId').value;
    const pw = document.getElementById('userPw').value;

    // 유저 확인
    const user = fakeDB.find(u => u.uid === id && u.upw === pw);

    if (user) {
        alert(`[SYSTEM] 접속 성공: ${user.name}님 환영합니다.`);
        
        // 브라우저 세션에 저장 (session.js에서 감지)
        localStorage.setItem('loginStatus', 'active');
        localStorage.setItem('userName', user.name);
        
        // 메인 페이지로 이동 (경로에 주의하세요)
        window.location.href = "/index.html";
    } else {
        alert("[ERROR] 인증에 실패했습니다. 올바른 IDENTIFIER를 입력하세요.");
    }
});
