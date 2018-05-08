const gridGallery = $('#grid-gallery-selector');
const cardsGallery = $('#cards-gallery-selector');
const compactGallery = $('#compact-gallery-selector');
const gridGalleryBox = $('.grid-gallery-box');
const cardsGalleryBox = $('.cards-gallery-box');
const compactGalleryBox = $('.compact-gallery-box');


cardsGallery.click(() => {
    cardsGalleryBox.fadeIn(500);
    gridGalleryBox.fadeOut(500);
    compactGalleryBox.fadeOut(500);
})

gridGallery.click(() => {
    gridGalleryBox.fadeIn(500);
    compactGalleryBox.fadeOut(500);
    cardsGalleryBox.fadeOut(500);
})

compactGallery.click(() => {
    compactGalleryBox.fadeIn(500);
    gridGalleryBox.fadeOut(500);
    cardsGalleryBox.fadeOut(500);
})