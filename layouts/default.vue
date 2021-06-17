<template>
  <div>
    <div class="flex items-center p-5">
      <nuxt-link jest="home" to="/">
        <img class="w-12 h-12 mr-6 block" src="https://www.egov.go.th/upload/eservice-thumbnail/img_d9b6115d4774352ab6c42ed2e530a663.png" alt="">
      </nuxt-link>
      <div class="h-10 text-x flex space-x-6 items-center ">
        <nuxt-link jest="SNP" to="/snp" class="text-base font-medium text-gray-500 hover:text-yellow-200">SNP</nuxt-link>
        <nuxt-link jest="PCA" to="/pca" class="text-base font-medium text-gray-500 hover:text-yellow-200">PCA</nuxt-link>
        <nuxt-link jest="Admixture" to="/admixture" class="text-base font-medium text-gray-500 hover:text-yellow-200">Admixture</nuxt-link>
      </div>
    </div>
    <div class="px-4">
      <div class="h-[0.05rem] bg-gray-200 w-full"></div>
    </div>
    <Nuxt />
  </div>
</template>

<style lang="postcss">
.nuxt-link-active {
  @apply text-yellow-400
}
</style>
