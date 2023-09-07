import React, { useState } from 'react';
import ModalWindow from './Utils/ModalWindow';

const ButtonShow = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className='button_show' onClick={handleButtonClick}>Thêm ghi chú/ Dàn ý</button>
      <ModalWindow show={showModal}  onClose={handleCloseModal} />
    </div>
  );
};

export default ButtonShow;