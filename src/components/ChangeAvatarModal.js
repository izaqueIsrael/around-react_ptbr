import React from "react";
import PopupWithForm from "./PopupWithForm";

function ChangeAvatarModal({ className, avatarModalIsOpen, onEditAvatarClick }) {
  const handleAvatarModalCloseModalClick = () => onEditAvatarClick(!avatarModalIsOpen);
  const handleFadeClick = () => onEditAvatarClick(!avatarModalIsOpen);
  const handleModalOnKeyDown = e => e.key === 'Escape' ? onEditAvatarClick(false) : null;

  return (
    <PopupWithForm
      className={className}
      children={
        <div>
          <input
            className="form__input form__avatar"
            name="formImage"
            id="avatar"
            type="text"
            placeholder=""
          />
          <label
            htmlFor="avatar"
            className="form__description form__description_error"
          />
        </div>
      }
      title={'Alterar a foto do perfil'}
      buttonText={'Salvar'}
      popupIsOpen={avatarModalIsOpen}
      handleFadeClick={handleFadeClick}
      handleClosePopupClick={handleAvatarModalCloseModalClick}
      handleModalOnKeyDown={handleModalOnKeyDown}
    />
  );
}

export default ChangeAvatarModal;