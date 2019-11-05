<template>
    <el-main>
        <question :question="questions[getQuestionIndex()]"></question>

        <el-button style="margin-top: 3%;" type="info"
            icon="el-icon-caret-left" @click="questionPrev" circle></el-button>
        <el-button style="margin-top: 3%; margin-right: 2%;" type="info"
            icon="el-icon-caret-right" @click="questionNext" circle>
        </el-button>

        <router-link to="/resultats">
        <el-button round style="margin-top: 3%; margin-right: 2%;" type="primary" @click="onSubmit" >Envoyer</el-button>
        </router-link>

        <el-progress :text-inside="true" :stroke-width="26" :percentage="this.currentQuestion*10"></el-progress>
    </el-main>
</template>

<script>
import Question from "@/components/Question.vue";

export default {
  name: "Questionnaire",
  components: {
    Question
  },
  methods: {
    onSubmit: null,
    //Méthode pour retourner l'index de la question actuelle
    getQuestionIndex() {
        return this.currentQuestion;
    },
    //Méthode pour accéder à la question précédente
    questionPrev() {
        if (this.questions.length > this.currentQuestion) {
            this.currentQuestion--;
        }
    },
    //Méthode pour accéder à la question suivante
    questionNext() {
        if (this.questions.length > this.currentQuestion) {
            this.currentQuestion++;
        }
    }
  },
  data() {
    return {
        currentQuestion: 0,
        questions: [
            {
                libelle: "Why Vue JS ?",
                reponse: [
                    {
                        libelle: "Oui",
                        correct: false,
                        user: false
                    },
                    {
                        libelle: "Non",
                        correct: true,
                        user: false
                    }
                ]
            },
            {
                libelle: "What is Vue JS ?",
                reponse: [
                    {
                        libelle: "Je ne sais pas",
                        correct: false,
                        user: false
                    },
                    {
                        libelle: "Peut-être",
                        correct: true,
                        user: false
                    },
                    {
                        libelle: "Pourquoi pas ?",
                        correct: false,
                        user: false
                    }
                ]
            },
            {
                libelle: "Javascript ?",
                reponse: [
                    {
                        libelle: "Excellent !",
                        correct: false,
                        user: false
                    },
                    {
                        libelle: "Surtout pas",
                        correct: true,
                        user: false
                    }
                ]
            },
            {
                libelle: "Why Vue JS ?",
                reponse: [
                    {
                        libelle: "Oui",
                        correct: false,
                        user: false
                    },
                    {
                        libelle: "Non",
                        correct: true,
                        user: false
                    }
                ]
            },
            {
                libelle: "Why Vue JS ?",
                reponse: [
                    {
                        libelle: "Oui",
                        correct: false,
                        user: false
                    },
                    {
                        libelle: "Non",
                        correct: true,
                        user: false
                    }
                ]
            },
            {
                libelle: "Why Vue JS ?",
                reponse: [
                    {
                        libelle: "Oui",
                        correct: false,
                        user: false
                    },
                    {
                        libelle: "Non",
                        correct: true,
                        user: false
                    }
                ]
            },
            {
                libelle: "Why Vue JS ?",
                reponse: [
                    {
                        libelle: "Oui",
                        correct: false,
                        user: false
                    },
                    {
                        libelle: "Non",
                        correct: true,
                        user: false
                    }
                ]
            },
            {
                libelle: "Why Vue JS ?",
                reponse: [
                    {
                        libelle: "Oui",
                        correct: false,
                        user: false
                    },
                    {
                        libelle: "Non",
                        correct: true,
                        user: false
                    }
                ]
            },
            {
                libelle: "Why Vue JS ?",
                reponse: [
                    {
                        libelle: "Oui",
                        correct: false,
                        user: false
                    },
                    {
                        libelle: "Non",
                        correct: true,
                        user: false
                    }
                ]
            },
            {
                libelle: "Why Vue JS ?",
                reponse: [
                    {
                        libelle: "Oui",
                        correct: false,
                        user: false
                    },
                    {
                        libelle: "Non",
                        correct: true,
                        user: false
                    }
                ]
            },
        ]
    };
  }
};
</script>