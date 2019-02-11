let slider = document.getElementsByClassName('slider__item'),
    nextSwitcher = document.querySelectorAll('.slider__switсher--next'),
    previosSwitcher = document.querySelectorAll('.slider__switсher--prev'),
    sliderNum = document.querySelectorAll('.slider__btn--num'),
    sliderInfo = document.querySelectorAll('.slider__btn--info'),
    removeSlide = document.querySelectorAll('.slider__btn--remove'),
    currentSlide = 0;

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
  } while ((num > slider.length) || (num < 0));

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
  } while ((num > slider.length) || (num < 0));

  slider[num - 1].remove();
  if (currentSlide === num) {
    currentSlide--;
  }
});

function addSlide(num, a, b) {
  if (num - 1 > slider.length) {
    slider.push({image: a, alt: b});
    currentSlide++;
  } else if (0 === (num - 1)) {
    slider.unshift({image: a, alt: b});
    currentSlide++;
  } else {
    slider.splice(num - 1, 0, {image: a, alt: b});
    if (currentSlide === num || currentSlide > num) {
      currentSlide++;
    }
  }

  return slider;
}

function deletSlide(num) {
  if (num > slider.length - 1) {
    console.log('failed number');
  } else {
    slider.splice(slider.indexOf(num), 1);
  }

  return slider;
}
