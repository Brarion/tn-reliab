import axios from 'axios'

import { SendEmail } from './types'

const emailApi = {
  send: async (email: SendEmail) => {
    await axios.post('/api/sendEmail', email)
  },
}

export default emailApi
