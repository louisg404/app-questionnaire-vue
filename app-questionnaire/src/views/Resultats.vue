<template>
    <div style="text-align: center; margin-top: 15%;">
        <h1 style="font-size: 100px;"><b>{{ nb }} / 10<br>👍</b></h1>
        <router-link to="/">
            <el-button round>Retour à l'accueil</el-button>
        </router-link>
    </div>
</template>

<script>
import router from "../router";

export default {
    name: "resultats",
    data: () => ({
        nb: Number
    }),
    mounted () {
    this.nb = this.$route.query.nb
  },
}
</script>