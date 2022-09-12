import axios from 'axios'

// https://api.brchallenges.com/api/empire-burger/menu
// https://api.brchallenges.com/api/empire-burger/testimonials

export const client = axios.create({
  baseURL: 'https://api.brchallenges.com/api/empire-burger/'
})
