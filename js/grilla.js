let elem = document.querySelector(".grid-container");
let msnry = new Masonry(elem, {
// options
itemSelector: ".grid-item",
columnWidth: 90,
gutter: 5,
isFitWidth: true
});