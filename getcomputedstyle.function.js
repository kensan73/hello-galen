this.getcomputedstyle = function (tagname, attribute) {
  var el = document.getElementsByTagName(tagname)[0]
  return window.getComputedStyle(el)[attribute]
};