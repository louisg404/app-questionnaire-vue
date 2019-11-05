<template>
  <div id="app">
    <div id="nav">
        <router-link to="/">Accueil</router-link> |
        <router-link to="/profil">Profil</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
body{
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  margin: 3% 10% 0 10%;
}
#nav {
  padding: 30px 0 30px 20px;
  font-size: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-active{
      text-decoration: none;
    }
    &.router-link-exact-active {
      color: #409EFF;
      text-decoration: none;
    }
  }
}
.el-progress-bar{
  margin-top: 10%;
  width: 70% !important;
}
</style>