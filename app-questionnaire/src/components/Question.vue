<template>
    <div>
        <p>{{ question.libelle }}</p>
    
        <div v-for="item in question.reponse" :key="item">
            <el-checkbox v-model="item.user">
                {{item.libelle}}
            </el-checkbox>
        </div>
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