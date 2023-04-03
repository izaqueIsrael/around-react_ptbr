import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import EditModal from './EditModal';
import AddPostModal from './AddPostModal';
import ChangeAvatarModal from './ChangeAvatarModal';
import DeletePostModal from './DeletePostModal';
import ImagePopup from './ImagePopup';
import Footer from './Footer';

function App() {
  // Edit Profile Modal Functions
  const [editIsOpen, setEditIsOpen] = useState(false);
  const handleEditProfileClick = () => setEditIsOpen(!editIsOpen);

  // Add Post Modal Functions
  const [addIsOpen, setAddIsOpen] = useState(false);
  const handleAddPlaceClick = () => setAddIsOpen(!addIsOpen);

  // Change Avatar Modal Functions
  const [avatarModalIsOpen, setAvatarModalIsOpen] = useState(false);
  const handleEditAvatarClick = () => setAvatarModalIsOpen(!avatarModalIsOpen);

  // Delete Post Modal
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const handleDeleteCardClick = () => setDeleteIsOpen(!deleteIsOpen);

  // Card
  const [selectedCard, setSelectedCard] = useState({ text: '', link: '' });

  // Image Modal
  const [imageModalIsOpen, setImageModalIsOpen] = useState(false);
  const handleCardClick = (e) => {
    setImageModalIsOpen(!imageModalIsOpen);
    setSelectedCard({ link: e.target.src, text: e.target.nextElementSibling.nextElementSibling.firstElementChild.textContent });
  }

  return (
    <>
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        handleCardClick={handleCardClick}
        handleDeleteCardClick={handleDeleteCardClick}
      />
      <EditModal
        className={`${editIsOpen ? 'popup popup-image' : 'popup popup_closed popup-image'}`}
        editIsOpen={editIsOpen}
        setEditIsOpen={setEditIsOpen}
      />
      <AddPostModal
        className={`${addIsOpen ? 'popup popup-image' : 'popup popup_closed popup-image'}`}
        addIsOpen={addIsOpen}
        setAddIsOpen={setAddIsOpen}
      />
      <ChangeAvatarModal
        className={`${avatarModalIsOpen ? 'popup popup-image' : 'popup popup_closed popup-image'}`}
        avatarModalIsOpen={avatarModalIsOpen}
        onEditAvatarClick={setAvatarModalIsOpen}
      />
      <ImagePopup
        className={`${imageModalIsOpen ? 'popup popup-image' : 'popup popup_closed popup-image'}`}
        imageModalIsOpen={imageModalIsOpen}
        setImageModalIsOpen={setImageModalIsOpen}
        handleCardClick={handleCardClick}
        selectedCard={selectedCard}
      />
      <DeletePostModal
        className={`${deleteIsOpen ? 'popup popup-image popup_delete' : 'popup popup_closed popup-image popup_delete'}`}
        deleteIsOpen={deleteIsOpen}
        setDeleteIsOpen={setDeleteIsOpen}
      />
      <Footer />
    </>
  );
}

export default App;