import { shallowMount, Wrapper } from '@vue/test-utils'
import Home from '@/pages/index.vue'

describe('Index Page', () => {

  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = shallowMount(Home, {
      stubs: ['vcf-varient']
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('have a Variant Types graph', () => {
    expect(wrapper.find('[jest="Variant Types"]').exists()).toEqual(true)
  })

  test('have a Allele Frequency graph', () => {
    expect(wrapper.find('[jest="Allele Frequency"]').exists()).toEqual(true)
  })

  test('have a Missingness graph', () => {
    expect(wrapper.find('[jest="Missingness"]').exists()).toEqual(true)
  })

  test('have a Base Changes & Transition graph', () => {
    expect(wrapper.find('[jest="Base Changes & Transition"]').exists()).toEqual(true)
  })

})
