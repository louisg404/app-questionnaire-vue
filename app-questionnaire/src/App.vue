<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/profil">Profil</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
body{
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  margin-top: 3%;
  margin-left: 10%;
}
#nav {
  padding: 30px 0 30px 0;
  font-size: 40px;
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
</style>