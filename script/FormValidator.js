export class FormValidator {
  constructor(parametersValidator, form) {

    this._form = form;
    this._parametersValidator = parametersValidator;

    // возможно не нужна тут деструкторизация
    const { submitButtonSelector, inputSelector } = this._parametersValidator;
    this._submitBtn = this._form.querySelector(submitButtonSelector);
    this._inputsList = Array.from(this._form.querySelectorAll(inputSelector));
  }

  _showInputError(input) {
    const errorInput = this._form.querySelector(`#${input.id}-error`);
    errorInput.classList.add(this._parametersValidator.errorClass);
  };

  _hideInputError(input) {
    const errorInput = this._form.querySelector(`#${input.id}-error`);
    errorInput.classList.remove(this._parametersValidator.errorClass);
  };

  _checkInputValidity(input) {
    const noValid = !input.validity.valid;

    if (noValid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  };

  _setEventListeners() {
    // Деструкторизация которую надо потом расширить

    this._inputsList.forEach((input) => {
      //обработчик на ввод данных в input
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });

    // устанавка состояния сабмита на момент первого открытия попапа
    this._toggleButtonState(parametersValidator); // ======== наверно не нужно
  }


  enableValidation() {
    this._setEventListeners();
    //======= Наверное стоит перенести сюда отключение стандартного поведения формы
  }

  _toggleButtonState() {
    // функция включения/отключения сабмита
    const hasInvalidInput = this._inputsList.some((inputElement) => {
      // проверка массива инпутов на валидность полей
      return !inputElement.validity.valid;
    });

    if (hasInvalidInput) {
      this._submitBtn.classList.add(this._parametersValidator.inactiveButtonClass);
      this._submitBtn.setAttribute('disabled', true);
    } else {
      this._submitBtn.classList.remove(this._parametersValidator.inactiveButtonClass);
      this._submitBtn.removeAttribute('disabled');
    }
  }

  //=============== this.enableValidation();
}



