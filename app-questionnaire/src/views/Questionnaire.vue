<template>
    <div id="question">
        <question
            v-for="question in questions"
            v-bind:key="question.id"
            v-bind:libelle="question.libelle"
            v-bind:reponse="question.reponse"
        ></question>
        <router-link to="/resultats">
            <el-button round style="margin-top: 3%; margin-right: 2%;" type="primary" @click="onSubmit">Envoyer</el-button>
        </router-link>
    </div>
</template>

<script>
    import Question from '@/components/Question.vue'

    export default{
        name: 'Questionnaire',
        components: {
            Question
        },
        methods: {
            onSubmit: null,
        },
        data (){
            return {
                questions: [
                { id: 1, libelle: 'Why Vue JS ?', reponse: ['Oui', 'Non'] },
                { id: 2, libelle: 'Quel est le bon choix ?', reponse: ['Oui', 'Non', 'Peut-être', 'Pourquoi pas'] },
                { id: 3, libelle: 'Pourquoi ?', reponse: ['Oui', 'Non'] }
            ]
        }
        }
    }
</script>