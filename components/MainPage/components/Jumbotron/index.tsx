import styles from './styles.module.scss'
import Button from '@components/Button'
import Image from 'next/image'

const Jumbotron = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContent}>
        <div className={styles.leftSide}>
          <div className={styles.text}>
            <h2>{`Помогаем вашему бизнесу\nпрокачаться до максимального уровня`}</h2>
            <p>
              {`Уделяем особое внимание проектированию интерфейсов,
              в результате чего мы с горостью можем назвать наши продукты Надёжными!`}
            </p>
            <Button text={'старт с нами'} />
          </div>
          <aside className={styles.devInfo}>
            <div className={styles.line}></div>
            {`Сайт находится в режиме разработки.\nБудем рады ответить на Ваши вопросы`}
          </aside>
        </div>
        <Image alt={''} src={'/assets/phone.png'} width={700} height={700} priority />
      </div>
      <div className={styles.information}>
        <div className={styles.contacts}>
          <div className={styles.item}>
            <Image src={'/assets/tel.svg'} alt={''} width={50} height={50} />
            <div className={styles.contactInfo}>
              <h3>Приёмная</h3>
              <p>+7 (800) 555-30-53</p>
            </div>
          </div>
          <div className={styles.item}>
            <Image src={'/assets/email.svg'} alt={''} width={50} height={50} />
            <div className={styles.contactInfo}>
              <h3>Менеджер</h3>
              <p>tn@reliab.tech</p>
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
