<template>
  <div>
    <v-banner color="#689F38" dark align="center" rounded="0" elevation="1">
      <h1 class="ma-3">Evaluation of contract <i>{{this.$store.state.contractId}}</i> by Legal expert <i>{{this.$store.state.subjectId}}</i></h1>
    </v-banner>
    <v-container>
          <center><i>Please evaluate the following answers + questions to identify contract variables and risks. </i><br/> </center>
          <br/> 

      <v-row justify="end">
        <!--<div class="container py-3">-->
          <v-col cols="6">
                <h4>Question: {{ this.$store.state.initialQuestions.milestones.label }} ([MILESTONES])</h4> 
                <div v-if="this.$store.state.questionsFreelancer.milestones != undefined">
                  Freelancer: {{this.$store.state.questionsFreelancer.milestones.values}} 
                  <a @click="$store.state.initialQuestions.milestones.variables = $store.state.questionsFreelancer.milestones.values">(copy to contract)</a> 
                  <v-label v-if="this.$store.state.questionsFreelancer.milestones.additionalInfo"><br/>Additional information provided:</v-label> {{this.$store.state.questionsFreelancer.milestones.additionalInfo}}<br/>
                </div>
                <div v-if="this.$store.state.questionsClient.milestones != undefined">
                  Client: {{this.$store.state.questionsClient.milestones.values}} 
                  <a @click="$store.state.initialQuestions.milestones.variables = $store.state.questionsClient.milestones.values">(copy to contract)</a>             
                  <v-label v-if="this.$store.state.questionsClient.milestones.additionalInfo"><br/>      Additional information provided:</v-label> {{this.$store.state.questionsClient.milestones.additionalInfo}}
                </div>
                <div>
                  <b>Contract input:</b>
                  <input type="text" name="milestonesVariable" v-model="$store.state.initialQuestions.milestones.variables">
                </div>
                <br>
              
                
                <h4>Question: {{ this.$store.state.initialQuestions.payment_schedule.label }} ([DEADLINES])</h4> 
                <div v-if="this.$store.state.questionsFreelancer.payment_schedule != undefined">
                  Freelancer: {{this.$store.state.questionsFreelancer.payment_schedule.values}} 
                  <a @click="$store.state.initialQuestions.payment_schedule.variables = $store.state.questionsFreelancer.payment_schedule.values">(copy to contract)</a> 
                  <v-label v-if="this.$store.state.questionsFreelancer.payment_schedule.additionalInfo"><br/>Additional information provided:</v-label> {{this.$store.state.questionsFreelancer.payment_schedule.additionalInfo}}<br/>
                </div>
                <div v-if="this.$store.state.questionsClient.payment_schedule != undefined">
                  Client: {{this.$store.state.questionsClient.payment_schedule.values}} 
                  <a @click="$store.state.initialQuestions.payment_schedule.variables = $store.state.questionsClient.payment_schedule.values">(copy to contract)</a>                   
                  <v-label v-if="this.$store.state.questionsClient.payment_schedule.additionalInfo"><br/>Additional information provided:</v-label> {{this.$store.state.questionsClient.payment_schedule.additionalInfo}}
                </div>
                <div>
                  <b>Contract input:</b>
                  <input type="text" name="payment_scheduleVariable" v-model="$store.state.initialQuestions.payment_schedule.variables">
                </div>       
                <br>
                              

                <h4>Question: {{ this.$store.state.initialQuestions.price.label }} ([amount])</h4> 
                <div v-if="this.$store.state.questionsFreelancer.price != undefined">
                  <i>(Question for freelancer: {{ this.$store.state.questionsFreelancer.price.label }})</i><br>
                  Freelancer: {{this.$store.state.questionsFreelancer.price.values}} 
                  <a @click="$store.state.initialQuestions.price.variables = $store.state.questionsFreelancer.price.values">(copy to contract)</a> 
                  <v-label v-if="this.$store.state.questionsFreelancer.price.additionalInfo"><br/>Additional information provided:</v-label> {{this.$store.state.questionsFreelancer.price.additionalInfo}}<br/>
                </div>
                <div v-if="this.$store.state.questionsClient.price != undefined">
                  Client: {{this.$store.state.questionsClient.price.values}} 
                  <a @click="$store.state.initialQuestions.price.variables = $store.state.questionsClient.price.values">(copy to contract)</a>                  
                  <v-label v-if="this.$store.state.questionsClient.price.additionalInfo"><br/> Additional information provided:</v-label> {{this.$store.state.questionsClient.price.additionalInfo}}
                </div>
                <div>
                  <b>Contract input:</b>
                  <input type="text" name="priceVariable" v-model="$store.state.initialQuestions.price.variables">
                </div> 
                <br>
                
                <h4>Question: {{ this.$store.state.initialQuestions.payment_method.label }} ([X])</h4> 
                
                <div v-if="this.$store.state.questionsFreelancer.payment_method != undefined">
                  Freelancer:  {{this.$store.state.questionsFreelancer.payment_method.values}} 
                  <a @click="$store.state.initialQuestions.payment_method.variables = $store.state.questionsFreelancer.payment_method.values">(copy to contract)</a> 
                  <v-label v-if="this.$store.state.questionsFreelancer.payment_method.additionalInfo"><br/>Additional information provided:</v-label> {{this.$store.state.questionsFreelancer.payment_method.additionalInfo}}<br/>
                </div>
                <div v-if="this.$store.state.questionsClient.payment_method != undefined">
                  Client:  {{this.$store.state.questionsClient.payment_method.values}} 
                  <a @click="$store.state.initialQuestions.payment_method.variables = $store.state.questionsClient.payment_method.values">(copy to contract)</a>                 
                  <v-label v-if="this.$store.state.questionsClient.payment_method.additionalInfo"><br/>  Additional information provided:</v-label> {{this.$store.state.questionsClient.payment_method.additionalInfo}}
                </div>
                <div>
                  <b>Contract input:</b>
                  <input type="text" name="payment_methodVariable" v-model="$store.state.initialQuestions.payment_method.variables">
                </div>
                

            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="5">
              <h2>contract text</h2>
              <!--<v-btn class="btn btn-primary" @click="editCustomTemplateContractText = false" v-if="editCustomTemplateContractText">
                Show contract text
              </v-btn>
              <v-btn class="btn btn-primary" @click="editCustomTemplateContractText = true" v-if="!editCustomTemplateContractText">
                Change contract template text
              </v-btn>          -->
              <div v-if="!editCustomTemplateContractText" >
                <br><span style="white-space: pre-line;" width="100%">  
                {{ contractText }}
              </span></div>
              <!--<v-textarea v-if="!editCustomTemplateContractText"
              rows="30"
              name="input-7-1"
              hint="Hint text"
              v-model=contractText
              readonly
              class="input-disabled"
              ></v-textarea> 
              <v-textarea v-if="editCustomTemplateContractText"
              rows="30"
              name="input-7-1"
              label="edit contract text"
              hint="Hint text"
              v-model=customTemplateContractText
              ></v-textarea>               
              <v-btn class="btn btn-primary" @click="contractText = customTemplateContractText = defaultTemplateContractText">
                Reset to original template
              </v-btn>-->
            </v-col>
          </v-row>
          <v-row>
          <br/>
        <v-col cols="12" >
          <center><h4>After evaluating the risks below and possbily asking additional questions, you can finalize the contract:</h4><br>
          <v-btn class="btn btn-primary"  style="color:blue" @click="submitForm()">FINALIZE CONTRACT</v-btn><br>
          <br><p v-if="this.UIMessage">Status message: {{this.UIMessage}}</p></center>
        </v-col>
        <!--</div>-->
        </v-row>
        <hr>        
        <v-row>

          <v-col cols="5">
          <p><h1>Additional questions:</h1></p>
          Ask additional question to freelancer and contractor:<br>
          <textarea name="additionalQuestion" v-model="additionalQuestion.text" rows="3"></textarea>
          <v-btn class="btn btn-primary" @click="askAdditionalQuestion()">ask question</v-btn><br/>
          <div v-for="question in additionalQuestionAsked">
            Question asked: {{ question.text }}<br>
          </div>
          <div v-if="this.askingAdditionalQuestion">Let the client and freelancer know (e.g., via email) that they have to answer this additional question.</div>
          
          <h3>Additional answers:</h3>
          <div v-for="answer in additionalQuestionAnswers">
            Question: {{ answer.text }}<br>
            Answer ({{ answer.provided_by }}): {{ answer.answer }}
          </div>
          <v-btn class="btn btn-primary" @click="checkForAnswersAdditionalQuestionsAnswers()">Check for more answers</v-btn><br/>
        </v-col>
        <v-col cols="2"></v-col>
        <v-col cols="5">
          <p><h1>RISKS:</h1></p>
          <ul>
            <li v-for="risk in risks">
              <!--<b>Name</b>: {{risk.name}},-->
              <b>Event</b>: {{risk.event}}, 
              <label v-for="cause in risk.cause">
                [<b>cause</b>: {{cause.name}}, <b>proactive control</b>: {{cause.proactiveControl}}]
              </label>
              <label v-for="consequence in risk.consequence">
                [<b>consequence</b>: {{consequence.name}}, <b>proactive control</b>: {{consequence.reactiveControl}}]
              </label>
              <label v-if="risk.source">source: {{risk.source}},</label>
              <label v-if="risk.impact"> impact: {{risk.impact}},</label>
              <label v-if="risk.probability">probability: {{risk.probability}},</label>
              <label v-if="risk.levelOfRisk">level of Risk: {{risk.levelOfRisk}},</label>
              <label v-if="risk.affected">affected party: {{risk.affected}}</label>
            </li>
          </ul>
          <h3>Add additional risks:</h3>
          name: <input type="text" name="milestonesVariable" v-model="addRisk.name" />
          event: <input type="text" name="milestonesVariable" v-model="addRisk.event" />
          name of cause: <input type="text" name="milestonesVariable" v-model="addRisk.cause[0].name" />
          proactive control for cause: <input type="text" name="milestonesVariable" v-model="addRisk.cause[0].proactiveControl" />
          name of consequence: <input type="text" name="milestonesVariable" v-model="addRisk.consequence[0].name" />
          reactive control for consequence: <input type="text" name="milestonesVariable" v-model="addRisk.consequence[0].reactiveControl" />
          source: <input type="text" name="milestonesVariable" v-model="addRisk.source" />
          impact: <input type="text" name="milestonesVariable" v-model="addRisk.impact" />
          probability: <input type="text" name="milestonesVariable" v-model="addRisk.probability" />
          Level of Risk: <input type="text" name="milestonesVariable" v-model="addRisk.levelOfRisk" />
          Affected party ('client', 'freelancer', or 'both'): <input type="text" name="milestonesVariable" v-model="addRisk.affected" />
          <v-btn class="btn btn-primary" @click="addNewRisk()">Add risk</v-btn><br/>
          </v-col>    
        </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import '../assets/caic.css' ;
