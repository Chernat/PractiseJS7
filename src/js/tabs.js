(function() {
  var tabsArr = document.querySelectorAll('.tabs__btn');
  var textArr = document.querySelectorAll('.tabs__text');

  for (var i = 0; i < tabsArr.length; i++) {
    tabsArr[i].addEventListener('click', function() {
      console.log(tabsArr[i].classList);
      for (var j = 0; j < tabsArr.length; j++) {
        tabsArr[j].classList.remove('tabs__btn--active');
        textArr[j].classList.remove('tabs__text--active');
      }

    tabsArr[i].classList.add('tabs__btn--active');
    textArr[i].classList.add('tabs__text--active');
    })
  }
})();
