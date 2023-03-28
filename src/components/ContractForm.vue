<template>
  <div>
    <v-banner color="#689F38" dark align="center" rounded="0" elevation="1">
      <h1 class="ma-3">Questions for <i>{{this.$store.state.userType}} {{this.$store.state.subjectId}}</i> for drafting contract <i>{{this.$store.state.contractId}}</i></h1>
    </v-banner>
    <v-container>
      <v-row class="mr-5 mb-5" justify="end">
        <div class="container py-3">

          <!--<div v-if="this.$store.state.finalContractReady">
            <p>Your contract has been evaluated and is now ready for download!</p>
            <p>See tab <i>print/download final contract</i> </p>
          </div>-->
          
          <p>{{this.UIMessage}}</p>

          <div v-if="(this.$store.state.userType != '' && !this.submit && !this.$store.state.finalContractReady)">
            <p>Please answer the following questions in order to come to a contract agreement.</p>

            <v-form>

              <div v-for="question in this.questions" v-bind:key="question.label">
                <div class="question-hybrid">
                  <v-label>{{ question.label }}</v-label>
                  <div v-for="option in question.options" v-bind:key="option">
                    <v-checkbox
                      v-model="question.values"
                      :label="(question.prefix ?? '') + option"
                      :value="option"
                      hide-details
                      class="mt-1"
                      ></v-checkbox>
                    <!-- <label>{{ question.prefix }}{{ option }}</label> -->
                  </div>
                  <div v-if="question.label != ''">
                    <v-label >Provide any additional information:</v-label>
                    <v-textarea
                      v-model="question.additionalInfo"
                      :class="question.input_class"
                      :rows="question.rows"
                      :name="question.name"
                      ></v-textarea>
                  </div>
                </div>
              </div>
              <div>
                <v-checkbox
                  label="I agree that my answers shall be subject to analysis for research purposes, and that all data will be stored and processed in accordance with the GDPR."
                  hide-details
                  class="mt-1"
                  ></v-checkbox>
              </div>
              <v-btn class="btn btn-primary" @click="submitForm()">Submit</v-btn>
            </v-form>
          </div>
        </div>
      </v-row>
      <v-row>
        <v-btn class="btn btn-primary" @click="checkForAdditionalQuestions()">Check for additional questions<br/><br/></v-btn>
      </v-row>
      <v-row v-for="questionAnswer in additionalQuestions">
        Question: {{ questionAnswer.text }}<br/><br/>
        <textarea name="additionalQuestion" v-model="questionAnswer.answer" rows="3"></textarea>
        <v-btn class="btn btn-primary" @click="answerAdditionalQuestion(questionAnswer)">answer question</v-btn>
        Let the legal expert know (e.g., via email) that you have answered this additional question.
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import '../assets/caic.css' ;

export default {
  name: "ContractorForm",

  components: {
  },

  data: () => ({
    socket: {},
    UIMessage: "",
    submit: false,
    questions: {},
    additionalQuestions: {},
  }),
  computed: {
    userType () {
      return this.$store.state.userType;
    },
    contractId () {
      return this.$store.state.contractId;
    },
    subjectId () {
      return this.$store.state.subjectId;
    },
    questionsFreelancer () {
      return this.$store.state.questionsFreelancer;
    },
    questionsClient () {
      return this.$store.state.questionsClient;
    },    
  },
  methods: {
      notifyServer (tag, data) {
        console.log(data)
        //let body = { sessionId: this.$store.state.sessionId, field: tag, value: data }
        //this.$store.state.socket.emit('update', body)
      },
      submitForm(){
        console.log('form sumbitted', "storing:");
        this.submit = true;
        this.UIMessage = "Form sumbitted! Wait for the legal expert to complete the contract or ask you any additional questions. Or if you are on the same computer, go back to overview in the top-menu and click the change button to legal expert. ";

        this.questions.contractID = this.$store.state.contractId;
        this.questions.SubjectID = this.$store.state.subjectId;
        this.questions.type = this.$store.state.userType;
        this.questions.linkedDataVersion = "";
        console.log(this.questions);
        axios.post(`http://caic.sensorlab.tno.nl:8082/submit`, this.questions, {
        headers: {
        'Content-Type': 'application/json'
        }})
          .then((response) => {
            this.UIMessage += "( data saved succesfully) ";
          })
          .catch((error) => {
            this.UIMessage = "There was an error: ", error.response;
          }
        );
      },
    checkForAdditionalQuestions() {
      axios.get(`http://caic.sensorlab.tno.nl:8082/check_for_additional_questions/${this.$store.state.contractId}`)
        .then((response) => {
          this.UIMessage += "( succesfully checked for additional question) ";
          console.log('additional question:');
          console.log(response.data);
          this.additionalQuestions = response.data;
          //this.additionalQuestions.type = 'answer';
        })
        .catch((error) => {
          this.UIMessage = "There was an error checking for additional question: ", error.response;
        }
      );
    },
    answerAdditionalQuestion (questionAnswer) {
      //TODO: send to backend + ask to client/freelancer in their webrowser (with updated UI via store via websocket)
      let answer = {};
      answer.type = 'answer';
      answer.contractID = questionAnswer.contractID;
      answer.text = questionAnswer.text;
      answer.answer = questionAnswer.answer;
      answer.provided_by = this.$store.state.userType;
      axios.post(`http://caic.sensorlab.tno.nl:8082/save_additional_question`, answer, {
      headers: {
      'Content-Type': 'application/json'
      }})
        .then((response) => {
          this.UIMessage += "Answer to additional question sent succesfully";
        })
        .catch((error) => {
          this.UIMessage = "There was an error sending answer to additional question: ", error.response;
        }
      );      
    },
  },

  mounted: function () {
    console.log('usertype:')
    console.log(this.$store.state.userType)
    if (this.$store.state.userType == "freelancer") {
      this.questions = this.$store.state.questionsFreelancer;
    } else {
      console.log('test')
      this.questions = this.$store.state.questionsClient;
      console.log(this.questions);
    }
    
  },
  beforeUpdate: function () {
    if (this.$store.state.userType == "freelancer") {
      this.$store.state.questionsFreelancer = this.questions;
    } else {
      console.log('test 2')
      this.$store.state.questionsClient = this.questions;
    }
  },
};
</script>

