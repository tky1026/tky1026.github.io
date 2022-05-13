function load_page_content(link) {
  access = sessionStorage.getItem('loginAccess');

  if (access == 'valid') {
    var div = document.getElementById("main-content");
    const obj = document.createElement("object");
    obj.data = link;
    div.replaceChild(obj, div.firstElementChild);
  } else {
    alert("Denied access");
  }
}