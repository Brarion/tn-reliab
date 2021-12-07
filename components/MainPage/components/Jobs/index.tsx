import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import OpeningList from '@components/MainPage/components/Jobs/components/OpeningList'

import useResize from '@utils/useResize'

import JobsArray from './jobs'

import styles from './styles.module.scss'

const Jobs = () => {
  const [openedJobId, setOpenedJobId] = useState<number | null>(null)

  const width = useResize()

  const getJobHeight = (element: HTMLElement | null): number => {
    let height = 0
    for (let i = 0; i < element!.children.length; i++) {
      height = height + element!.children[i].scrollHeight + 30
    }

    return height + 2
  }

  const openJob = (jobId: number) => {
    JobsArray.forEach((job) => {
      const jobElement = document.getElementById(job.id.toString())
      if (job.id !== jobId) {
        jobElement!.style.height = ''
      }
    })

    const currentElement = document.getElementById(jobId.toString())
    if (!currentElement!.style.height) {
      currentElement!.style.height = `${getJobHeight(currentElement)}px`
      setOpenedJobId(jobId)
    } else {
      currentElement!.style.height = ''
      setOpenedJobId(null)
    }
  }

  useEffect(() => {
    if (openedJobId !== null) {
      const currentElement = document.getElementById(openedJobId.toString())
      currentElement!.style.height = `${getJobHeight(currentElement)}px`
    }
  }, [width, openedJobId])

  return (
    <div id={'jobs'} className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.imgWrapper}>
          <Image src={'/assets/donut.svg'} alt={''} width={50} height={62} />
        </div>
        <h2>Как мы работаем</h2>
        <div className={styles.horizontalLine} />
        {JobsArray.map((job) => (
          <OpeningList
            key={job.id}
            header={job.title}
            items={job.items}
            opened={job.id === openedJobId}
            onClick={openJob}
            id={job.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Jobs
