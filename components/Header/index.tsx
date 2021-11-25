import Image from 'next/image'

import styles from './styles.module.scss'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <header>
        <Image src={'/assets/logo.svg'} alt={'Технологии надежности'} width={128} height={40} />
        <ul>
          <li>
            <a href={'/main'}>Главная</a>
          </li>
          <Image alt={''} src={'/assets/ellipse.svg'} width={4} height={4} />
          <li>
            <a href={'/about-as'}>О нас</a>
          </li>
          <Image alt={''} src={'/assets/ellipse.svg'} width={4} height={4} />
          <li>
            <a href={'/blog'}>Блог</a>
          </li>
          <Image alt={''} src={'/assets/ellipse.svg'} width={4} height={4} />
          <li>
            <a href={'/contacts'}>Контакты</a>
          </li>
          <Image alt={''} src={'/assets/ellipse.svg'} width={4} height={4} />
          <li>
            <a href={'/vacancy'}>Вакансии</a>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header
