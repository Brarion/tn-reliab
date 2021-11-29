import cn from 'classnames'

import styles from './styles.module.scss'

type Props = {
  placeholder: string
  value: string
  onChange: (value: string) => void
  error?: boolean
  helperText?: string
}

const TextArea = ({ placeholder, value, onChange, helperText, error }: Props) => {
  const inputClassName = cn(styles.textArea, {
    [styles.error]: error,
  })

  return (
    <textarea
      className={inputClassName}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default TextArea
