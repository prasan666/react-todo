import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const deleteHandler = () => {
        setModalIsOpen(true)
    }
    const closeModalHandler = () => {
        setModalIsOpen(false)
    }
    const confirmModalHandler = () => {
        setModalIsOpen(false)
        props.onDelete(props.id)
    }
    
    return (
        <div className="card">
            <h2>{props.text} </h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={confirmModalHandler} />}
            { modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
        </div>

    )
}


export default Todo;