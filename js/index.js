const gridGallery = $('#grid-gallery-selector');
const cardsGallery = $('#cards-gallery-selector');
const gridGalleryBox = $('.grid-gallery-box');
const cardsGalleryBox = $('.cards-gallery-box');


cardsGallery.click(() => {
    gridGalleryBox.fadeOut(500);
    cardsGalleryBox.fadeIn(500);
})

gridGallery.click(() => {
    gridGalleryBox.fadeIn(500);
    cardsGalleryBox.fadeOut(500);
})