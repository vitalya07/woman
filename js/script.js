document.addEventListener("DOMContentLoaded", ()=> {
    const modal = document.querySelector('.modal');
    const hamburger = document.querySelector('.header__hamburger');
    if(hamburger && modal) {
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
    }
    const headerTravels = document.querySelector('.header__travels'),
          headerHamburgerTravel = document.querySelector('.header__hamburger-travel'),
          headerClose = document.querySelector('.header__nav-mobile-close');
    function actionHamburger() {
        headerTravels.classList.add('menu-open');
    }
    function removeHamburger() {
        headerTravels.classList.remove('menu-open');
    }
    headerHamburgerTravel.addEventListener('click', actionHamburger);
    headerClose.addEventListener('click', removeHamburger);
    new Swiper(".travels__swiper", {
       slidesPerView: 2,
        spaceBetween: 50, 
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})
  