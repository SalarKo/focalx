document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const image2 = document.querySelector('.image-2');
    let isDragging = false;

    slider.addEventListener('mousedown', function(e) {
        isDragging = true;
    });

    document.addEventListener('mouseup', function(e) {
        isDragging = false;
    });

    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;

        let x = e.clientX;

        let containerWidth = document.querySelector('.slider-container').offsetWidth;

        let newClipValue = (x / containerWidth) * 100;

        
        slider.style.left = `${newClipValue}%`;
        image2.style.clipPath = `inset(0 ${100 - newClipValue}% 0 0)`;
    });

    slider.addEventListener('touchstart', function(e) {
        isDragging = true;
    });

    document.addEventListener('touchend', function(e) {
        isDragging = false;
    });

    document.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        let touch = e.touches[0];
        let x = touch.clientX;
        let containerWidth = document.querySelector('.slider-container').offsetWidth;
        let newClipValue = (x / containerWidth) * 100;

        slider.style.left = `${newClipValue}%`;
        image2.style.clipPath = `inset(0 ${100 - newClipValue}% 0 0)`;
    });
});
