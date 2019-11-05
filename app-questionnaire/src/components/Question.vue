<template>
    <div>
        <p>{{ libelle }}</p>
        <el-checkbox v-if="reponse[0]" v-model="checked">{{reponse[0]}}</el-checkbox>
        <el-checkbox v-if="reponse[1]" v-model="checked">{{reponse[1]}}</el-checkbox>
        <el-checkbox v-if="reponse[2]" v-model="checked">{{reponse[2]}}</el-checkbox>
        <el-checkbox v-if="reponse[3]" v-model="checked">{{reponse[3]}}</el-checkbox>
    </div>
</template>

<script>
    export default{
        name: 'Question',
        props: {
            libelle: String,
            reponse: String
        },
        data(){
            return{
                libelle: this.libelle,
                reponse: this.reponse
            }
        },
    };
</script>

<style>

</style>