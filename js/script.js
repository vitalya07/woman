document.addEventListener("DOMContentLoaded", ()=> {
    //Модальное окно на главной
    const modal = document.querySelector('.modal');
    const hamburger = document.querySelector('.header__hamburger');
    if(hamburger && modal) {
        function hideModal() {
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
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
    //Модальное окно на главной
    //Модальное окно для покупки продукта
    const headerTravels = document.querySelector('.header__travels');
  
    if(headerTravels) {
        const headerHamburgerTravel = document.querySelector('.header__hamburger-travel');
        const headerClose = document.querySelector('.header__nav-mobile-close');
        function actionHamburger() {
            headerTravels.classList.add('menu-open');
        }
        function removeHamburger() {
            headerTravels.classList.remove('menu-open');
        }
        headerHamburgerTravel.addEventListener('click', actionHamburger);
        headerClose.addEventListener('click', removeHamburger);
    }       
    
    const product = document.querySelector('.product');
    if (product) {
    const productBtns = document.querySelectorAll('.sala__slide-btn');
    const productName = document.querySelector('.product__name');

    function showProductModal(name) {
        product.classList.add('show');
        product.classList.remove('hide');
        document.body.style.overflow = 'hidden';

        productName.textContent = name;
    }

    function removeProductModal() {
        product.classList.add('hide');
        product.classList.remove('show');
        document.body.style.overflow = '';
    }

    productBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            // Получаем название товара из data-product кнопки
            const name = btn.getAttribute('data-product');

            if (name) {
                showProductModal(name);
            } else {
                console.warn('data-product не задан у кнопки');
            }
        });
    });

    product.addEventListener('click', (e)=> {
            if(e.target === product || e.target.classList.contains('product__close')) {
                removeProductModal();
            }
        });
    window.addEventListener('keydown', (e)=> {
        if(e.code === 'Escape' && product.classList.contains('show')) {
            removeProductModal();
        }
    });
    //Модальное окно для покупки продукта
}

})
  