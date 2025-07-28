document.addEventListener("DOMContentLoaded", ()=> {
    const modal = document.querySelector('.modal');
    const hamburger = document.querySelector('.header__hamburger');
    function hideModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = 'hiden';
    }
    function showModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hiden';
    }
    hamburger.addEventListener('click', ()=> {
        showModal();
    });
    modal.addEventListener('click', (e)=> {
        if(e.target === modal || e.target.classList.contains('modal__close')) {
            hideModal();
        }
    });
    window.addEventListener('keydown', (e)=> {
        if(e.code === 'Escape' && modal.classList.contains('show')) {
            hideModal();
        }
    });
})