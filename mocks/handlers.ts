import { rest } from 'msw'

const API_URL = process.env.API_URL

export const handlers = [
  rest.get(`${API_URL}/varients/dashboard`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          type: 'SNPs',
          original: Math.floor(Math.random() * 12000),
          filtered: Math.floor(Math.random() * 12000),
        },
        {
          type: 'detection',
          original: Math.floor(Math.random() * 12000),
          filtered: Math.floor(Math.random() * 12000),
        },
        {
          type: 'insertion',
          original: Math.floor(Math.random() * 12000),
          filtered: Math.floor(Math.random() * 12000),
        }
      ])
    )
  })
]
