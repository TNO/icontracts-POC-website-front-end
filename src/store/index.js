import Vue from 'vue'
import Vuex from 'vuex'
import v4 from 'uuid'
//import SocketIO from "socket.io-client";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    StoreVariableCountFromBackend: 0,
    sessionId: "",
    receivedMessage: "no new message from backend",
    userType: "",
    initialQuestions: {},
    questionsFreelancer: {},
    questionsClient: {},
    finalContractReady: false, //TODO: save these to backend here or in legalForm + get these via websocket and show to all users
    //socket: SocketIO("http://caic.sensorlab.tno.nl:8082"),
    contractId: "",
    subjectId: "",
    contractScope: "",
  },
  mutations: {
    increment (state) {
      state.StoreVariableCountFromBackend++
    },
    sessionId (state, sessionId) {
      state.sessionId = sessionId;
    },
    storeReceivedMessage (state, msg) {
      state.receivedMessage = msg;
    },
    storeUserType (state, type) {
      state.userType = type;
    },
    storeInitialQuestions (state, questions) {
      console.log('store initial questions: ')
      console.log(questions)
      state.initialQuestions = questions;
    },
    storeQuestionsFreelancer (state, questions) {
      console.log('storeQuestionsFreelancer: ')
      console.log(questions)
      state.questionsFreelancer = questions;
    },
    storeQuestionsClient (state, questions) {
      console.log('storeQuestionsClient: ')
      console.log(questions)
      state.questionsClient = questions;
    },
    setFinalContractReady (state) {
      //TODO: save these to backend here or in legalForm + get these via websocket and show to all users
      state.finalContractReady = true;
    },
    storecontractId (contractId) {
      state.contractId = contractId;
    },
    storesubjectId (subjectId) {
      state.subjectId = subjectId;
    },
  },
  actions: {
  },
  modules: {
  }
})
