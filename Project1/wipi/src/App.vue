<template>
  <div>
    <my-header></my-header>
    <main>
      <div>
        <div class="container">
          <router-view></router-view>
        </div>
      </div>

    </main>
    <my-footer v-if="showFooter"></my-footer>
  </div>
</template>

<script>
import MyHeader from '@/components/Header'
import MyFooter from '@/components/Footer'
const showFooterRoutes = ['/', '/archives', '/knowledge'];

export default ({
  components: {
    MyFooter,
    MyHeader,
  },
  computed: {
    showFooter(){
      return showFooterRoutes.includes(this.$route.path);
    }
  }
})
</script>

<style>
header{
  height: 64px;
}
main{
  background-color: var(--bg-body);
  min-height: calc(100vh - 64px);
}
main>div{
  text-align: center;
}
</style>