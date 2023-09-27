import React from 'react';

const ModalWindow = () => {
    return (
        <div className="descr none" onClick={() => 
            document.querySelector('.descr').classList.add('none')}>
        </div> 
    );
};

export default ModalWindow;