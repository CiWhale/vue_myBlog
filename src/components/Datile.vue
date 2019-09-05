<template>
    <div class="Datile">
      <Header/>
      <DatileNav/>
      <router-view/>
    </div>
</template>

<script type="text/javascript">
  const  Header = ()=> import('./Header')
  const  DatileNav = ()=> import('./DatileNav')
    export default {
        name:'Datile',
        data() {
            return {}
        },
        components: {Header,DatileNav}
    }
</script>

<style scoped>
</style>
