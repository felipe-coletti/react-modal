import { useState } from 'react'
import './App.css'
import Modal from './components/modal'

function App() {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return(
        <div className='container'>
            <button className='button' onClick={openModal}>Abrir modal</button>
            {isOpen && <Modal onClose={closeModal}>
                <div className='content-area'>
                    <h1 className='title'>Título</h1>
                    <p className='paragraph'>Texto</p>
                </div>
            </Modal>}
        </div>
    )
}

export default App
