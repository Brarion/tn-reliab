import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import styles from './styles.module.scss'

type Props = {
  onClose: () => void
}

const MobileMenu = ({ onClose }: Props) => {
  const [closeAnimation, setCloseAnimation] = useState<boolean>(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
      onClose()
    }
  }, [])

  const handleClose = () => {
    setCloseAnimation(true)
    setTimeout(() => {
      onClose()
    }, 500)
  }

  const wrapperStyles = cn(styles.wrapper, {
    [styles.closing]: closeAnimation,
  })

  return (
    <div className={wrapperStyles}>
      <div className={styles.head}>
        <Image loading={'eager'} src={'/assets/logoMobile.svg'} alt={'Технологии надежности'} width={128} height={40} />
        <div className={styles.btnMenu} onClick={handleClose}>
          <Image loading={'eager'} src={'/assets/btnCloseMenu.svg'} alt={''} width={16} height={16} />
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.item}>
          <a href={'/main'}>Главная</a>
        </div>
        <div className={styles.item}>
          <a href={'/about-as'}>О нас</a>
        </div>
        <div className={styles.item}>
          <a href={'/jobs'}>Наша работа </a>
        </div>
        <div className={styles.item}>
          <a href={'/contacts'}>Контакты</a>
        </div>
      </div>
      <div className={styles.contacts}>
        <div className={styles.item}>
          <h3>Приёмная</h3>
          <a href={'tel:+7 (800) 555-30-53'}>+7 (800) 555-30-53</a>
        </div>
        <div className={styles.item}>
          <h3>Менеджер</h3>
          <a href={'mailto:tn@reliab.tech'}>tn@reliab.tech</a>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
