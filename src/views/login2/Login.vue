<template>
  <div>
    <el-button @click="handleChange"></el-button>
  </div>
</template>
<script>
export default {
  name:"Login",
  methods:{
    handleChange(){
      this.$router.replace('/home')
    }
  }
}
</script>