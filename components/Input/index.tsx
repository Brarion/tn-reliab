import { HTMLInputTypeAttribute } from 'react'
import cn from 'classnames'

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
    <input
      type={type}
      className={inputClassName}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default Input
