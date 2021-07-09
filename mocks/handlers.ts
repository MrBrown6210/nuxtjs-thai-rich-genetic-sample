import { rest } from 'msw'

const API_URL = process.env.API_URL

export const handlers = [
  rest.get(`${API_URL}/varients/dashboard`, (req, res, ctx) => {
    return res(
      ctx.delay(),
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


export const networkErrorHandlers = [
  rest.get('*', (req, res, ctx) => res.networkError('Boom there was error')),
  rest.post('*', (req, res, ctx) => res.networkError('Boom there was error')),
  rest.patch('*', (req, res, ctx) => res.networkError('Boom there was error')),
  rest.put('*', (req, res, ctx) => res.networkError('Boom there was error')),
  rest.delete('*', (req, res, ctx) => res.networkError('Boom there was error')),
]
