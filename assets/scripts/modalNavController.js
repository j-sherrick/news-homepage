window.addEventListener('load', e => {
    const openButton = document.getElementById('openButton');
    const closeButton = document.getElementById('closeButton');
    const modal = document.getElementById('navModal');

    openButton.addEventListener('click', e => {
        openButton.classList.toggle('__toggle');
        modal.classList.toggle('__toggle');
        closeButton.classList.toggle('__toggle');
    })

    closeButton.addEventListener('click', e => {
        modal.classList.toggle('__toggle');
        closeButton.classList.toggle('__toggle');
    })
})