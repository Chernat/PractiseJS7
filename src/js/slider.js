var slider = [{image: 'car.jpg', alt: 'Car'}, {image: 'apple.jpg', alt: 'Apple'}],
    currentSlide = 0;

console.log(nextSlide());
console.log(previosSlide());
console.log(slideNum(1));
console.log(currentSlideInfo());
console.log(addSlide(4, 'man.jpg', 'Man'));
console.log(deletSlide(2));

function nextSlide() {
  if (currentSlide < slider.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }

  return slider[currentSlide];
}

function previosSlide() {
  if (currentSlide >= slider.length - 1) {
    currentSlide--;
  } else {
    currentSlide = slider.length - 1;
  }

  return slider[currentSlide];
}

function slideNum(num) {
  if (num > slider.length - 1) {
    console.log('failed slider number')
  } else {
    currentSlide = num;
  }

  return slider[currentSlide];
}

function currentSlideInfo() {
  return slider[currentSlide];
}

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
