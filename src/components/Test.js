import { useState } from 'react';
import Modal from './Modal';

function Test(props) {
  const [showModal, setModal] = useState(false);
  const deleteButton = () => {
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  }
  return (
    <div className='inline-flex'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-neutral-50 m-3">
        <img className="w-full h-48" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.text}</div>
          <p className="text-gray-700 text-base">
            {props.otherText}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Do you want to delete this?</span>
          <button className='m-3 bg-red-400 p-1 rounded' onClick={deleteButton}>Delete?</button>
        </div>
      </div>
      { showModal && <Modal onClick={closeModal}/>}
    </div>
  )
};
export default Test;
