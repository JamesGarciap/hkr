var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";

      if (content.parentElement.className == "content") {
        let parent = content.parentElement;
        let parentHeight = parent.style.getPropertyValue("max-height").replace("px");
        let newParentHeight = parseInt(parentHeight) + parseInt(content.scrollHeight);
        console.log(newParentHeight);
        parent.style.setProperty('max-height', `${newParentHeight}px`);
      }
    }
  });
}
