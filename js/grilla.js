let elem = document.querySelector(".grid-container");
imagesLoaded(elem, () => {
    let msnry = new Masonry(elem, {
    // options
    itemSelector: ".grid-item",
    columnWidth: 100,
    gutter: 5,
    isFitWidth: true
    });
})