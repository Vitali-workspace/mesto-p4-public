const initialCards = [
  {
    name: 'Сиди-Бель-Аббес',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Вашингтон',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Луанда',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Соломоновы Острова',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Шанхай',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Тегеран',
    link: 'https://cdn.pixabay.com/photo/2022/02/17/07/51/church-7018154_960_720.jpg'
  }
];

const container = document.querySelector('.root');
//const profile = container.querySelector('.profile'); // вроде не нужен
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
const inputName = document.querySelector('#inputEditName');
const inputDescription = document.querySelector('#inputEditText');

const templateCard = document.querySelector('#tempCard').content;
const gallery = container.querySelector('.gallery');

const newCardName = container.querySelector('#inputAddName');
const newCardLink = container.querySelector('#inputAddLink');

const formAddCard = container.querySelector('#formAdd');
const formEdit = document.querySelector('#formEdit');

const popupEdit = container.querySelector('#popupEdit');
const popupAddCard = container.querySelector('#popupAddCard');

const popupCardImg = container.querySelector('#popupCardImg');
const popupImage = container.querySelector('.popup__image');
const popupImageName = container.querySelector('.popup__image-name');

const objElements = {
  formSelector: '.form',
  inputSelector: '.popup__edit-input',
  submitButtonSelector: '.popup__btn-save',
  inactiveButtonClass: 'popup_btn-disable',
  inputErrorSelector: '.popup__input-error',
  errorClass: 'popup__input-error_active'
}

export {
  initialCards,
  container,
  profileName,
  profileDescription,
  inputName,
  inputDescription,
  templateCard,
  gallery,
  newCardName,
  newCardLink,
  formAddCard,
  formEdit,
  popupEdit,
  popupAddCard,
  popupCardImg,
  popupImage,
  popupImageName,
  objElements
};
