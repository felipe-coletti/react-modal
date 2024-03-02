import { useState } from 'react'
import './App.css'
import Modal from './components/modal'

function App() {
    const [isOpen, setIsOpen] = useState(false)

    const showModal = () => setIsOpen(!isOpen)

    return(
        <div className='container'>
            <button className='button' onClick={showModal}>Abrir modal</button>
            {isOpen && <Modal onClose={showModal}>
                <div className='content-area'>
                    <h1 className='title'>Título</h1>
                    <p className='paragraph'>Texto</p>
                </div>
            </Modal>}
        </div>
    )
}

export default App
