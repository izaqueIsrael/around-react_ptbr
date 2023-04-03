import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditModal({ className, editIsOpen, setEditIsOpen }) {
  const handleEditProfileCloseModalClick = () => setEditIsOpen(!editIsOpen);
  const handleFadeClick = () => setEditIsOpen(!editIsOpen);
  const handleModalOnKeyDown = e => e.key === 'Escape' ? setEditIsOpen(false) : null;

  return (
    <PopupWithForm
      className={className}
      children={
        <>
          <div>
            <input className='form__input form__name' name='formName' id='name' type='text' placeholder='' />
            <label htmlFor='name' className='form__description form__description_error'></label>
          </div>
          <div>
            <input className='form__input form__status' name='formDescription' id='status' type='text' placeholder='' />
            <label htmlFor='status' className='form__description form__description_error'></label>
          </div>
        </>
      }
      title={'Editar Perfil'}
      buttonText={'Salvar'}
      popupIsOpen={editIsOpen}
      handleFadeClick={handleFadeClick}
      handleClosePopupClick={handleEditProfileCloseModalClick}
      handleModalOnKeyDown={handleModalOnKeyDown}
    />
  );
}

export default EditModal;
