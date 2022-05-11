function load_page_content(link) {
  var div = document.getElementById("main-content");
  const obj = document.createElement("object");
  obj.data = link;
  div.replaceChild(obj, div.firstElementChild);
}