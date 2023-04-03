import React from "react";
import closeButton from '../images/close.png';

function PopupWithForm({ className, children, title, buttonText, popupIsOpen, handleFadeClick, handleClosePopupClick, handleModalOnKeyDown }) {
  return (
    <>
      <div className={className} id="add__modal" tabIndex={0} onKeyDown={handleModalOnKeyDown} >
        <button className="button popup__close" id="add__close" onClick={handleClosePopupClick} >
          <img className="popup__icon" alt="close" src={closeButton} />
        </button>
        <form className="form modal">
          <h2 className="title modal__title">{title}</h2>
          {children}
          <button
            type="submit"
            className="button modal__button modal__button_disabled"
            id="add__button"
            disabled=""
          >
            <span className="button__text button__text_disabled">{buttonText}</span>
          </button>
        </form>
      </div>
      <div className={`${popupIsOpen ? 'fade' : '"fade fade_closed"'}`} onClick={handleFadeClick} />
    </>
  );
}

export default PopupWithForm;