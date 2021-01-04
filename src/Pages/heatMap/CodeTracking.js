import React,  { useState, useRef  }  from 'react';

import Modal from '../../Components/Modal/Modal'

const CodeTracking = () => {
    const [dropdown, setDropdown] = useState("");
    
    return (
        <>
        <Modal isOpen={Boolean(true)} onClickClose={() => setDropdown}>
            <h1>Comentários</h1>
        </Modal>
        </>
    );
}
 
export default CodeTracking;