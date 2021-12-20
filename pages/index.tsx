import MainPage from '@components/MainPage'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Технологии надежности</title>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content="Группа компаний ТН - это объединение IT-специалистов из самых разных областей информационного пространства"
        />
        <meta name="type" content="website" />
        <meta name="title" content="Технологии надежности" />
        <meta name="locale" content="ru_RU" />
        <meta
          name="keywords"
          content="Технологии надежности, Технологии надёжности, ТН, Группа компаний ТН, Группа компаний Технологии надежности, Группа компаний Технологии надёжности, Группа компаний, IT-специалисты, IT, IT компапния, Компания, Разработка ПО, Аудит, Автоматизация, Автоматизация бизнеса, Аудит бизнеса, Аудит и автоматизация бизнеса, Разработка, Разработка электроники, Пирс, Geoexpert, KVANTA, Пятый элемент, Expert Choice CIS, Skypower, Разработка программных систем, Разработка комплексов для бизнеса, Разработка технических систем, Георадиолокация и радарные системы для подповерхностного зондирования и навигации, Разработка и поддержка программного обеспечения, Разработка и поддержка ПО, Беспилотные технологии, https://vk.com/reliab.tech, https://instagram.com/reliab_tech?utm_medium=copy_link, +7 (800) 555-30-53, +7-800-555-30-53, 88005553053, tn@reliab.tech"
        />
        <meta
          name="og:description"
          content="Группа компаний ТН - это объединение IT-специалистов из самых разных областей информационного пространства"
        />
        <meta name="og:type" content="website" />
        <meta name="og:title" content="Технологии надежности" />
        <meta name="og:locale" content="ru_RU" />
        <meta
          name="og:keywords"
          content="Технологии надежности, Технологии надёжности, ТН, Группа компаний ТН, Группа компаний Технологии надежности, Группа компаний Технологии надёжности, Группа компаний, IT-специалисты, IT, IT компапния, Компания, Разработка ПО, Аудит, Автоматизация, Автоматизация бизнеса, Аудит бизнеса, Аудит и автоматизация бизнеса, Разработка, Разработка электроники, Пирс, Geoexpert, KVANTA, Пятый элемент, Expert Choice CIS, Skypower, Разработка программных систем, Разработка комплексов для бизнеса, Разработка технических систем, Георадиолокация и радарные системы для подповерхностного зондирования и навигации, Разработка и поддержка программного обеспечения, Разработка и поддержка ПО, Беспилотные технологии, https://vk.com/reliab.tech, https://instagram.com/reliab_tech?utm_medium=copy_link, +7 (800) 555-30-53, +7-800-555-30-53, 88005553053, tn@reliab.tech"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel={'preload'} href={'/assets/modalBackground.webp'} as={'image'} type={'image/webp'} />
        <link rel="manifest" href="/manifests/index.json" />
      </Head>
      <MainPage />
    </>
  )
}

export default Home
