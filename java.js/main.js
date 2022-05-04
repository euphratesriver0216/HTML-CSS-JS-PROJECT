//블로그 주소 변경시 사용
let blog = document.querySelectorAll('#footer a')
for (let i = 0; i < blog.length; i++) {
    blog[i].addEventListener('click', function (e) {
        let blogName = e.target.getAttribute('href');
        //임철순 블로그 주소
        if (blogName === '#LCS') {
            window.open("https://blog.naver.com/cjftns031", "", "fullscreen");
            // 현재창띄우기 location.href = 'https://blog.naver.com/cjftns031'; 
        }
        //박성근 블로그
        else if (blogName === '#PSG') {
            window.open("      ", "", "fullscreen");
        }
        //박해민
        else if (blogName === '#PHM') {
            window.open("https://happinessoffish.tistory.com/", "", "fullscreen");
        }
        //곽지현
        else if (blogName === '#GJH') {
            window.open("https://mondlicht-1256.tistory.com/", "", "fullscreen");
        }
    })

}

// 헤더 버튼 
const menuBt =  document.querySelector('.menu-bt')
const menuOpen = document.querySelector('#title-name')
menuBt.addEventListener ('click' ,function () {
    
    if (menuOpen.style.display==='flex' ) {
        menuOpen.style.display='none'
    }else{
        menuOpen.style.display='flex'
    }
})


function loginCheck() {
    for (let i = 0; i < localStorage.length; i++) {
        if (JSON.parse(localStorage[`userDb${i}`])["userLogin"] == 1) {
            // userData = JSON.parse(localStorage[`userDb${i}`]);
            // UserId = userData["userId"];
            // UserName = userData["userName"];
            // loginUserCheck = userData["userLogin"];
            document.getElementById("login-button").innerText = "로그아웃";
            document.getElementById("login-button").setAttribute("href", "#");
            document.getElementById("login-button").setAttribute("onclick", `logout()`);
            return;
        }
    }
    // console.log("빠져나옴")
    return;
}
loginCheck()
// logout()
function logout() {
    for (let i = 0; i < localStorage.length; i++) {
        if (JSON.parse(localStorage[`userDb${i}`])["userLogin"] = 1) {
            let userDb = {
                userId: JSON.parse(localStorage[`userDb${i}`])["userId"],
                userPw: JSON.parse(localStorage[`userDb${i}`])["userPw"],
                userName: JSON.parse(localStorage[`userDb${i}`])["userName"],
                userBirth: JSON.parse(localStorage[`userDb${i}`])["userBirth"],
                userEmail: JSON.parse(localStorage[`userDb${i}`])["userEmail"],
                userLogin: 0,
            }
            localStorage.setItem(`userDb${i}`, JSON.stringify(userDb))
            continue;
        }
    }
    alert(`다음에 다시만나요~ 제발~~`);
    window.location.href = "index.html"
    return;
}
function popup() {
    let url = "popup.html";
    let name = "testHTML";
    let popupleft = document.body.offsetWidth / 6;
    let popuptop = document.body.offsetHeight / 6;
    let option = `width = 500px, height = 700px, scrollbars = no, location =no, toolbars = no, status = no, top = ${popuptop},left = ${popupleft}, resizable=no`;
    window.open(url, name, option);
}

