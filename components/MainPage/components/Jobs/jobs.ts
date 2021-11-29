type Job = {
  id: number
  title: string
  items: string[]
}

type Jobs = Job[]

const JobsArray: Jobs = [
  {
    id: 0,
    title: 'по системе agile',
    items: [
      'Бизнес-и-системные аналитики',
      'Разработчики',
      'Тестировщики',
      'Системные администраторы',
      'UX/UI дизайнеры',
      'Product и Project менеджеры',
      'Product Owner',
      'Head of development',
      'TeamLead',
    ],
  },
  {
    id: 1,
    title: 'занимаемся обучением специалистов',
    items: [
      'Бизнес-и-системные аналитики',
      'Разработчики',
      'Тестировщики',
      'Системные администраторы',
      'UX/UI дизайнеры',
      'Product и Project менеджеры',
      'Product Owner',
      'Head of development',
    ],
  },
  {
    id: 2,
    title: 'Имеем в штате 200+ работников разных направлений',
    items: [
      'Бизнес-и-системные аналитики',
      'Разработчики',
      'Тестировщики',
      'Системные администраторы',
      'UX/UI дизайнеры',
      'Product и Project менеджеры',
      'Product Owner',
      'Head of development',
      'TeamLead',
      'CTO',
    ],
  },
  {
    id: 3,
    title: 'занимаемся обучением специалистов',
    items: [
      'Бизнес-и-системные аналитики',
      'Разработчики',
      'Тестировщики',
      'Системные администраторы',
      'UX/UI дизайнеры',
      'Product и Project менеджеры',
      'Product Owner',
    ],
  },
]

export default JobsArray
