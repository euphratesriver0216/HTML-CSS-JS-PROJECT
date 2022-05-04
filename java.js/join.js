//약관동의 체크박스
function CheckForm(join) {
  var chk1 = document.getElementById("checkBoxUse").checked;
  var chk2 = document.getElementById("checkBoxData").checked;

  if (!chk1) {
    alert("이용약관에 동의해주세요.");
    return false;
  }
  if (!chk2) {
    alert("개인정보 수집 및 이용 동의해주세요.");
    return false;
  }
  return true;
}

//약관 체크박스 전체선택 및 해제
const checkBoxAll = document.querySelector("input[name=checkBox_All]");
checkBoxAll.addEventListener("change", (e) => {
  let checkedBox = document.querySelectorAll("input[name=checkBox]");
  for (let i = 0; i < checkedBox.length; i++) {
    checkedBox[i].checked = e.target.checked;
  }
});

function mainPage() {
  window.location.href = "index.html"; //"메인페이지 주소"
}
