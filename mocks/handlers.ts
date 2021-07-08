import { rest } from 'msw'

const API_URL = process.env.API_URL

export const handlers = [
  rest.get(`${API_URL}/varients/dashboard`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          type: 'SNPs',
          original: 6819,
          filtered: 12481,
        },
        {
          type: 'detection',
          original: 5128,
          filtered: 4091,
        },
        {
          type: 'insertion',
          original: 10049,
          filtered: 5918,
        }
      ])
    )
  })
]
