import React from 'react';

const BuyerModal = ({ title, message, closeModal, successAction, modalData, successButtonName }) => {
    return (
        <div>


            <input type="checkbox" id="buyer-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label
                            onClick={() => successAction(modalData)}
                            htmlFor="buyer-modal" className="btn">Confirm</label>
                        <button
                            onClick={closeModal}
                            className='btn btn-outline'>{successButtonName}</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyerModal;