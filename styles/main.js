const activeChange = document.querySelectorAll('ul li');

const removeActive = () => {
    activeChange.forEach(item => {
        item.classList.remove('active');
    })
}

activeChange.forEach(item => {
    item.addEventListener('click', () => {
        removeActive();
        item.classList.add('active');
    })
})
