(function() {
  let tabsArr = document.querySelectorAll('.tabs__btn');
  let textArr = document.querySelectorAll('.tabs__text');
  tabsArr.indexOf = [].indexOf;

  for (let i = 0; i < tabsArr.length; i++) {
    tabsArr[i].addEventListener('click', function() {
      for (let j = 0; j < tabsArr.length; j++) {
        tabsArr[j].classList.remove('tabs__btn--active');
        textArr[j].classList.remove('tabs__text--active');
      }
      this.classList.add('tabs__btn--active');
      textArr[tabsArr.indexOf(this)].classList.add('tabs__text--active');
    })
  }
})();
