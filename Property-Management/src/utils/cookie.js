/* eslint-disable */
function addCookie(cookieKey, cookieValue, overSeconds) {
  document.cookie = cookieKey + "=" +cookieValue +";max-age="+overSeconds;
}
function deleteCookie(cookieKey){
  addCookie(cookieKey,"",-1);
}
export default function getCookie(cookieKey){
  var arr = document.cookie.split("; ");
  for (var i = 0;i < arr.length;i++) {
    var arr2 = arr[i].split("=");
    if (arr2[0].trim() == cookieKey) {
      return arr2[1];
    }
  }
}
function isCookieKey(cookieKey){
  var arr = document.cookie.split(";");
  for (var i = 0;i < arr.length;i++) {
    var arr2 = arr[i].split("=");
    if (arr2[0].trim() == cookieKey) {
      return true;
    }
  }
  return false;
}

export {
  addCookie, deleteCookie, isCookieKey
}
