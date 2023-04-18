import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ className, avatarModalIsOpen, onEditAvatarClick, handleEditAvatarClick, handleCurrentUser }) {
  const handleCloseModal = () => handleEditAvatarClick();
  const handleModalOnKeyDown = e => e.key === 'Escape' ? onEditAvatarClick(false) : null;
  console.log('abACATE')
  return (
    <PopupWithForm
      formType={'avatar'}
      className={className}
      children={
        <div>
          <input
            className='form__input form__avatar'
            name='formImage'
            id='avatar'
            type='text'
            placeholder=''
          />
          <label
            htmlFor='avatar'
            className='form__description form__description_error'
          />
        </div>
      }
      title={'Alterar a foto do perfil'}
      buttonText={'Salvar'}
      popupIsOpen={avatarModalIsOpen}
      handleCloseModal={handleCloseModal}
      handleModalOnKeyDown={handleModalOnKeyDown}
      handleCurrentUser={handleCurrentUser}
    />
  );
}

export default EditAvatarPopup;