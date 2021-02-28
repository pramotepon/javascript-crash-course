function appendImageELem(keyword, index) {
    const imgElem = document.createElement('img');
    imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

    const galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(imgElem);
}

function removePhotos() {
    const galleryElem = document.querySelector('.gallery');
    galleryElem.innerHTML = '';
}

function searchPhoto(event) {
    const keyword = event.target.value;
    if (event.key === 'Enter' && keyword) {
        removePhotos();
        for (let i = 1; i <= 9; i++) {
            appendImageELem(keyword, i);
        }
    }
}

function run() {
    const inputElem = document.querySelector('input');
    inputElem.addEventListener('keydown', searchPhoto);
}

run();