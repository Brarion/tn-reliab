import React, { ReactNode, useEffect } from 'react'
import Image from 'next/image'

import styles from './styles.module.scss'

type Props = {
  children: ReactNode
  onClose: () => void
}

const Modal = ({ children, onClose }: Props) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className={styles.modalWrapper}>
      <div onClick={onClose} className={styles.background}>
        <Image src={'/assets/modalBackground.png'} alt={''} width={'100%'} height={'100%'} />
      </div>
      <div className={styles.modal}>
        <div className={styles.closeModalIcon} onClick={onClose}>
          <Image src={'/assets/closeModalIcon.svg'} alt={''} width={15} height={15} />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
