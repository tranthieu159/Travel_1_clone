
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const image_block = $$(".beaches_image-block-img");
const line_item = $$(".beaches_image-line-item")

const imgActive = $(".beaches_image-block-img.active")
const lineActive = $(".beaches_image-line-item.active")

// select line and  image

line_item.forEach((line, index) => {
    const img= image_block[index]
    
    line.onclick = function () {
        $('.beaches_image-line-item.active').classList.remove("active");
        $('.beaches_image-block-img.active').classList.remove("active");

        this.classList.add('active');
        img.classList.add("active");
    }
});

// Slide show 
let i = 1;

setInterval( () => {
    $('.beaches_image-line-item.active').classList.remove("active");
    $('.beaches_image-block-img.active').classList.remove("active");

    line_item[i].classList.add("active");
    image_block[i].classList.add("active");

    ++i;
    if( i >= image_block.length) {
        i = 0;
    }
}, 5000);