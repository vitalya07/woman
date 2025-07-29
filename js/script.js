document.addEventListener("DOMContentLoaded", ()=> {
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
    
    const travelsSwiper = document.querySelector('.travels__swiper');
    const coversSwiper = document.querySelector('.covers__swiper');
    const salaSwiper = document.querySelector('.sala__swiper');
    if(travelsSwiper) {
        new Swiper(".travels__swiper", {
            slidesPerView: 2,
            spaceBetween: 50, 
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                1280: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 3,
                },
                756: {
               
                    slidesPerView: 2,
                },
                556: {
                    slidesPerView: 2,
                },
                280: {
                    slidesPerView: 1,
                }
            }
        });
    }
    if(coversSwiper) {
        new Swiper(".covers__swiper", {
            slidesPerView: 4,
            spaceBetween: 50, 
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                1280: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 3,
                },
                756: {
               
                    slidesPerView: 2,
                },
                556: {
                    slidesPerView: 2,
                },
                280: {
                    slidesPerView: 1,
                }
            }
        });
    }
    if(salaSwiper) {
        new Swiper(".sala__swiper", {
            slidesPerView: 4,
            spaceBetween: 50, 
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                1280: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 3,
                },
                756: {
               
                    slidesPerView: 2,
                },
                556: {
                    slidesPerView: 2,
                },
                280: {
                    slidesPerView: 1,
                }
            }
        });
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
    
}

})
  