import Image from 'next/image'

import styles from './styles.module.scss'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <footer>
        <div className={styles.content}>
          <h2>Группа компаний «Технологии надёжности»</h2>
          <div className={styles.mainPart}>
            <div className={styles.info}>
              <div className={styles.item}>
                <Image src={'/assets/pirsbw.svg'} alt={''} width={29} height={30} />
                <p>Пирс</p>
              </div>
              <div className={styles.item}>
                <Image src={'/assets/skypowerbw.svg'} alt={''} width={30} height={30} />
                <p>Skypower</p>
              </div>
              <div className={styles.item}>
                <Image src={'/assets/kvantabw.svg'} alt={''} width={25} height={30} />
                <p>KVANTA</p>
              </div>
              <div className={styles.item}>
                <Image src={'/assets/elementbw.svg'} alt={''} width={30} height={30} />
                <p>Пятый элемент</p>
              </div>
              <div className={styles.item}>
                <Image src={'/assets/expertChoicebw.svg'} alt={''} width={22} height={30} />
                <p>Expert Choice CIS</p>
              </div>
              <div className={styles.item}>
                <Image src={'/assets/geoexpertbw.svg'} alt={''} width={29} height={30} />
                <p>Geoexpert</p>
              </div>
            </div>
            <div className={styles.contact}>
              <div className={styles.item}>
                <a href={''}>Вконтакте</a>
              </div>
              <div className={styles.item}>
                <a href={''}>Instagram</a>
              </div>
              <div className={styles.item}>
                <a href={''}>Twitter</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.underfoot}>© «Технологии надежности» 2021. Все права защищены</div>
      </footer>
    </div>
  )
}

export default Footer
