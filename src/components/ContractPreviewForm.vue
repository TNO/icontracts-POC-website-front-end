<template>
  <div>
    <v-banner color="#689F38" dark align="center" rounded="0" elevation="1">
      <h1 class="ma-3">Final contract <i>{{this.$store.state.contractId}}</i></h1>
    </v-banner>
    <v-container>
      <v-row class="mr-5 mb-5" justify="end">
        <div class="container py-3">

          <!--p>TODO: At start of experiment session: record time!</p -->

          <div v-if="this.$store.state.finalContractReady">
            <p>Your contract has been evaluated and is now ready</p>
          </div><!-- for download!</p>
            <v-btn class="btn btn-primary" @click="generatePDF()">Download contract</v-btn>
          </div>

          <h2>PDF Preview in HTML (TODO):</h2>

          <h2><a @click="showRiskModel = !showRiskModel">Show contract data structure (TODO):</a></h2>
          -->

          <h2>Contract Text:</h2>
          <div>
            <br><span style="white-space: pre-line;" width="100%">  
            {{ $store.state.initialQuestions.contractText }}
          </span></div>
          <br>
          <h2>Linked Data version:</h2>
          <div>
            <br><span style="white-space: pre-line;" width="100%">  
            {{ $store.state.initialQuestions.linkedDataVersion }}
          </span></div>

          <br>
          <h2>All contract data in JSON:</h2>

          <vue-json-pretty :data="$store.state.initialQuestions" />
          
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import '../assets/caic.css' ;
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

export default {
  name: "ContractPreviewForm",
  components: {
    VueJsonPretty
  },
  data: () => ({
    UIMessage: "",
    showRiskModel: false,
  }),
  computed: {
    initalQuestions () {
      return this.$store.state.initialQuestions;
    },
    userType () {
      return this.$store.state.userType;
    },
    contractId () {
      return this.$store.state.contractId;
    },
    subjectId () {
      return this.$store.state.subjectId;
    },
  },

  methods: {
    generatePDF(){
      console.log('generate PDF button is clicked');
      this.submit = true;
      this.UIMessage = "Download the generated contract here <TODO>.";
    },
  },

  mounted: function () {
      //this.$store.state.socket.on('update', this.newAnswer)
  },
};
</script>

<style>
.container {
  
}
</style>
