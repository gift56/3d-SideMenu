const activeChange = document.querySelectorAll('ul li');


activeChange.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('active');
    })
})
