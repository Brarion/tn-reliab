import { HTMLInputTypeAttribute } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import styles from './styles.module.scss'

type Props = {
  type: HTMLInputTypeAttribute
  placeholder: string
  value: string
  onChange: (value: string) => void
  error?: boolean
  helperText?: string
}

const Input = ({ type, placeholder, value, onChange, helperText, error }: Props) => {
  const inputClassName = cn(styles.input, {
    [styles.error]: error,
  })

  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        className={inputClassName}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && (
        <>
          <span>{helperText}</span>
          <div className={styles.errorImage}>
            <Image src={'/assets/errorModal.svg'} alt={''} width={20} height={20} />
          </div>
        </>
      )}
    </div>
  )
}

export default Input
