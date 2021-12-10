<<<<<<< HEAD
'use strict';

=======
>>>>>>> 189b7c2051d7e0cbdc5fcf9b8fe4ec7f0258d4d1
function slider () {
    let slideIndex = 1, // параметр текущего слайда, т.е тот, который будет показываться
        slides =  document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');


    function showSlides (n) { // эта функция показывает / скрывает слайды
<<<<<<< HEAD

=======
>>>>>>> 189b7c2051d7e0cbdc5fcf9b8fe4ec7f0258d4d1
        if (n > slides.length) {
            slideIndex = 1;
        }

<<<<<<< HEAD
        if (n == 0) { // или можно использовать if (n < 1)
=======
        if (n < 1) {
>>>>>>> 189b7c2051d7e0cbdc5fcf9b8fe4ec7f0258d4d1
            slideIndex = slides.length;
        }
        // сверху написаны две проверки, которые позволяют крутить слайды по кругу вперед или назад


        slides.forEach( (item)=> item.style.display = 'none');

        // for (let i = 0; i < slides.length; i++) {  это просто более старый и громоздкий метод записи стороки выше
        //     slides[i].style.display = 'none';
        // }

        dots.forEach( (item)=> item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
<<<<<<< HEAD


    }

    showSlides(slideIndex);


=======
    }
    showSlides(slideIndex);

>>>>>>> 189b7c2051d7e0cbdc5fcf9b8fe4ec7f0258d4d1
    function  plusSlides (n) {      // эта функция переключает слайды, взаимодействуя с параметром slideIndex
        showSlides(slideIndex += n); // slideIndex = slideIndex + n
    }

<<<<<<< HEAD
    function currentSlide (n) {
        showSlides(slideIndex = n);
    }
=======
>>>>>>> 189b7c2051d7e0cbdc5fcf9b8fe4ec7f0258d4d1

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

<<<<<<< HEAD
=======
    function currentSlide (n) {
        showSlides(slideIndex = n);
    }


>>>>>>> 189b7c2051d7e0cbdc5fcf9b8fe4ec7f0258d4d1
    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
               currentSlide(i); 
            }
        }
    });
<<<<<<< HEAD
}

module.exports = slider;


=======

    
}

module.exports = slider;
>>>>>>> 189b7c2051d7e0cbdc5fcf9b8fe4ec7f0258d4d1
