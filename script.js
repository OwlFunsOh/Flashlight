const dark = document.querySelector('.dark');
const light = document.querySelector('.light');

document.addEventListener('mousemove', (e) => {
    const pageX = e.pageX
    const pageY = e.pageY

    light.style.left = (pageX - 100) + 'px';
    light.style.top = (pageY - 100) + 'px';
})