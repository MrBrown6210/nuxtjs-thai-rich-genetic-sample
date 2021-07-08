import { shallowMount, Wrapper } from '@vue/test-utils'

jest.mock('vue-echarts')
jest.mock('echarts')
// jest.mock('echarts/core', () => {
//   VChart: () => null
// })

jest.createMockFromModule('echarts')

import VCFVarient from './VCFVarient.vue'

describe('Index Page', () => {

  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = shallowMount(VCFVarient, {
      stubs: ['v-chart']
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

})
