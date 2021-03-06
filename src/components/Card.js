import { popupImage, popupImageName } from "../pages/index.js";

class Card {
  constructor(newCard, handleCardClick, selectorTemplateCard) {
    this._handleCardClick = handleCardClick;
    this._nameCard = newCard.name;
    this._linkCard = newCard.link;
    this._popupImageName = popupImageName;
    this._selectorTemplateCard = selectorTemplateCard;
    this._templateCardContent = this._selectorTemplateCard
      .querySelector('.gallery__card')
      .cloneNode(true);
  }

  createTemplateCard() {
    this._galleryCardImage = this._templateCardContent.querySelector('.gallery__card-img');
    this._templateCardContent.querySelector('.gallery__card-name').textContent = `${this._nameCard}`;
    this._galleryCardImage.src = `${this._linkCard}`;
    this._galleryCardImage.alt = `${this._nameCard}`;
    this._setEventListeners();
    return this._templateCardContent;
  }

  _btnFavorites() {
    this.classList.toggle('gallery__btn-favorites_active');
  }

  _btnTrash() {
    this.closest('.gallery__card').remove();
  }

  _openImagePopup() {
    popupImage.src = `${this._linkCard}`;
    popupImage.alt = `${this._nameCard}`;
    this._popupImageName.textContent = `${this._nameCard}`;
    this._handleCardClick(this._nameCard, this._linkCard);
  }

  _setEventListeners() {
    this._templateCardContent.querySelector('.gallery__btn-favorites').addEventListener('click', this._btnFavorites);
    this._templateCardContent.querySelector('.gallery__btn-trash').addEventListener('click', this._btnTrash);
    this._templateCardContent.querySelector('.gallery__card-img').addEventListener('click', () => this._openImagePopup());
  }
}

export { Card };
