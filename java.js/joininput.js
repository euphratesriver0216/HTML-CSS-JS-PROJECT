function checkId() { //아이디 유효성 검사
    const regExpId = /^[A-Za-z0-9]{4,10}$/;
    let id = document.getElementById("user-id").value;
    if (!regExpId.test(id)) {
        document.getElementById("wrongid").innerHTML = "형식에 맞지 않는 아이디 입니다."
        
    } else {
        document.getElementById("wrongid").innerHTML = "";
    return true;
}
}

function checkPw() { //비밀번호 유효성 검사
    const regExpPwd = /^(?=.*?[a-zA-Z])(?=.*?[0-9]).{4,20}$/;
    let pw = document.getElementById("user-pw").value;
    if (!regExpPwd.test(pw)) {
        document.getElementById("wrongPw").innerHTML = "형식에 맞지 않는 비밀번호 입니다."
    } else { document.getElementById("wrongPw").innerHTML = "";
    return true;}
}

function reCheckPw() { //비밀번호 재확인
    let pw = document.getElementById("user-pw").value;
    let repw = document.getElementById("user-pw-confirm").value;
    if (pw != repw) {
        document.getElementById("wrongRePw").innerHTML = "위 비밀번호와 다릅니다."
    } else { document.getElementById("wrongRePw").innerHTML = "";
    return true;}
}

function checkName() { //이름 유효성 검사
    const regExpName = /^[가-힣]{2,6}$/;;
    let name = document.getElementById("user-name").value;
    if (!regExpName.test(name)) {
        document.getElementById("wrongName").innerHTML = "형식에 맞지 않는 이름입니다."
    } else { document.getElementById("wrongName").innerHTML = "";
    return true;}
}

function checkMail() { //메일 유효성 검사
    const regExpMail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z]*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3})$/;
    let mail = document.getElementById("user-email").value;
    if (!regExpMail.test(mail)) {
        document.getElementById("usereMail").innerHTML = "형식에 맞지 않는 이메일 입니다."
    }
    else { document.getElementById("usereMail").innerHTML = "" }
}
//회원가입 정보 로컬에 저장
function saveUserData() {
    let dbLength = localStorage.length
    let userDb = {
        userId: document.getElementById("user-id").value,
        userPw: document.getElementById("user-pw").value,
        userName: document.getElementById("user-name").value,
        userBirth: document.getElementById("user-birth").value,
        userEmail: document.getElementById("user-email").value,
        userLogin: 0,
    }
    if (checkId()&&checkPw()&&reCheckPw()&&checkName()){

        for (let i = 0; i < localStorage.length; i++) {
            if (document.getElementById("user-id").value == JSON.parse(localStorage[`userDb${i}`])["userId"]) {
                
                alert("같은 이름이 있습니다.");
                return false
            }
        }
        localStorage.setItem(`userDb${dbLength}`, JSON.stringify(userDb))
        alert("가입을 축하드립니다.\n당신의 개인정보는 이제 내꺼입니다.")
        window.location.href = "index.html";
        return true
    }
}
//회원가입시 입력란 정규식 체크
function checkForm() {
    const regExp1 = /^[A-Za-z0-9]{4,10}$/;
    let id = document.getElementById("user-id").value;
    if (!regExp1.test(id)) {
        alert("형식이 맞지 않습니다.")
    }
}
//로그인시 저장된 정보 체크

function serchUserData() {
    for (let i = 0; i < localStorage.length; i++) {
        if (document.getElementById("input-id").value == JSON.parse(localStorage[`userDb${i}`])["userId"] && document.getElementById("input-pw").value == JSON.parse(localStorage[`userDb${i}`])["userPw"]) {
            let userDb = {
                userId: JSON.parse(localStorage[`userDb${i}`])["userId"],
                userPw: JSON.parse(localStorage[`userDb${i}`])["userPw"],
                userName: JSON.parse(localStorage[`userDb${i}`])["userName"],
                userBirth: JSON.parse(localStorage[`userDb${i}`])["userBirth"],
                userEmail: JSON.parse(localStorage[`userDb${i}`])["userEmail"],
                userLogin: 1,
            }
            localStorage.setItem(`userDb${i}`, JSON.stringify(userDb))
            logInMassage(i);
            window.location.href = "index.html";
            return true
        }
    }
    alert("아이디 또는 패스워드가 일치하지 않습니다.")
    // console.log("없음")
    return false
}
function movePage() {
    window.location.href = "index.html"
}
function logInMassage(i) {
    alert(`"환영합니다. ${JSON.parse(localStorage[`userDb${i}`])["userName"]} 님.`);
}
