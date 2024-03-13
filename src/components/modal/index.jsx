import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { Icon } from '@iconify/react'

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        window.addEventListener('keydown', handleEsc)
    
        return () => {
            window.removeEventListener('keydown', handleEsc)
        }
    }, [onClose])

    if (!isOpen) return null

    return (
        <div className={styles.modalContainer}>
            <div className={styles.container}>
                <div className={styles.backdrop} onClick={onClose}></div>
                <div className={styles.contentArea}>
                    <div className={styles.topArea}>
                        <button className={styles.button} title="Fechar" onClick={onClose}>
                            <Icon icon="tabler:x" />
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal