//딜레이 함수
function delay(n) {
    return new Promise(function (resolve) {
        setTimeout(resolve, n * 1000);
    });
}
//메인 배경 슬라이드쇼 함수
let loopImage = async function myAsyncFunction() {
    let picArry = new Array([]);
    picArry[0] = "url(images/bodyBg.jpg)";
    picArry[1] = "url(images/backgroundimage1.jpg)";
    picArry[2] = "url(images/backgroundimage2.jpg)";
    picArry[3] = "url(images/backgroundimage3.jpg)";
    for (let i = 0; i < picArry.length; i++) {
        data = picArry[i];
        changeBackGround(data);
        await delay(8);
    }
    return
}
//메인배경 스타일 입력 함수
function changeBackGround(data) {
    let targetPic = document.getElementById("body-image").setAttribute("style", `background-image:${data};`);
}
setTimeout(loopImage)
setInterval(loopImage, 32000);