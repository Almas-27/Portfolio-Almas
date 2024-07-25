document.addEventListener('DOMContentLoaded',()=>{
    const images=document.querySelectorAll('.gallery-item');
    images.forEach(images=>{
        image.addeventListener('click',()=>{
            const lightbox=document.createElement('div');
            lightbox.id='lightbox';
            document.bocy.appendChild(lightbox);

            const img=document.createElement('img');
            img.src=image.src;
            lightbox.appendChild(img);
            llightbox.addEventListener('click',()=>{
                lightbox.remove();
            });
        });

    });
});