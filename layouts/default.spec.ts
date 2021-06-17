import { shallowMount, Wrapper } from '@vue/test-utils'
import Layout from '@/layouts/default.vue'

describe('Defalut Layout', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(() => {
    wrapper = shallowMount(Layout, {
      stubs: ['Nuxt', 'nuxt-link'],
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('have button to home', () => {
    expect(wrapper.find("[jest='home']").attributes('to')).toEqual('/')
  })

  test('have button to SNP', () => {
    expect(wrapper.find("[jest='SNP']").attributes('to')).toEqual('/snp')
  })

  test('have button to PCA', () => {
    expect(wrapper.find("[jest='PCA']").attributes('to')).toEqual('/pca')
  })

  test('have button to Admixture', () => {
    expect(wrapper.find("[jest='Admixture']").attributes('to')).toEqual('/admixture')
  })

})
