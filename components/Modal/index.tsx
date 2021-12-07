import React from 'react'
import Image from 'next/image'

import BtnCloseModal from '@public/assets/closeModalIcon.svg'
import modalBackground from '@public/assets/modalBackground.png'

import styles from './styles.module.scss'

type Props = {
  children: React.ReactNode
  onClose: () => void
  opened: boolean
}

const Modal = ({ children, onClose, opened }: Props) => {
  const handleKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  React.useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [opened, handleKeyDown])

  if (!opened) {
    return null
  }

  return (
    <div className={styles.modalWrapper}>
      <div onClick={onClose} className={styles.background}>
        <Image src={modalBackground} alt={''} width={'100%'} height={'100%'} loading={'eager'} priority />
      </div>
      <div className={styles.modal}>
        <div className={styles.closeModalIcon} onClick={onClose}>
          <BtnCloseModal />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
