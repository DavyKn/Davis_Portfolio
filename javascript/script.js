import myObjects from './data.js';

const menuMobile = document.getElementById('menu_mobile');
const hamburgerMenu = document.getElementById('hamburger_menu');
const closeButton = document.getElementById('close_button');
const navElement = document.querySelectorAll('.menu_mobile a');
const popup = document.getElementById('popup_window');
const aboutMyself = document.getElementById('About_myself');
const closePopup = document.getElementById('close_popup');
const contactForm = document.getElementById('contact_form');
const emailContactForm = document.getElementById('email');
const msgError = document.getElementById('error_message');

// open and closing hambuger menu

hamburgerMenu.addEventListener('click', () => {
  menuMobile.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  menuMobile.style.display = 'none';
});

navElement.forEach((element) => {
  element.addEventListener('click', () => {
    menuMobile.style.display = 'none';
  });
});

// popup_menu

const language = (index) => {
  let str = '';
  for (let j = 0; j < myObjects[index].tags.length; j += 1) {
    str += `<li class="work_tags">${myObjects[index].tags[j]}</li>`;
  }
  return str;
};

const works = () => {
  let str = '';
  for (let i = 0; i < myObjects.length; i += 1) {
    str += `<div class="project-container">
    <div class="image_placeholder"></div>
    <div class="${i % 2 === 0 ? 'wrap-container1' : 'wrap-container2'}">
       <h2 class="title_post">${myObjects[i].projectTitleDesktop}</h2>
       <p class="supporting_text">${myObjects[i].text}</p>
       <ul class="tags">${language(i)}</ul>
       <button class="button" type="button">See Project</button>
    </div>
    </div>`;
  }
  return str;
};

aboutMyself.innerHTML = works();

const clickButtons = document.querySelectorAll('.button');

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

for (let i = 0; i < myObjects.length; i += 1) {
  clickButtons[i].addEventListener('click', () => {
    document.getElementById('title-popup').innerHTML = myObjects[i].projectTitle;
    document.getElementById('tags-popup').innerHTML = language(i);
    document.getElementById('text-popup').innerHTML = myObjects[i].text;
    popup.style.top = `${window.scrollY + 20}px`;
    popup.style.display = 'flex';
  });
}

// client side email validation

const checkLowerCase = (email) => {
  const validateLowerCase = (/[A-Z]/g);

  if (validateLowerCase.test(email)) {
    return false;
  }
  return true;
};

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (checkLowerCase(emailContactForm.value.trim())) {
    contactForm.submit();
    msgError.style.display = 'none';
    emailContactForm.className = 'email';
  } else {
    msgError.style.display = 'block';
    emailContactForm.className = '.error';
  }
});
