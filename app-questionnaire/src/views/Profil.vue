<template>
    <el-row>
      <el-col :xs="20" :sm="20" :md="20" :lg="10" :xl="10">
        <div class="grid-content bg-purple">
            <el-form ref="form" :model="form" label-width="120px">
              <el-form-item label="Nom">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="Prénom">
                <el-input v-model="form.firstname"></el-input>
              </el-form-item>
              <el-form-item label="Société">
                <el-input v-model="form.society"></el-input>
              </el-form-item>
              <el-form-item>
                <router-link to="/questionnaire">
                  <el-button round style="margin-right: 2%;" type="primary" @click="onSubmit">Commencer le test</el-button>
                </router-link>
                <router-link to="/">
                  <el-button round>Annuler</el-button>
                </router-link>
              </el-form-item>
            </el-form>
        </div>
      </el-col>
    </el-row>
</template>

<script src="https://cdn.jsdelivr.net/npm/pouchdb@7.0.0/dist/pouchdb.min.js"></script>

<!-- <script>
 	var db = new PouchDB('dbname');

 	db.put({
 		_id: '1554886',
     name: this.name,
     firstname: this.firstname,
     society: this.society,
 		_rev: "1-989b8ec340554497de5326f1bc5b3826"
 	});

 	// db.put({
 	//   _id: 'mydoc',
 	//   title: 'Heroes'
 	// }).then(function (response) {
 	//   // handle response
 	// }).catch(function (err) {
 	//   console.log(err);
 	// });

  // db.changes().on('change', function() {
 	// 	console.log('Changes');
 	// });

	db.get('1554886').then(function (doc) {
 		console.log(doc)
 	}).catch(function (err) {
 	  console.log(err);
 	});

 	//db.replicate.to('http://127.0.0.1:5984/epsi');

</script>-->
<script>
  export default {
    methods: {
      onSubmit() {
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