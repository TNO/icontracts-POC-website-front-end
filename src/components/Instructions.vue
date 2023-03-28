<template>
  <!--<div v-if="this.$logged_in.value">-->
    <div v-if="this.$project.value">
      <v-banner color="#689F38" dark align="center" rounded="0" elevation="1">
        <h1 class="ma-3">Intelligent Contracts Experiment instructions</h1>
      </v-banner>
      <v-container class="#FAFAFA">
        <v-row class="text-center mt-6">
          <v-col class="mb-5" cols="12">
            
            <p>
              <br/>
              <div>
                <v-label>What is your name?</v-label>
                <v-text-field
                  v-model="$store.state.subjectId"
                  label="name"
                  required
                ></v-text-field>
              </div>            

              <div>
                <v-label>What is the name/number/identifier of the contract you will work on?</v-label>
                <v-text-field
                  v-model="$store.state.contractId"
                  label="contract"
                  required
                ></v-text-field>
              </div>

              <div v-if="$store.state.contractScope != 'Freelance Agreement'">
                <v-label>Select the scope of the contract:</v-label><br/> 
                <v-btn @click="$store.state.contractScope = 'Freelance Agreement'">
                  Freelance Agreement
                </v-btn>
              </div>
              <br/> 
              

              <h3>
                My name is <i>{{$store.state.subjectId}}</i>. <br/> 
                I am working on contract <i>{{$store.state.contractId}}</i>. <br/>
                With scope <i>{{$store.state.contractScope}}</i>. <br/> 
                I am a <i>{{$store.state.userType}}</i> <v-btn v-if="$store.state.userType != ''" @click="$store.state.userType = ''">Change</v-btn> 
              </h3>
              <div class=" mt-6" v-if="this.$store.state.userType == ''">
                <v-btn @click="setClientData()">client</v-btn>&nbsp;&nbsp;&nbsp;&nbsp;
                <v-btn @click="setFreelancerData()">freelancer</v-btn>&nbsp;&nbsp;&nbsp;&nbsp;
                <v-btn @click="setLegalExpertData()">legal expert</v-btn>
              </div>
              
              <p v-if="$store.state.userType != ''">You can now go to the contract drafting or evaluation page in the top menu</p>

              <br/>
            </p>
          </v-col>
        </v-row> 
      </v-container>
    </div>
    <div v-else>
      <h3 class="ma-3">please select a project in menu tab "overview"</h3>
    </div>
  </div>
  <!--<div v-else>
    <h3 class="ma-3">please login first in menu tab "overview"</h3>
  </div>-->
</template>

<script>
import '../assets/caic.css' ;
import axios from "axios";
export default {
  name: "Instructions",

  data: () => ({
    showOntology: false,
    showStartup: false,
    showExperiment: false,
    //contractId: '',
    //subjectId: '',
  }),
  created() {
  }, 
  computed: {
    StoreVariableCountFromBackend () {
      return this.$store.state.StoreVariableCountFromBackend
    },
    receivedMessage () {
      return this.$store.state.receivedMessage;
    },
    contractId () {
      return this.$store.state.contractId;
    },
    subjectId () {
      return this.$store.state.subjectId;
    },
    userType () {
      return this.$store.state.userType;
    },
  }, 
  methods: {
    toggleStartup(){
      this.showStartup = !this.showStartup;
    },
    notifyServer (tag, data) {
      //console.log(data)
      //let body = { sessionId: this.$store.state.sessionId, field: tag, value: data }
      //this.$store.state.socket.emit('update', body)
    }, 
    setUserType(userType) {
      this.$store.commit('storeUserType', userType)
    },
    setClientData(){
      this.setUserType('client');
      this.getQuestions('client');
    },
    setFreelancerData(){
      this.setUserType('freelancer');
      this.getQuestions('freelancer');
    },
    setLegalExpertData(){
      this.setUserType('legal_expert');
      this.getQuestions('legal_expert'); //get submitted data by freelancer and client
      this.getQuestions('legal_expert_template'); //also get empty template qustions to work with
    },
    getQuestions(userType) {
      //TODO: send contractID to backend - store in database / or save in backend with websocket sessionID

      //TODO: check if page contractID is already used
      axios.get(`http://caic.sensorlab.tno.nl:8082/${userType}_data/${this.$store.state.contractId}`)
        .then((response) => {
          if (userType != 'legal_expert') 
          {
            console.log('userType' + userType)
            if (userType == 'freelancer') {
              this.$store.commit('storeQuestionsFreelancer', response.data);
            } else if (userType == 'client') {
              this.$store.commit('storeQuestionsClient', response.data);  
            } else {
              console.log(userType);
              console.log('test');
              this.$store.commit('storeInitialQuestions', response.data);  
            }
          } else {
            //console.log('handle stored data from client and/or freelancer for use by legal expert: ');
            //console.log(response.data);
            response.data.forEach( (questionset) => {
              console.log(questionset.type);
              console.log(questionset);
              if (questionset.type == "client") {
                this.$store.commit('storeQuestionsClient', questionset);  
              }
              else if (questionset.type == "freelancer") {
                this.$store.commit('storeQuestionsFreelancer', questionset);
              } else {
                //console.log(questionset.type)
              }
          });
          }
            //this.$store.commit('sessionId', response.data.id)
            this.UIMessage = "";
        })
        .catch((error) => {
          this.UIMessage = "There was an error: ", error.response;
        }
      );
    },
  },
};
/*    let response = await fetch(
  RabbitMQClientHost + '/subscribe',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token, 
      host: host,
      topic: topic,
      message: messageContent
    })
  }
);
if (!response.ok) {
  throw new Error(await response.text());
} else {
  console.log('succesfull subscribe to topic: ' + topic + ' \n to hortivationhub.');
}*/
</script>

<style>
</style>
