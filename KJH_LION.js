function changeImg() {
  let firstImg = "icon_check_empty.png";
  let secondImg = "icon_check.png";

  let maintain = document.querySelector(".maintain");
  let nowUrlSplit = maintain.querySelector("img").src.split("/");
  let nowUrlLen = nowUrlSplit.length;
  let nowImgPath = nowUrlSplit[nowUrlLen - 1];

  if (nowImgPath === firstImg) {
    maintain.querySelector("img").src = "KJH_LION_img/" + secondImg;
  } else if (nowImgPath === secondImg) {
    maintain.querySelector("img").src = "KJH_LION_img/" + firstImg;
  }
}

function closeLogin() {
  confirm("로그인 창을 닫는 버튼입니다.");
}

function Login() {
  alert("Login 버튼입니다.");
}
