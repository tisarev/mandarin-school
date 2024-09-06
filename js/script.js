// popap
const popap = document.querySelector('.popap');
const popapClose = document.querySelectorAll('.popap__close');
const popapBtns = document.querySelectorAll('.popap__btn');
const popapBlocks = document.querySelectorAll('.popap__block');

popapBtns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        popapBlocks.forEach((el) => {
            el.classList.remove('active');
        });

        popap.classList.add('active');
        document.querySelector(`[data-popap="${path}"]`).classList.add('active');
    });
});

popapClose.forEach((el) => {
    el.addEventListener("click", function(){
        popap.classList.remove('active');
        popapBlocks.forEach((el) => {
            el.classList.remove('active');
        });
    });
});

popap.addEventListener('click', (e) => {
    if (e.target == popap) {
        popap.classList.remove('active');
        popapBlocks.forEach((el) => {
            el.classList.remove('active');
        });
    }
});
// popap
//header
let getTop = () => window.pageYOffset || document.documentElement.scrollTo;
const offset = 10;
document.addEventListener('DOMContentLoaded', function () {
    const headerScrollTop = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (getTop() > offset) {
        headerScrollTop.classList.add('active');
      } else {
        headerScrollTop.classList.remove('active');
      }
    });
  });
const getId = (link) => link.getAttribute('href').replace('#', '');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.header__menu-a').forEach((link) => {
          link.classList.toggle('active', getId(link) === entry.target.id);
        });
      }
    });
  }, {
      threshold: 0.7,
    });
  document.querySelectorAll('.section').forEach((section) => observer.observe(section),
  );
let menuUl = document.querySelector('.header__menu');
if (menuUl) {
  menuUl.addEventListener('click', (event) => {
    if (event.target.classList.contains('header__menu-a')) {
      event.preventDefault();
      window.scrollTo({
        top: document.getElementById(getId(event.target)).offsetTop - 100,
        behavior: 'smooth',
      });
    }
  });
}
//header
document.addEventListener('DOMContentLoaded', function () {
function cookies() {
    const cookie = document.querySelector('.cookies');
    cookie.classList.add('cookies-close');
  }
let year = new Date().getFullYear()
  document.querySelector(".year").innerHTML = year;
});
//tabs
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));
const tabImages = Array.from(tabs.querySelectorAll('[role="tabimage"]'));

function handleClick(e) {
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  tabImages.forEach((panel) => {
    panel.hidden = true;
  });
  tabButtons.forEach((tab) => {
    tab.setAttribute('aria-selected', false);
  });

  e.currentTarget.setAttribute('aria-selected', true);
  const id = e.currentTarget.id;

  const tabPanel = tabPanels.find(panel => {
    if (panel.getAttribute('aria-labelledby') === id) {
      return true;
    }
  });
  const tabImage = tabImages.find(image => {
    if (image.getAttribute('aria-labelledby') === id) {
      return true;
    }
  });

  tabPanel.hidden = false;
  tabImage.hidden = false;
}
tabButtons.forEach(button => button.addEventListener('click', handleClick));