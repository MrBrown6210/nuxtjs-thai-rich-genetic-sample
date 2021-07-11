import { rest } from 'msw'
import varientDashboardJSON from './fixtures/varients-dashboard.json'
import allelesDashboardJSON from './fixtures/alleles-dashboard.json'
import missingnessOriginalDashboardJSON from './fixtures/missingness-original-dashboard.json'
import missingnessFilteredDashboardJSON from './fixtures/missingness-filtered-dashboard.json'
const API_URL = process.env.API_URL

export const handlers = [
  rest.get(`${API_URL}/varients/dashboard`, (req, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.json(varientDashboardJSON)
    )
  }),
  rest.get(`${API_URL}/alleles/dashboard`, (req, res, ctx) => {
    return res(
      ctx.delay(),
      ctx.json(allelesDashboardJSON)
    )
  }),
  rest.get(`${API_URL}/missingness/dashboard`, (req, res, ctx) => {
    const type = req.url.searchParams.get('type')
    let data = [...missingnessOriginalDashboardJSON, ...missingnessFilteredDashboardJSON]
    if (type === 'original') data = missingnessOriginalDashboardJSON
    if (type === 'filtered') data = missingnessFilteredDashboardJSON
    return res(
      ctx.delay(),
      ctx.json(data)
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
