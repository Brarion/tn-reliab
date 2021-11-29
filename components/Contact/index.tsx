import { HTMLInputTypeAttribute, useEffect, useState } from 'react'
import Input from '@components/Input'
import TextArea from '@components/TextArea'
import styles from './styles.module.scss'
import Button from '@components/Button'

enum FORM_KEY {
  TEXT = 'text',
  EMAIL = 'email',
  COMMENT = 'comment',
}

type FormItem = {
  value: string
  placeholder: string
  type: string
  error: boolean
}

type Form = { [key in FORM_KEY]: FormItem }

const FORM_INITIAL_VALUES: Form = {
  [FORM_KEY.TEXT]: {
    value: '',
    placeholder: 'Как к Вам обратиться?',
    type: 'text',
    error: false,
  },
  [FORM_KEY.EMAIL]: {
    value: '',
    placeholder: 'Ваш email',
    type: 'email',
    error: false,
  },
  [FORM_KEY.COMMENT]: {
    value: '',
    placeholder: 'Сообщение (необязательно)',
    type: 'text',
    error: false,
  },
}

const Contact = () => {
  const [form, setForm] = useState<Form>(FORM_INITIAL_VALUES)
  const validate = () => {
    const validateText = (value: string) => {
      return value === ''
    }

    const validateEmail = (value: string) => {
      return value === '' || !/@/.test(value)
    }

    const newForm = { ...form }

    newForm.text.error = validateText(newForm.text.value)
    newForm.email.error = validateEmail(newForm.email.value)

    setForm(newForm)

    return new Promise((resolve, reject) => {
      if (newForm.text.error || newForm.email.error) {
        resolve(false)
      } else {
        reject(true)
      }
    })
  }

  const submit = () => {
    validate().then(() => {
      console.log(true)
    })
  }

  const onChange = (key: FORM_KEY, newValue: string) => {
    setForm({
      ...form,
      [key]: {
        ...form[key],
        value: newValue,
        error: false,
      },
    })
  }

  return (
    <form className={styles.wrapper}>
      <div className={styles.errors}>
        {((form.text.error && form.text.value === '') || (form.email.error && form.email.value === '')) && (
          <span>*Заполните все обязательные поля</span>
        )}
        {form.email.error && <span>*Неверный формат поля</span>}
      </div>
      <Input
        type={form.text.type}
        placeholder={form.text.placeholder}
        value={form.text.value}
        error={form.text.error}
        onChange={(value) => onChange(FORM_KEY.TEXT, value)}
      />
      <Input
        type={form.email.type}
        placeholder={form.email.placeholder}
        value={form.email.value}
        error={form.email.error}
        onChange={(value) => onChange(FORM_KEY.EMAIL, value)}
      />
      <TextArea
        placeholder={form.comment.placeholder}
        value={form.comment.value}
        error={form.comment.error}
        onChange={(value) => onChange(FORM_KEY.COMMENT, value)}
      />
      <Button text={'Отправить'} className={styles.button} onClick={submit} type={'button'} />
    </form>
  )
}

export default Contact
