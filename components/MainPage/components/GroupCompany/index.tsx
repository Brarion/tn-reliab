import Image from 'next/image'
import React, { useState } from 'react'
import Company from '@components/MainPage/components/GroupCompany/components/Company'
import Contact from '@components/Contact'
import styles from './styles.module.scss'
import pirs from '@public/assets/pirs.svg'
import geoexpert from '@public/assets/geoexpert.svg'
import kvanta from '@public/assets/kvanta.svg'
import element from '@public/assets/element.svg'
import expertChoice from '@public/assets/expertChoice.svg'
import skypower from '@public/assets/skypower.svg'
import Modal from '@components/Modal'
import Background1 from '@public/assets/background3.svg'
import Background2 from '@public/assets/background4.svg'
import Background3 from '@public/assets/background7.svg'

const GroupCompany = () => {
  const [openedModal, setOpenedModal] = useState<boolean>(false)

  const openModal = () => {
    setOpenedModal(true)
  }

  const closeModal = () => {
    setOpenedModal(false)
  }

  return (
    <>
      {openedModal && (
        <Modal onClose={closeModal}>
          <div className={styles.modal}>
            <h2>Мы свяжемся с Вами</h2>
            <p>Оставьте свои контактные данные и наш специалист ответит Вам в кратчайшие сроки</p>
            <Contact />
          </div>
        </Modal>
      )}

      <div className={styles.wrapper}>
        <div className={styles.imgWrapper1}>
          <Image src={Background1} alt={''} width={466} height={466} />
        </div>
        <div className={styles.imgWrapper2}>
          <Image src={Background2} alt={''} width={704} height={704} />
        </div>
        <div className={styles.imgWrapper3}>
          <Image src={Background1} alt={''} width={210} height={210} />
        </div>
        <div className={styles.imgWrapper4}>
          <Image src={Background3} alt={''} width={198} height={198} />
        </div>
        <div className={styles.text}>
          <span className={styles.text1}>Группа компаний ТН </span>
          <span className={styles.text2}>
            <span>- это объединение </span>
            <span>IT-специалистов</span>
            <span> из самых разных областей информационного пространства</span>
          </span>
        </div>
        <div className={styles.information}>
          <Company
            image={pirs}
            header={'Пирс'}
            text={'Разработка программных и технических систем, комплексов для бизнеса'}
            countEmployees={44}
            countProjects={20}
            textEmployees={'сотрудника'}
            textProjects={'проектов'}
            openModal={openModal}
          />
          <div className={styles.verticalLine} />
          <div className={styles.lineColumn} />
          <Company
            image={geoexpert}
            header={'Geoexpert'}
            text={'Георадиолокация и радарные системы для подповерхностного зондирования и навигации'}
            countEmployees={44}
            countProjects={20}
            textEmployees={'сотрудника'}
            textProjects={'проектов'}
            openModal={openModal}
          />
          <div className={styles.horizontalLine} />
          <div className={styles.emptyBlock} />
          <div className={styles.horizontalLine} />
          <div className={styles.lineColumn} />
          <Company
            image={kvanta}
            header={'KVANTA'}
            text={'Разработка электроники'}
            countEmployees={44}
            countProjects={20}
            textEmployees={'сотрудника'}
            textProjects={'проектов'}
            openModal={openModal}
          />
          <div className={styles.verticalLine} />
          <div className={styles.lineColumn} />
          <Company
            image={element}
            header={'Пятый элемент'}
            text={'Разработка и поддержка программного обеспечения'}
            countEmployees={44}
            countProjects={20}
            textEmployees={'сотрудника'}
            textProjects={'проектов'}
            openModal={openModal}
          />
          <div className={styles.horizontalLine} />
          <div className={styles.emptyBlock} />
          <div className={styles.horizontalLine} />
          <div className={styles.lineColumn} />
          <Company
            image={expertChoice}
            header={'Expert Choice CIS'}
            text={'Аудит и автоматизация бизнеса'}
            countEmployees={44}
            countProjects={20}
            textEmployees={'сотрудника'}
            textProjects={'проектов'}
            openModal={openModal}
          />
          <div className={styles.verticalLine} />
          <div className={styles.lineColumn} />
          <Company
            image={skypower}
            header={'Skypower'}
            text={'Беспилотные технологии'}
            countEmployees={44}
            countProjects={20}
            textEmployees={'сотрудника'}
            textProjects={'проектов'}
            openModal={openModal}
          />
        </div>
      </div>
    </>
  )
}

export default GroupCompany
