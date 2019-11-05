<template>
    <el-row>
      <el-col :xs="20" :sm="20" :md="20" :lg="10" :xl="10">
        <div class="grid-content bg-purple">
            <el-form ref="form" :model="form" label-width="120px">
              <el-form-item label="Nom">
                <el-input v-model="form.name" required></el-input>
              </el-form-item>
              <el-form-item label="Prénom">
                <el-input v-model="form.firstname"></el-input>
              </el-form-item>
              <el-form-item label="Société">
                <el-input v-model="form.society"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button round style="margin-right: 2%;" type="primary" @click="onSubmit">Commencer le test</el-button>
                <router-link to="/">
                  <el-button round>Annuler</el-button>
                </router-link>
              </el-form-item>
            </el-form>
        </div>
      </el-col>
    </el-row>
</template>

<script>
import router from "../router";

  export default {
    methods: {
      onSubmit() {
        router.push({
          name: 'questionnaire',
          query: {
            name: this.form.name,
            firstname: this.form.firstname
          }
        }),
        this.$notify({
          title: 'Validé',
          message: 'Formulaire validé',
          type: 'success'
        });
      }
    },
    data() {
      return {
        form: {
          name: '',
          firstname: '',
          society: ''
        }
      }
    }
  }
</script>