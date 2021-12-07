import { useState } from 'react'
import Input from '@components/Input'
import TextArea from '@components/TextArea'
import Button from '@components/Button'
import COMPANIES from '../../types/companies'
import { emailApi } from '@api'
import styles from './styles.module.scss'

enum FORM_KEY {
  NAME = 'name',
  EMAIL = 'email',
  COMMENT = 'comment',
}

type FormItem = {
  value: string
  placeholder: string
  type: string
  error: boolean
  helperText: string
}

type Form = { [key in FORM_KEY]: FormItem }

const FORM_INITIAL_VALUES: Form = {
  [FORM_KEY.NAME]: {
    value: '',
    placeholder: 'Как к Вам обратиться?',
    type: 'text',
    error: false,
    helperText: '',
  },
  [FORM_KEY.EMAIL]: {
    value: '',
    placeholder: 'Ваш email',
    type: 'email',
    error: false,
    helperText: '',
  },
  [FORM_KEY.COMMENT]: {
    value: '',
    placeholder: 'Сообщение',
    type: 'text',
    error: false,
    helperText: '',
  },
}

type Props = {
  company?: COMPANIES
}

const Contact = ({ company }: Props) => {
  const [form, setForm] = useState<Form>(FORM_INITIAL_VALUES)
  const validate = () => {
    const validateText = (value: string): { error: boolean; helperText: string } => {
      return value === '' ? { error: true, helperText: '*Обязательное поле' } : { error: false, helperText: '' }
    }

    const validateEmail = (value: string): { error: boolean; helperText: string } => {
      if (value === '') {
        return { error: true, helperText: '*Обязательное поле' }
      } else if (!/@/.test(value)) {
        return { error: true, helperText: '*Неверный формат поля' }
      }

      return { error: false, helperText: '' }
    }

    const newForm = { ...form }

    newForm.name = { ...newForm.name, ...validateText(newForm.name.value) }
    newForm.email = { ...newForm.email, ...validateEmail(newForm.email.value) }
    setForm(newForm)

    return new Promise((resolve, reject) => {
      if (newForm.name.error || newForm.email.error) {
        reject(false)
      } else {
        resolve(true)
      }
    })
  }

  const submit = () => {
    validate().then(() => {
      emailApi
        .send({
          to: 'testtn578@gmail.com',
          from: 'testtn578@gmail.com',
          text: `Как к Вам обратиться?: ${form.name.value}\nВаш email: ${form.email.value}\n${
            form.comment.value ? `Cообщение: ${form.comment.value}` : ' '
          }`,
          subject: `${company ? company : ' '}`,
        })
        .then()
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
        {(form.name.error || form.email.error) && <p>Заполните все обязательные поля</p>}
      </div>
      <Input
        type={form.name.type}
        placeholder={form.name.placeholder}
        value={form.name.value}
        error={form.name.error}
        onChange={(value) => onChange(FORM_KEY.NAME, value)}
        helperText={form.name.helperText}
      />
      <Input
        type={form.email.type}
        placeholder={form.email.placeholder}
        value={form.email.value}
        error={form.email.error}
        onChange={(value) => onChange(FORM_KEY.EMAIL, value)}
        helperText={form.email.helperText}
      />
      <TextArea
        placeholder={form.comment.placeholder}
        value={form.comment.value}
        error={form.comment.error}
        onChange={(value) => onChange(FORM_KEY.COMMENT, value)}
        helperText={form.comment.helperText}
      />
      <Button text={'Отправить'} className={styles.buttonSend} onClick={submit} type={'button'} />
    </form>
  )
}

export default Contact
