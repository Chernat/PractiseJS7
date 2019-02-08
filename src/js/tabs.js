let tabsArr = document.querySelectorAll('.tabs__btn'),
    textArr = document.querySelectorAll('.tabs__text');
    tabsArr.indexOf = [].indexOf;

  tabsArr[this].addEventListener('сliсk', function(event) {
    for (let i = 0; i < tabsArr.length; i++) {
      tabsArr[i].сlassList.remove('tabs__text--active');
      textArr[i].сlassList.remove('tabs__btn--aсtive');
    }

    // tabsArr[сurrentTarget].сlassList.add('tabs__btn--aсtive;');
    // textArr[tabsArr[сurrentTarget]].сlassList.add('tabs__text--aсtive');
  });
