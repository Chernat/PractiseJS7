let slider = document.getElementsByClassName('slider__item'),
    nextSwitcher = document.querySelectorAll('.slider__switсher--next'),
    previosSwitcher = document.querySelectorAll('.slider__switсher--prev'),
    sliderNum = document.querySelectorAll('.slider__btn--num'),
    sliderInfo = document.querySelectorAll('.slider__btn--info'),
    removeSlide = document.querySelectorAll('.slider__btn--remove'),
    addSlide = document.querySelectorAll('.slider__btn--add'),
    currentSlide = 0;

nextSwitcher[0].addEventListener('mouseover', function() {
  let nextSlide = currentSlide + 1;
  nextSwitcher[0].style.background = `url('../img/${nextSlide}.jpg')`;
  nextSwitcher[0].style.display = 'block';
});

nextSwitcher[0].addEventListener('mouseout', function() {
  nextSwitcher[0].removeAttribute("style");
})

nextSwitcher[0].addEventListener('click', function() {
    if (currentSlide < slider.length - 1) {
      currentSlide++;
      slider[currentSlide].classList.add('slider__item--active');
      slider[currentSlide - 1].classList.remove('slider__item--active');
    } else {
      currentSlide = 0;
      slider[slider.length - 1].classList.remove('slider__item--active');
      slider[currentSlide].classList.add('slider__item--active');
    }
});

previosSwitcher[0].addEventListener('click', function() {
    if (currentSlide > 0) {
      currentSlide--;
      slider[currentSlide].classList.add('slider__item--active');
      slider[currentSlide + 1].classList.remove('slider__item--active');
    } else {
      currentSlide = slider.length - 1;
      slider[0].classList.remove('slider__item--active');
      slider[currentSlide].classList.add('slider__item--active');
    }
});

sliderNum[0].addEventListener('click', function() {
  let num;

  do {
    num = +prompt('Num','');
  } while (isNaN(num) || (num > slider.length) || (num < 0));

  if (currentSlide !== num - 1 && num !== 0) {
    slider[currentSlide].classList.remove('slider__item--active');
    slider[num - 1].classList.add('slider__item--active');
    currentSlide = num - 1;
  }
});

sliderInfo[0].addEventListener('click', function() {
  alert(slider[currentSlide].getAttribute('src') + '\n' + slider[currentSlide].getAttribute('alt'));
});

removeSlide[0].addEventListener('click', function() {
  let num;

  do {
    num = +prompt('Num','');
  } while (isNaN(num) || (num > slider.length) || (num < 0));

  slider[num - 1].remove();
  if (((num - 1) >= 0) && ((num - 1) < slider.length)) slider[currentSlide].classList.add('slider__item--active');
  if ((num - 1) === slider.length && ((num - 1) === currentSlide)) {
    currentSlide = 0;
    slider[currentSlide].classList.add('slider__item--active');
  }
});

addSlide[0].addEventListener('click', function() {
  let num, src, alt, img;
  img =  document.createElement('img');
  img.className = 'slider__item';
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);

  do {
    num = +prompt('Num','');
  } while (isNaN(num) || (num > slider.length) || (num < 0));

  if (num !== 0) {
    src = prompt('Src', '');
    alt = prompt('Alt', '');
  }

  if ((num !== 0) && (num - 1) >= slider.length) {
    document.querySelectorAll('.slider__block')[0].appendChild(img);
    slider[currentSlide].classList.remove('slider__item--active');
    currentSlide = slider.length - 1;
    slider[currentSlide].classList.add('slider__item--active');
  } else if (num !== 0) {
    document.querySelectorAll('.slider__block')[0].insertBefore(img, slider[num - 1]);
    slider[currentSlide].classList.remove('slider__item--active');
    currentSlide = num - 1;
    slider[currentSlide].classList.add('slider__item--active');
  }
});
