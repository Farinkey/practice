window.addEventListener('DOMContentLoaded', () => {

  // Tabs
  const tabs = document.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.style.display = 'none';
    });
    tabs.forEach(tab => {
      tab.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (e) => {
    const t = e.target;

    if (t && t.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (t == item) {
          hideTabContent();
          showTabContent(i);
        }
      })
    }
  })

  // Timer
  const deadline = '2020-09-01';

  function timeRemaing(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / (1000 * 60 * 60)) % 24),
          mins = Math.floor((t / 1000 * 60) % 60),
          secs = Math.floor((t / 1000) % 60);

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'mins': mins,
      'secs': secs
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = timeRemaing(endtime);

      days.textContent = getZero(t.days);
      hours.textContent = getZero(t.hours);
      minutes.textContent = getZero(t.mins);
      seconds.textContent = getZero(t.secs);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);

  // Modal

  const connect = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalClose = document.querySelector('[data-close]');

  connect.forEach((i) => {
    i.addEventListener('click', () => {
      showModal();
    })
  })

  function showModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimer);
  }

  modalClose.addEventListener('click', () => {
    hideModal();
  })

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideModal();
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.style.display == 'block') {
      hideModal();
    }
  })

  function hideModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  // const modalTimer = setTimeout(showModal, 3000);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      showModal();
      document.body.style.overflow = '';
    } else {
      hideModal();
    }
  })

  // Cards Classes

  class MenuCard {
    constructor(img, alt, name, desc, price, parent) {
      this.img = img;
      this.alt = alt;
      this.name = name;
      this.desc = desc;
      this.price = price;
      this.parent = document.querySelector(parent);
      this.trans = 27;
      this.change();
    }

    render() {
      let element = document.createElement('div');
      element.innerHTML = `
                <div class="menu__item">
                    <img src="${this.img}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">Меню "${this.name}"</h3>
                    <div class="menu__item-descr">${this.desc}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>`;
      this.parent.append(element);
    }

    change() {
      this.price = this.price * this.trans;
    }
  }

  // const menu0 = new MenuCard();
  // menu0.render();
  new MenuCard(
    'img/tabs/vegy.jpg',
    'vegy',
    'Фитнес',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container'
  ).render();

})