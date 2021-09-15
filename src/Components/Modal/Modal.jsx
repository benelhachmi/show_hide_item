import React ,{useState} from 'react'
import "./Modal.css"



export default function Modal(){
    const [modal ,setModal]= useState(false);

    const toggleModal = () =>  {
        setModal(!modal)
    }


return(
    <>
    <button
    onClick={toggleModal}
    className="btn-modal">Open</button>
{modal && (
    <div className="overlay">
    <div className="modal">
        <div className="modal-content">
            <h2>Hello Modale</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Libero quos harum, nostrum iste excepturi rerum unde fugiat eum repudiandae iusto.
                 Ratione eius et ad, architecto minima doloremque quas enim quod?
            </p>
            <button
            onClick={toggleModal}
            className="close-modale">Close</button>
        </div>
    </div>
</div>
)}
    

    </>
)
    
}