export default {
  name: "LegalForm",

  components: {
    
  },

  data: () => ({
    UIMessage: "",
    submit: false,
    askingAdditionalQuestion: false,
    additionalQuestion: {},
    additionalQuestionAsked: {},
    additionalQuestionAnswers: {},
    contractText: "", //contract text as shown to user
    defaultTemplateContractText: "", //default contract text in template
    customTemplateContractText: "", //custom/edited contract text in template
    editCustomTemplateContractText: "", //flag to edit custom contract text in template
    risks: [
    {
      name: "budget",
      event: "no payment",
      cause: [{name: "lack of budget", proactiveControl: "budget screenshot",}],
      consequence: [{name: "less work, less money", reactiveControl: "stop services",}],
      source: "",
      impact: "",
      probability: "",
      levelOfRisk: "",
      affected: "both",
    },
    {
      name: "payment",
      event: "no payment",
      cause: [{name: "payment default", proactiveControl: "payment plan",}],
      consequence: [{name: "", reactiveControl: "pause services",}],
      source: "",
      impact: "",
      probability: "",
      levelOfRisk: "",
      affected: "freelancer",
    },  
    {
      name: "quality",
      event: "no payment",
      cause: [{name: "quality objection", proactiveControl: "quality control check",}],
      consequence: [{name: "", reactiveControl: "pause services",}],
      source: "",
      impact: "",
      probability: "",
      levelOfRisk: "",
      affected: "both",
    }, 
    {
      name: "deadline",
      event: "no payment",
      cause: [{name: "lack of deadline", proactiveControl: "timeline",}],
      consequence: [{name: "", reactiveControl: "pause services",}],
      source: "",
      impact: "",
      probability: "",
      levelOfRisk: "",
      affected: "freelancer",
    }, 
    {
      name: "delivery delay",
      event: "exceeded deadline",
      cause: [{name: "delayed delivery", proactiveControl: "consistent contract",}],
      consequence: [{name: "distribution of costs", reactiveControl: "increase contact after delay for limited time",},
      {name: "seller reduced payment", reactiveControl: "seller fine due to responsibility",}],
      source: "",
      impact: "",
      probability: "",
      levelOfRisk: "",
      affected: "client",
    }, 
    {
      name: "information delay",
      event: "exceeded deadline",
      cause: [{name: "delayed information provision", proactiveControl: "strict deadline",}],
      consequence: [{name: "distribution of costs", reactiveControl: "set mitigation deadlines",},
      {name: "buyer higher costs", reactiveControl: "buyer fine due to responsibility",}],
      source: "",
      impact: "",
      probability: "",
      levelOfRisk: "",
      affected: "freelancer",
    }, 
    {
      name: "false information",
      event: "exceeded deadline",
      cause: [{name: "false information provision", proactiveControl: "quality control",}],
      consequence: [{name: "distribution of costs", reactiveControl: "extend deadline bilaterally",},
      {name: "buyer higher costs", reactiveControl: "buyer fine due to responsibility",}],
      source: "",
      impact: "",
      probability: "",
      levelOfRisk: "",
      affected: "freelancer",
    },
    {
      name: "force majeure",
      event: "exceeded deadline",
      cause: [{name: "force majeure interuption", proactiveControl: "",}],
      consequence: [{name: "distribution of costs", reactiveControl: "extend deadline bilaterally",}],
      source: "",
      impact: "",
      probability: "",
      levelOfRisk: "",
      affected: "client",
    },          
    ],
    addRisk: {
      name: "",
      event: "",
      cause: [{name: "", proactiveControl: "",}],
      consequence: [{name: "", reactiveControl: "",}],
      source: "",
      impact: "",
      probability: "",
      levelOfRisk: "",
      affected: "",
    },
  }),
  computed: {
    StoreVariableCountFromBackend () {
      return this.$store.state.StoreVariableCountFromBackend;
    },
    receivedMessage () {
      return this.$store.state.receivedMessage;
    },
    initalQuestions () {
      //this.localInitialQuestions = this.$store.state.initialQuestions;
      return this.$store.state.initialQuestions;
    },
    questionsFreelancer () {
      return this.$store.state.questionsFreelancer;
    },
    questionsClient () {
      return this.$store.state.questionsClient;
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
    contractScope () {
      return this.$store.state.contractScope;
    },
  },

  methods: {
    addNewRisk() {
      console.log('test')
      console.log(this.risks)
      console.log(this.addRisk)
      this.risks.push(this.addRisk);
    },
    newAnswer(data) {
      console.log(data)
    },
    askAdditionalQuestion() {
      //TODO: send to backend + ask to client/freelancer in their webrowser (with updated UI via store via websocket)
      this.askingAdditionalQuestion = true;
      this.additionalQuestion.contractID = this.$store.state.contractId;
      this.additionalQuestion.type = 'query';
      axios.post(`http://caic.sensorlab.tno.nl:8082/save_additional_question`, this.additionalQuestion, {
      headers: {
      'Content-Type': 'application/json'
      }})
        .then((response) => {
          this.UIMessage = " additional question sent succesfully ";
        })
        .catch((error) => {
          this.UIMessage = "There was an error asking an additional question: ", error.response;
        }
      );
      this.checkForAdditionalQuestions();
    },
    checkForAnswersAdditionalQuestionsAnswers() {
      axios.get(`http://caic.sensorlab.tno.nl:8082/check_for_additional_question_answers/${this.$store.state.contractId}`)
        .then((response) => {
          this.UIMessage = " succesfully checked for answers to additional question ";
          this.additionalQuestionAnswers = response.data;
        })
        .catch((error) => {
          this.UIMessage = "There was an error checking for answers to additional question: ", error.response;
        }
      );
    },
    checkForAdditionalQuestions() {
      axios.get(`http://caic.sensorlab.tno.nl:8082/check_for_additional_questions/${this.$store.state.contractId}`)
        .then((response) => {
          this.UIMessage = "succesfully checked for additional question ";
          this.additionalQuestionAsked = response.data;
        })
        .catch((error) => {
          this.UIMessage = "There was an error checking for additional question: ", error.response;
        }
      );
    },    
    showRiskModel(question) {
      question.showRiskModel = !question.showRiskModel;
    },
    submitForm(){
      this.submit = true;
      this.UIMessage = "Contract finalized and stored! See tab final contract data.";
      this.$store.commit('setFinalContractReady');
      console.log('form sumbitted', "storing:");
      this.submit = true;

      this.$store.state.initialQuestions.contractID = this.$store.state.contractId;
      this.$store.state.initialQuestions.SubjectID = this.$store.state.subjectId;
      this.$store.state.initialQuestions.type = this.$store.state.userType;
      this.$store.state.initialQuestions.contractText = this.contractText;
      this.$store.state.initialQuestions.additionalQuestionAsked = this.additionalQuestionAsked;
      this.$store.state.initialQuestions.additionalQuestionAnswers = this.additionalQuestionAnswers;
      this.$store.state.initialQuestions.risks = this.risks;
      this.$store.state.initialQuestions.linkedDataVersion = this.generateLinkedDataVersion();

      this.$store.state.initialQuestions.milestones.clientValues = this.$store.state.questionsClient.milestones.values;
      this.$store.state.initialQuestions.milestones.freelancerValues = this.$store.state.questionsFreelancer.milestones.values;
      this.$store.state.initialQuestions.payment_method.clientValues = this.$store.state.questionsClient.payment_method.values;
      this.$store.state.initialQuestions.payment_method.freelancerValues = this.$store.state.questionsFreelancer.payment_method.values;
      this.$store.state.initialQuestions.payment_schedule.clientValues = this.$store.state.questionsClient.payment_schedule.values;
      this.$store.state.initialQuestions.payment_schedule.freelancerValues = this.$store.state.questionsFreelancer.payment_schedule.values;
      this.$store.state.initialQuestions.price.clientValues = this.$store.state.questionsClient.price.values;
      this.$store.state.initialQuestions.price.freelancerValues = this.$store.state.questionsFreelancer.price.values;
      console.log(this.$store.state.initialQuestions);
      axios.post(`http://caic.sensorlab.tno.nl:8082/submit`, this.$store.state.initialQuestions, {
      headers: {
      'Content-Type': 'application/json'
      }})
        .then((response) => {
          this.UIMessage = "( data saved succesfully) ";
        })
        .catch((error) => {
          this.UIMessage = "There was an error: ", error.response;
        }
      );
    },
    generateLinkedDataVersion() {

      //TODO: include prefixes

      //contract and relationship with its sections, optionally we can create also links with all the paragraph and variables. 
      let LD = `
      @prefix dc: <http://purl.org/dc/elements/1.1/> .
      @prefix owl: <http://www.w3.org/2002/07/owl#> .
      @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
      @prefix xml: <http://www.w3.org/XML/1998/namespace> .
      @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
      @prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
      @prefix dcterms: <http://purl.org/dc/terms/> .
      @prefix onassis: <http://ontology.tno.nl/onassis#> .
      @prefix risk: <http://ontology.tno.nl/onassis/RiskManagement#> .
      @prefix ex: <http://ontology.tno.nl/onassis/data#> .

      ex:890 rdf:type onassis:Contract . 
      ex:890 onassis:contractID “`+this.$store.state.contractID+`"^^rdfs:Literal .             

      ex:890 onassis:involvesScope ex:5678 . 
      ex:5678 rdf:type onassis:Scope . 
      ex:5678 onassis:NaturalLanguageExpression “`+this.$store.state.contractScope+`"^^rdfs:Literal .

      ex:890 onassis:AgreementInContract ex:56789 . 
      ex:56789 rdf:type onassis:Agreement . 

      #connect contract to sections paragraphs and variables
      ex:890 onassis:isRelatedTo ex:9000 .
      ex:890 onassis:isRelatedTo ex:9001 .
      ex:890 onassis:isRelatedTo ex:9002 .
      ex:890 onassis:isRelatedTo ex:9003 .
      
      ex:123 rdf:type onassis:Signature .
      ex:123 onassis:signatureOnContract ex:890 .

      ex:1 rdf:type onassis:Contractor . 
      ex:1 foaf:name “`+this.$store.state.questionsClient.SubjectID+`"^^rdfs:Literal .
      ex:1 onassis:NaturalLanguageExpression “client"^^rdfs:Literal .
      ex:56789 onassis:involvesParties ex:1 . 
      ex:1 onassis:selectsScope ex:5678 .
      ex:123 onassis:signatureBelongingTo ex:1
      

      ex:2 rdf:type onassis:Contractor . 
      ex:2 foaf:name “`+this.$store.state.questionsFreelancer.SubjectID+`"^^rdfs:Literal .
      ex:2 onassis:NaturalLanguageExpression “freelancer"^^rdfs:Literal .
      ex:56789 onassis:involvesParties ex:2 . 
      ex:1 onassis:selectsScope ex:5678 .
      ex:123 signatureBelongingTo ex:2

      ex:3 rdf:type onassis:LegalExpert . 
      ex:3 foaf:name “`+this.$store.state.subjectId+`"^^rdfs:Literal .
      ex:56789 onassis:involvesParties ex:3 . 
      #defines contract
      ex:3 onassis:defines ex:890 .
      #defines scope
      ex:3 onassis:defines ex:5678 .        

      `;
      
      //variables
      LD += `
      ex:14 onassis:hasVariableExpression ex:141 .
      ex:141 rdf:type onassis:VariableExpression . 
      ex:141 onassis:NaturalLanguageExpression “`+this.$store.state.initialQuestions.milestones.variables+`"^^rdfs:Literal . 
      
      ex:15 onassis:hasVariableExpression ex:151 .
      ex:151 rdf:type onassis:VariableExpression . 
      ex:151 onassis:NaturalLanguageExpression “`+this.$store.state.initialQuestions.payment_schedule.variables+`"^^rdfs:Literal .       

      ex:16 onassis:hasVariableExpression ex:161 .
      ex:161 rdf:type onassis:VariableExpression . 
      ex:161 onassis:NaturalLanguageExpression “`+this.$store.state.initialQuestions.price.variables+`"^^rdfs:Literal .       

      ex:17 onassis:hasVariableExpression ex:171 .
      ex:171 rdf:type onassis:VariableExpression . 
      ex:171 onassis:NaturalLanguageExpression “`+this.$store.state.initialQuestions.payment_method.variables+`"^^rdfs:Literal .       

      `;
      
      //questions and answers
      LD += `
      #milestones question + answer
      ex:140 rdf:type onassis:Question .
      ex:140 onassis:NaturalLanguageExpression “`+this.$store.state.initialQuestions.milestones.label+`"^^rdfs:Literal .
      ex:1 onassis:replies ex:140 .
      ex:2 onassis:replies ex:140 .
      ex:3 onassis:writes ex:140 .
      ex:56789 onassis:agreementInvolvedIn ex:140 .     
      ex:140 onassis:hasAnswer ex:142 .
      ex:140 onassis:hasAnswer ex:143 .

      ex:142 rdf:type onassis:Answer .
      ex:56789 onassis:agreementInvolvedIn ex:142 . 
      ex:142 onassis:answerContainedIn ex:141
      ex:142 onassis:answerProvidedBy ex:1
      ex:142 onassis:NaturalLanguageExpression “`+this.$store.state.questionsClient.milestones.values+`"^^rdfs:Literal .

      ex:143 rdf:type onassis:Answer .
      ex:56789 onassis:agreementInvolvedIn ex:143 . 
      ex:143 onassis:answerContainedIn ex:141
      ex:143 onassis:answerProvidedBy ex:2
      ex:143 onassis:NaturalLanguageExpression “`+this.$store.state.questionsFreelancer.milestones.values+`"^^rdfs:Literal .

      #deadlines(payment_schedule) question + answer
      ex:150 rdf:type onassis:Question .
      ex:150 onassis:NaturalLanguageExpression “`+this.$store.state.initialQuestions.payment_schedule.label+`"^^rdfs:Literal .
      ex:1 onassis:replies ex:150 .
      ex:2 onassis:replies ex:150 .
      ex:3 onassis:writes ex:150 .
      ex:56789 onassis:agreementInvolvedIn ex:150 .     
      ex:150 onassis:hasAnswer ex:152 .
      ex:150 onassis:hasAnswer ex:153 .

      ex:152 rdf:type onassis:Answer .
      ex:56789 onassis:agreementInvolvedIn ex:152 . 
      ex:152 onassis:answerContainedIn ex:151
      ex:152 onassis:answerProvidedBy ex:1
      ex:152 onassis:NaturalLanguageExpression “`+this.$store.state.questionsClient.payment_schedule.values+`"^^rdfs:Literal .

      ex:153 rdf:type onassis:Answer .
      ex:56789 onassis:agreementInvolvedIn ex:153 . 
      ex:153 onassis:answerContainedIn ex:151
      ex:153 onassis:answerProvidedBy ex:2
      ex:153 onassis:NaturalLanguageExpression “`+this.$store.state.questionsFreelancer.payment_schedule.values+`"^^rdfs:Literal .

      #amount(price) question + answer
      ex:160 rdf:type onassis:Question .
      ex:160 onassis:NaturalLanguageExpression “`+this.$store.state.initialQuestions.price.label+`"^^rdfs:Literal .
      ex:1 onassis:replies ex:160 .
      ex:2 onassis:replies ex:160 .
      ex:3 onassis:writes ex:160 .
      ex:56789 onassis:agreementInvolvedIn ex:160 .     
      ex:160 onassis:hasAnswer ex:162 .
      ex:160 onassis:hasAnswer ex:163 .

      ex:162 rdf:type onassis:Answer .
      ex:56789 onassis:agreementInvolvedIn ex:162 . 
      ex:162 onassis:answerContainedIn ex:161
      ex:162 onassis:answerProvidedBy ex:1
      ex:162 onassis:NaturalLanguageExpression “`+this.$store.state.questionsClient.price.values+`"^^rdfs:Literal .

      ex:163 rdf:type onassis:Answer .
      ex:56789 onassis:agreementInvolvedIn ex:163 . 
      ex:163 onassis:answerContainedIn ex:161
      ex:163 onassis:answerProvidedBy ex:2
      ex:163 onassis:NaturalLanguageExpression “`+this.$store.state.questionsFreelancer.price.values+`"^^rdfs:Literal .

      #x(payment_method) question + answer
      ex:170 rdf:type onassis:Question .
      ex:170 onassis:NaturalLanguageExpression “`+this.$store.state.initialQuestions.payment_method.label+`"^^rdfs:Literal .
      ex:1 onassis:replies ex:170 .
      ex:2 onassis:replies ex:170 .
      ex:3 onassis:writes ex:170 .
      ex:56789 onassis:agreementInvolvedIn ex:170 .     
      ex:170 onassis:hasAnswer ex:172 .
      ex:170 onassis:hasAnswer ex:173 .

      ex:172 rdf:type onassis:Answer .
      ex:56789 onassis:agreementInvolvedIn ex:172 . 
      ex:172 onassis:answerContainedIn ex:171
      ex:172 onassis:answerProvidedBy ex:1
      ex:172 onassis:NaturalLanguageExpression “`+this.$store.state.questionsClient.payment_method.values+`"^^rdfs:Literal .

      ex:173 rdf:type onassis:Answer .
      ex:56789 onassis:agreementInvolvedIn ex:173 . 
      ex:173 onassis:answerContainedIn ex:171
      ex:173 onassis:answerProvidedBy ex:2
      ex:173 onassis:NaturalLanguageExpression “`+this.$store.state.questionsFreelancer.payment_method.values+`"^^rdfs:Literal .

      `;
      
      //extra questions + answers
     let i = 1800;
      this.additionalQuestionAnswers.forEach( (answer) => {
        LD += `

        #additional question + answer
        ex:`+i+` rdf:type onassis:Question .
        ex:`+i+` onassis:NaturalLanguageExpression “`+answer.text+`"^^rdfs:Literal .
        ex:2 onassis:replies ex:`+i+` .
        ex:3 onassis:writes ex:`+i+` .
        ex:56789 onassis:agreementInvolvedIn ex:`+i+` .     
        ex:`+i+` onassis:hasAnswer ex:`+(i+1)+` .

        ex:`+(i+1)+` rdf:type onassis:Answer .
        ex:56789 onassis:agreementInvolvedIn ex:`+(i+1)+` . 
        ex:`+(i+1)+` onassis:NaturalLanguageExpression “`+answer.answer+`"^^rdfs:Literal .
        `;
        if (answer.provided_by == 'client') {
          LD += `ex:`+(i+1)+` onassis:answerProvidedBy ex:1 . 
          ex:1 onassis:replies ex:`+i+` .
          `;
        } else {
          LD += `ex:`+(i+1)+` onassis:answerProvidedBy ex:2 . 
          ex:2 onassis:replies ex:`+i+` .
          `;
        }
        i++;
      });
      
      //TODO RISKS
      i = 2500;
      this.risks.forEach( (risk) => {

        //Risk is class of onassis core
        LD += `
        ex:`+i+` rdf:type onassis:Risk
        ex:`+i+` onassis:NaturalLanguageExpression “`+risk.name+`"^^rdfs:Literal .
        ex:`+i+` risk:involvesHazardousEvent ex:`+(i+1)+` .
        ex:3 onassis:defines ex:`+i+` .
        ex:890 onassis:hasRisk ex:`+i+` .
        ex:56789 onassis:hasRisk ex:`+i+` .

        ex:`+(i+1)+` rdf:type risk:HazardousEvent .
        ex:`+(i+1)+` onassis:NaturalLanguageExpression “`+risk.event+`"^^rdfs:Literal .
        ex:`+(i+1)+` risk:hasProbability ex:`+(i+5)+` .
        ex:`+(i+1)+` risk:hasImpact ex:`+(i+3)+` .
        
        ex:`+(i+2)+` rdf:type risk:Source .
        ex:`+(i+1)+` onassis:NaturalLanguageExpression “`+risk.source+`"^^rdfs:Literal .
        
        ex:`+(i+3)+` rdf:type risk:Impact .
        ex:`+(i+1)+` onassis:NaturalLanguageExpression “`+risk.impact+`"^^rdfs:Literal .
        ex:`+(i+3)+` risk:resultInLevelOfRisk ex:`+(i+4)+` .
        ex:`+(i+3)+` risk:basedOnSource ex:`+(i+2)+` .
        `
        if (risk.affected == 'both') {
          LD += `ex:`+(i+3)+` risk:affects ex:1
          ex:`+(i+3)+` risk:affects ex:2
        `
        } else if (risk.affected == 'client') { 
          LD += `ex:`+(i+3)+` risk:affects ex:1
        `
        } else if (risk.affected == 'freelancer') { 
          LD += `ex:`+(i+3)+` risk:affects ex:2
        `
        }

        LD += `
        ex:`+(i+4)+` rdf:type risk:LevelOfRisk .
        ex:`+(i+1)+` onassis:NaturalLanguageExpression “`+risk.levelOfRisk+`"^^rdfs:Literal .
        ex:`+(i+4)+` risk:isInvolvedInRisk ex:`+i+` .
        
        ex:`+(i+5)+` rdf:type risk:Probability .
        ex:`+(i+1)+` onassis:NaturalLanguageExpression “`+risk.probability+`"^^rdfs:Literal .
        ex:`+(i+5)+` risk:resultInLevelOfRisk ex:`+(i+4)+` .
        ex:`+(i+5)+` risk:basedOnSource ex:`+(i+2)+` .
        `;

        let j = 1;
        risk.cause.forEach( (cause) => {
          LD += `
          ex:`+(i+6+j)+` rdf:type risk:Cause .
          ex:`+(i+6+j)+` onassis:NaturalLanguageExpression “`+cause.name+`"^^rdfs:Literal .
          ex:`+(i+1)+` risk:hasCause ex:`+(i+6+j)+` .
          ex:`+(i+8+j)+` risk:containedByReactiveControl ex:`+(i+7+j)+` .

          ex:`+(i+7+j)+` rdf:type risk:ProactiveControl .
          ex:`+(i+7+j)+` onassis:NaturalLanguageExpression “`+cause.proactiveControl+`"^^rdfs:Literal .
          ex:`+(i+1)+` risk:hasProactiveControl ex:`+(i+7+j)+` .
          `;
          j+=2;
        });

        risk.consequence.forEach( (consequence) => {
          LD += `
          ex:`+(i+8+j)+` rdf:type risk:Consequence .
          ex:`+(i+8+j)+` onassis:NaturalLanguageExpression “`+consequence.name+`"^^rdfs:Literal .
          ex:`+(i+1)+` risk:hasConsequence ex:`+(i+8+j)+` .
          ex:`+(i+8+j)+` risk:containedByReactiveControl ex:`+(i+9+j)+` .

          ex:`+(i+9+j)+` rdf:type risk:ReactiveControl .
          ex:`+(i+9+j)+` onassis:NaturalLanguageExpression “`+consequence.reactiveControl+`"^^rdfs:Literal .
          ex:`+(i+1)+` risk:hasReactiveControl ex:`+(i+9+j)+` .
          `;
          j+=2;
        });

        i++;
        i+=j;
      });
      //contract text
      LD += `

      ex:9000 rdf:type onassis:section.
      ex:9000 onassis:hasOrderNumber 1.
      ex:9000 onassis:hasTopic ex:888.
      ex:888 rdf:type onassis:SectionTopic. 
      ex:888 onassis:NaturalLanguageExpression “A Scope"^^rdfs:Literal . 

      ex:9000 onassis:isRelatedTo ex:901.

      #paragraph locus 1 in section ex:9000”.  

      ex:901 rdf:type onassis:Paragraph.
      ex:901 onassis:isRelatedTo ex:9000.
      ex:901 onassis:hasOrderNumber 1.

      #paragraph expression locus 1 in paragraph ex:901. It reads: “1 The undersigned,”.  

      ex:901 onassis:hasParagraphExpression ex:78.
      ex:78   rdf:type onassis:ParagraphExpression. 
      ex:78   onassis:NaturalLanguageExpression “1 The undersigned"^^rdfs:Literal.
      ex:78  onassis:hasOrderNumber 1.

      #variable locus 2 in paragraph ex:901. [NAME1]

      Ex901 onassis:hasVariable ex:08.
      ex:08 rdf:type onassis:Variable.
      ex:08 onassis:hasOrderNumber 2.

      #paragraph expression locus 3 in paragraph ex:901. It reads: “and”.  

      ex:901 onassis:hasParagraphExpression ex:79.
      ex:79   rdf:type onassis:ParagraphExpression. 
      ex:79   onassis:NaturalLanguageExpression “and"^^rdfs:Literal.
      ex:79  onassis:hasOrderNumber 3.

      #variable locus 4 in paragraph ex:901.  [NAME2]

      Ex901 onassis:hasVariable ex:09. 
      ex:09 rdf:type onassis:Variable.
      ex:09 onassis:hasOrderNumber 4.


      #paragraph expression locus 5 in paragraph ex:901. It reads: “are having discussions regarding the provision of freelance work by”.  

      ex:901 onassis:hasParagraphExpression ex:80.
      ex:80   rdf:type onassis:ParagraphExpression. 
      ex:80   onassis:NaturalLanguageExpression “are having discussions regarding the provision of freelance work by "^^rdfs:Literal.
      ex:80  onassis:hasOrderNumber 5.

      #variable locus 6 in paragraph ex:901.  [NAME1]

      Ex901 onassis:hasVariable ex:08.
      ex:08 onassis:hasOrderNumber 6.

      #paragraph expression locus 7 in paragraph ex:901. It reads: “to”.  

      ex:901 onassis:hasParagraphExpression ex:81.
      ex:81  rdf:type onassis:ParagraphExpression. 
      ex:81   onassis:NaturalLanguageExpression “to"^^rdfs:Literal.
      ex:81 onassis:hasOrderNumber 7.

      #variable locus 8 in paragraph ex:901. [NAME2]
      Ex901 onassis:hasVariable ex:09.
      ex:09 onassis:hasOrderNumber 8.

      #section locus 2 and section topic “B MILESTONES”.  

      ex:9001 rdf:type onassis:section.
      ex:9001 onassis:hasOrderNumber 2.
      ex:9001 onassis:hasTopic ex:889.
      ex:889 rdf:type onassis:SectionTopic. 
      ex:889 onassis:NaturalLanguageExpression “B MILESTONES"^^rdfs:Literal . 
      ex:9001 onassis:isRelatedTo ex:902.

      #paragraph locus 1 in section ex:9001”.  

      ex:902 rdf:type onassis:Paragraph.
      ex:902 onassis:isRelatedTo ex:9001.
      ex:902 onassis:hasOrderNumber 1.

      #paragraph expression locus 1 in paragraph ex:902. It reads: “1”.  

      ex:902 onassis:hasParagraphExpression ex:200.
      ex:200   rdf:type onassis:ParagraphExpression. 
      ex:200   onassis:NaturalLanguageExpression “1"^^rdfs:Literal.
      ex:200  onassis:hasOrderNumber 1.

      #variable locus 2 in paragraph ex:902. [NAME1]
      Ex902 onassis:hasVariable ex:08.
      ex:08 onassis:hasOrderNumber 2.

      #paragraph expression locus 3 in paragraph ex:902. It reads: “and”.  

      ex:902 onassis:hasParagraphExpression ex:201.
      ex:201   rdf:type onassis:ParagraphExpression. 
      ex:201   onassis:NaturalLanguageExpression “and"^^rdfs:Literal.
      ex:201  onassis:hasOrderNumber 3.

      #variable locus 4 in paragraph ex:902. [NAME2]
      Ex902 onassis:hasVariable ex:09.
      ex:09 onassis:hasOrderNumber 4.

      #paragraph expression locus 5 in paragraph ex:902. It reads: “agree to schedule payments based on the following milestone plan:”.  

      ex:902 onassis:hasParagraphExpression ex:202.
      ex:202   rdf:type onassis:ParagraphExpression. 
      ex:202   onassis:NaturalLanguageExpression “agree to schedule payments based on the following milestone plan: "^^rdfs:Literal.
      ex:202  onassis:hasOrderNumber 5.

      #variable locus 6 in paragraph ex:902. [MILESTONES]
      Ex902 onassis:hasVariable ex:14.
      ex:14 rdf:type onassis:Variable.
      ex:14 onassis:hasOrderNumber 6.

      #variable locus 7 in paragraph ex:902.  [DEADLINES] 
      Ex902 onassis:hasVariable ex:15.
      ex:15 rdf:type onassis:Variable.
      ex:15 onassis:hasOrderNumber 7.


      #section locus 3 and section topic “C Payment”.  

      ex:9002 rdf:type onassis:section.
      ex:9002 onassis:hasOrderNumber 3.
      ex:9002 onassis:hasTopic ex:7000.
      ex:7000 rdf:type onassis:SectionTopic. 
      ex:7000 onassis:NaturalLanguageExpression “C PAYMENT"^^rdfs:Literal . 
      ex:9002 onassis:isRelatedTo ex:600.
      ex:9002 onassis:isRelatedTo ex:601.
      ex:9002 onassis:isRelatedTo ex:602.
      ex:9002 onassis:isRelatedTo ex:603.

      #paragraph locus 1 in section ex:9002”.  

      ex:600 rdf:type onassis:Paragraph.
      ex:600 onassis:isRelatedTo ex:9002.
      ex:600 onassis:hasOrderNumber 1.

      #paragraph expression locus 1 in paragraph ex:600. It reads: “1 The total budget is”.  

      ex:600 onassis:hasParagraphExpression ex:50.
      ex:50   rdf:type onassis:ParagraphExpression. 
      ex:50   onassis:NaturalLanguageExpression “1 The total budget is "^^rdfs:Literal.
      ex:50  onassis:hasOrderNumber 1.

      #variable locus 2 in paragraph ex:600. [amount] 
      ex:600 onassis:hasVariable ex:16.
      ex:16 rdf:type onassis:Variable.
      ex:16 onassis:hasOrderNumber 2.

      #paragraph expression locus 3 in paragraph ex:600. It reads: “and the payment method is”.  
      ex:600 onassis:hasParagraphExpression ex:51.
      ex:51   rdf:type onassis:ParagraphExpression. 
      ex:51   onassis:NaturalLanguageExpression “and the payment method is "^^rdfs:Literal.
      ex:51  onassis:hasOrderNumber 3.

      #variable locus 4 in paragraph ex:600. [x]
      ex:600 onassis:hasVariable ex:17.
      ex:17 rdf:type onassis:Variable.
      ex:17 onassis:hasOrderNumber 4.


      #paragraph locus 2 in section ex:9002”.  

      ex:601 rdf:type onassis:Paragraph.
      ex:601 onassis:isRelatedTo ex:9002.
      ex:601 onassis:hasOrderNumber 2.

      #paragraph expression locus 1 in paragraph ex:601. It reads: “2 On the deadline of each milestone the”.  

      ex:601 onassis:hasParagraphExpression ex:40.
      ex:40   rdf:type onassis:ParagraphExpression. 
      ex:40   onassis:NaturalLanguageExpression “2 On the deadline of each milestone the "^^rdfs:Literal.
      ex:40  onassis:hasOrderNumber 1.

      #variable locus 2 in paragraph ex:601.  [NAME2] 
      Ex601 onassis:hasVariable ex:09.
      ex:09 onassis:hasOrderNumber 2.


      #paragraph expression locus 3 in paragraph ex:601. It reads: “2 On the deadline of each milestone the”.  

      ex:601 onassis:hasParagraphExpression ex:41.
      ex:41   rdf:type onassis:ParagraphExpression. 
      ex:41   onassis:NaturalLanguageExpression “will examine the quality of “^^rdfs:Literal.
      ex:41  onassis:hasOrderNumber 3.

      #variable locus 4 in paragraph ex:601. [NAME1] 
      Ex601 onassis:hasVariable ex:08.
      ex:08 onassis:hasOrderNumber 4.


      #paragraph expression locus 5 in paragraph ex:601. It reads: “services and only if the quality is sufficient comply with payment obligation.”.  

      ex:601 onassis:hasParagraphExpression ex:42.
      ex:42   rdf:type onassis:ParagraphExpression. 
      ex:42   onassis:NaturalLanguageExpression “services and only if the quality is sufficient comply with payment obligation.  “^^rdfs:Literal.
      ex:42  onassis:hasOrderNumber 5.

      #paragraph locus 3 in section ex:9002”.  
      ex:602 rdf:type onassis:Paragraph.
      ex:602 onassis:isRelatedTo ex:9002.
      ex:602 onassis:hasOrderNumber 3.

      #paragraph expression locus 1 in paragraph ex:602. It reads: “3 The”.  

      ex:602 onassis:hasParagraphExpression ex:30.
      ex:30   rdf:type onassis:ParagraphExpression. 
      ex:30   onassis:NaturalLanguageExpression “the "^^rdfs:Literal.
      ex:30  onassis:hasOrderNumber 1.

      #variable locus 2 in paragraph ex:602.  [NAME1] 
      Ex602 onassis:hasVariable ex:08.
      ex:08 onassis:hasOrderNumber 2.

      #paragraph expression locus 3 in paragraph ex:602. It reads: “has no obligation to deliver the services if any payment is not completed.”.  

      ex:602 onassis:hasParagraphExpression ex:31.
      ex:31   rdf:type onassis:ParagraphExpression. 
      ex:31   onassis:NaturalLanguageExpression “has no obligation to deliver the services if any payment is not completed. "^^rdfs:Literal.
      ex:31  onassis:hasOrderNumber 1.


      #paragraph locus 4 in section ex:9002”.  
      ex:603 rdf:type onassis:Paragraph.
      ex:603 onassis:isRelatedTo ex:9002.
      ex:603 onassis:hasOrderNumber 1.


      #paragraph expression locus 1 in paragraph ex:603. It reads: “4 Refund is not possible.” 

      ex:603 onassis:hasParagraphExpression ex:32.
      ex:32   rdf:type onassis:ParagraphExpression. 
      ex:32   onassis:NaturalLanguageExpression “4 Refund is not possible."^^rdfs:Literal.
      ex:32  onassis:hasOrderNumber 1.

      #section locus 4 and section topic “D Signature”.  

      ex:9003 rdf:type onassis:section.
      ex:9003 onassis:hasOrderNumber 1.
      ex:9003 onassis:hasTopic ex:777.
      ex:777 rdf:type onassis:SectionTopic. 
      ex:777 onassis:NaturalLanguageExpression “D Signature"^^rdfs:Literal . 
      `;
      return LD;
    },
  },
  mounted: function () {
    this.contractText = "Freelance Agreement"+
  "\nA SCOPE "+
  "\n1 The undersigned, [NAME1] and [NAME2] are having discussions regarding the provision of freelance work by [NAME1] to [NAME2]. "+
  "\n"+
  "\nB MILESTONES"+
  "\n1 [NAME1] and [NAME2] agree to schedule payents based on the following milestone plan: [MILESTONES] [DEADLINES]. "+
  "\n"+
  "\nC PAYMENT"+
  "\n1 The total budget is [amount] and the payment method is [X]. "+
  "\n2 On the deadline of each milestone the [NAME2] will examine the quality of [NAME1] services and only if the quality is sufficient comply with payment obligation. "+
  "\n3 The [NAME1] has no obligation to deliver the services if any payment is not completed. "+
  "\n4 Refund is not possible."+
  "\n"+
  "\nD SIGNATURES"+
  "\n"+
  "\n[NAME1] "+
  "\n[NAME2]";
  this.defaultTemplateContractText = this.customTemplateContractText = this.contractText;

  this.checkForAnswersAdditionalQuestionsAnswers();
  this.checkForAdditionalQuestions();

  },
  beforeUpdate: function () {
    //console.log('test')
    //console.log(this.$store.state.initialQuestions);
    this.contractText = this.customTemplateContractText;
    if (this.$store.state.questionsClient.SubjectID != undefined) this.contractText = this.contractText.replaceAll("[NAME1]", this.$store.state.questionsClient.SubjectID);
    if (this.$store.state.questionsFreelancer.SubjectID != undefined) this.contractText = this.contractText.replaceAll("[NAME2]", this.$store.state.questionsFreelancer.SubjectID);
    if (this.$store.state.initialQuestions.milestones.variables) this.contractText = this.contractText.replaceAll("[MILESTONES]", this.$store.state.initialQuestions.milestones.variables);
    if (this.$store.state.initialQuestions.payment_schedule.variables) this.contractText = this.contractText.replaceAll("[DEADLINES]", this.$store.state.initialQuestions.payment_schedule.variables);
    if (this.$store.state.initialQuestions.payment_method.variables) this.contractText = this.contractText.replaceAll("[X]", this.$store.state.initialQuestions.payment_method.variables);
    if (this.$store.state.initialQuestions.price.variables) this.contractText = this.contractText.replaceAll("[amount]", this.$store.state.initialQuestions.price.variables);
  },
};
</script>

<style>
.input-disabled{
    background-color:rgb(155, 146, 146) !important;
}
</style>
