import React, { useState, useContext, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import EditModal from './EditModal';
import AddPostModal from './AddPostModal';
import ChangeAvatarModal from './ChangeAvatarModal';
import DeletePostModal from './DeletePostModal';
import ImagePopup from './ImagePopup';
import { apiUser } from '../utils/constants';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Footer from './Footer';

function App() {
  // Current User
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([apiUser.getUserInfo(), apiUser.getUserCards()])
      .then(([user, cards]) => {
        setCurrentUser(user);
        setCards(cards);
      })
      .catch(err => err)
  }, []);

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

  // Image Modal
  const [imageModalIsOpen, setImageModalIsOpen] = useState(false);
  const handleCardClick = (cardImage, cardText) => {
    setImageModalIsOpen(!imageModalIsOpen);
    setSelectedCard({ link: cardImage.current.src, text: cardText.current.textContent });
  }

  // Card
  const [selectedCard, setSelectedCard] = useState({ text: '', link: '' });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        handleCardClick={handleCardClick}
        handleDeleteCardClick={handleDeleteCardClick}
        cards={cards}
        apiUser={apiUser}
        setCards={setCards}
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
    </CurrentUserContext.Provider>
  );
}

export default App;