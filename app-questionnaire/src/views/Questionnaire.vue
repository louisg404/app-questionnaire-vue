<template>
  <el-main>
    <h1 style="margin-bottom: 5%;">Bonjour {{firstname}} {{name}}</h1>
    <question :question="questions[getQuestionIndex()]"></question>

    <el-progress
      style="margin-top: 3%;"
      :text-inside="true"
      :stroke-width="26"
      :percentage="this.currentQuestion*10"
    ></el-progress>

    <el-button
      v-if="getQuestionIndex() != 0"
      style="margin-top: 1%; margin-right: 1%;"
      type="info"
      icon="el-icon-caret-left"
      @click="questionPrev"
      circle
    ></el-button>

    <el-button
      v-if="getQuestionIndex() != 9"
      style="margin-top: 1%;"
      type="info"
      icon="el-icon-caret-right"
      @click="questionNext"
      circle
    ></el-button>

    <el-button round style="margin-top: 1%; float: right;" type="primary" @click="onSubmit">Envoyer</el-button>
  </el-main>
</template>

<script>
import Question from "@/components/Question.vue";
import router from "../router";

export default {
  name: "questionnaire",
  components: {
    Question
  },
  methods: {
    onSubmit() {
      const questionsVraies = this.questions.map(currentQuestion => {
        return currentQuestion.reponse.map(currentReponse => {
          return currentQuestion.vraieReponse.find(currVraieReponse => {
            return (
              currVraieReponse.idReponse === currentReponse.id &&
              currVraieReponse.value === currentReponse.value
            );
          });
        });
      });
      let nbBonneReponse = 0;
      questionsVraies.forEach(question => {
        let isQuestionBonne = true;
        question.forEach(element => {
          if (element === undefined) {
            isQuestionBonne = false;
          }
        });
        if (isQuestionBonne) {
          nbBonneReponse++;
        }
      });
      console.log("Nombre de bonnes réponses : ", nbBonneReponse);
      router.push({
        name: "resultats",
        query: {
          nbBonneReponse: this.nbBonneReponse
        }
      });
    },
    //Méthode pour retourner l'index de la question actuelle
    getQuestionIndex() {
      return this.currentQuestion;
    },
    //Méthode pour accéder à la question précédente
    questionPrev() {
      if (0 < this.currentQuestion) {
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
      name: this.$route.query.name,
      firstname: this.$route.query.firstname,
      nbBonneReponse: this.$route.query.nbBonneReponse,
      questions: [
        {
          libelle: "Combien de pattes a un canard ?",
          reponse: [
            { id: 1, libelle: "2", value: false },
            { id: 2, libelle: "6", value: false }
          ],
          vraieReponse: [
            { idReponse: 1, value: true },
            { idReponse: 2, value: false }
          ]
        },
        {
          libelle: "Combien de tête(s) a un lion ?",
          reponse: [
            { id: 1, libelle: "24", value: false },
            { id: 2, libelle: "1", value: false }
          ],
          vraieReponse: [
            { idReponse: 1, value: false },
            { idReponse: 2, value: true }
          ]
        },
        {
          libelle: "La population du Rwanda ?",
          reponse: [
            { id: 1, libelle: "12,21 millions", value: false },
            { id: 2, libelle: "11,21 millions", value: false }
          ],
          vraieReponse: [
            { idReponse: 1, value: true },
            { idReponse: 2, value: false }
          ]
        },
        {
          libelle: "La couleur du cheval blanc d'Henri IV ?",
          reponse: [
            { id: 1, libelle: "Noir", value: false },
            { id: 2, libelle: "Rose", value: false },
            { id: 3, libelle: "Blanc", value: false }
          ],
          vraieReponse: [
            { idReponse: 1, value: false },
            { idReponse: 2, value: false },
            { idReponse: 3, value: true }
          ]
        },
        {
          libelle: "N'golo, n'golo...",
          reponse: [
            { id: 1, libelle: "...Kanté", value: false },
            { id: 2, libelle: "...Benzema", value: false }
          ],
          vraieReponse: [
            { idReponse: 1, value: true },
            { idReponse: 2, value: false }
          ]
        },
        {
          libelle: "Second, poteau...",
          reponse: [
            { id: 1, libelle: "...Valère Germain", value: false },
            { id: 2, libelle: "...Pavard", value: false }
          ],
          vraieReponse: [
            { idReponse: 1, value: false },
            { idReponse: 2, value: true }
          ]
        },
        {
          libelle: "Le meilleur joueur actuel ?",
          reponse: [
            { id: 1, libelle: "Lionel Messi", value: false },
            { id: 2, libelle: "Cristiano Ronaldo", value: false }
          ],
          vraieReponse: [
            { idReponse: 1, value: true },
            { idReponse: 2, value: false }
          ]
        },
        {
          libelle: "Meilleure promotion de l'EPSI ?",
          reponse: [
            { id: 1, libelle: "B1", value: false },
            { id: 2, libelle: "B2", value: false },
            { id: 3, libelle: "B3", value: false },
            { id: 4, libelle: "I4", value: false },
            { id: 5, libelle: "I5", value: false }
          ],
          vraieReponse: [
            { idReponse: 1, value: false },
            { idReponse: 2, value: false },
            { idReponse: 3, value: true },
            { idReponse: 4, value: false },
            { idReponse: 5, value: false }
          ]
        },
        {
          libelle: "Meilleur langage ?",
          reponse: [
            { id: 1, libelle: "Java", value: false },
            { id: 2, libelle: "PHP", value: false }
          ],
          vraieReponse: [
            { idReponse: 1, value: false },
            { idReponse: 2, value: true }
          ]
        },
        {
          libelle: "Meilleur club actuel ?",
          reponse: [
            { id: 1, libelle: "Atletico de Madrid", value: false },
            { id: 2, libelle: "Paris Saint-Germain", value: false }
          ],
          vraieReponse: [
            { idReponse: 1, value: true },
            { idReponse: 2, value: false }
          ]
        }
      ]
    };
  }
};
</script>