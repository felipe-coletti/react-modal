import { useState } from 'react'
import './App.css'
import Modal from './components/modal'

function App() {
    const [open, setOpen] = useState(false)

    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)

    return(
        <div className='container'>
            <button className='button' onClick={openModal}>Abrir modal</button>
            <Modal isOpen={open} onClose={closeModal}>
                <div className='content-area'>
                    <h1 className='title'>Título</h1>
                    <p className='paragraph'>Texto</p>
                </div>
            </Modal>
        </div>
    )
}

export default App
