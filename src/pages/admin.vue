<template>
  <div>
    <div class="admin">
      <img src="../assets/mypng.png" alt="" />
    </div>
    <h2 class="text">欢迎你，晚风！</h2>
  </div>
</template>

<script>
export default {
  name: 'Admin'

}
</script>

<style>
.admin {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.admin img {
  width: 150px;
  height: 150px;
}
.text {
  text-align: center;
}
</style>