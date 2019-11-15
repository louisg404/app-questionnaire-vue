<template>
    <div>
        <!-- Template d'une question -->
        <el-card shadow="hover" class="box-card">
        <div slot="header" class="clearfix">
            <span style="font-size: 1.5em;">{{ question.libelle }}</span>
        </div>
        <div v-for="item in question.reponse" :key="item">
            <el-checkbox style="margin-bottom: 15px;" v-model="item.value">
                <span style="font-size: 1.2em;">{{item.libelle}}</span>
            </el-checkbox>
        </div>
        </el-card>
    </div>
</template>

<script>
    export default{
        name: 'Question',
        props: ['question'],
        data(){
            return{}
        },
    };
</script>

<style>

</style>