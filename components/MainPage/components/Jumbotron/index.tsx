import React from 'react'
import Image from 'next/image'

import Button from '@components/Button'

import styles from './styles.module.scss'

const Jumbotron = () => {
  const handleClick = () => {
    const contactsElement = document.getElementById('contacts')
    contactsElement!.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  return (
    <div id={'jumbotron'} className={styles.wrapper}>
      <div className={styles.imgWrapper1}>
        <Image src={'/assets/background1.svg'} alt={''} width={175} height={175} />
      </div>
      <div className={styles.imgWrapper2}>
        <Image src={'/assets/background2.svg'} alt={''} width={176} height={176} />
      </div>
      <div className={styles.mainContent}>
        <div className={styles.leftSide}>
          <div className={styles.text}>
            <h2>Помогаем вашему бизнесу прокачаться до максимального уровня</h2>
            <p>
              Уделяем особое внимание проектированию интерфейсов, в&nbsp;результате чего мы с горостью можем назвать
              наши продукты Надёжными!
            </p>
            <Button text={'старт с нами'} className={styles.button} onClick={handleClick} type={'button'} />
          </div>
          <aside>
            <div className={styles.line} />
            <p>Сайт находится в режиме разработки. Будем рады ответить на Ваши вопросы</p>
          </aside>
        </div>
        <div className={styles.imgPhoneWrapper}>
          <img alt={'Технологии надёжности'} src={'/assets/phone1.png'} />
        </div>
      </div>
      <div className={styles.information}>
        <div className={styles.contacts}>
          <div className={styles.item}>
            <a href={'tel:+7 (800) 555-30-53'}>
              <Image src={'/assets/tel.svg'} alt={''} width={50} height={50} />
            </a>
            <div className={styles.contactInfo}>
              <h3>Приёмная</h3>
              <a href={'tel:+7 (800) 555-30-53'}>+7 (800) 555-30-53</a>
            </div>
          </div>
          <div className={styles.item}>
            <a href={'mailto:tn@reliab.tech'}>
              <Image src={'/assets/email.svg'} alt={''} width={50} height={50} />
            </a>
            <div className={styles.contactInfo}>
              <h3>Менеджер</h3>
              <a href={'mailto:tn@reliab.tech'}>tn@reliab.tech</a>
            </div>
          </div>
        </div>
        <div className={styles.business}>
          <div className={styles.item}>{`Разработка\nПО`}</div>
          <div className={styles.item}>{`Аудит\nи автоматизация бизнеса`}</div>
          <div className={styles.item}>{`Разработка\nэлектроники`}</div>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
