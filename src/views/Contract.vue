<template>
  <div>
    <contract-form />
    <!-- <web-socket-handler wsPath="/contractor" /> -->
  </div>
</template>

<script>
import ContractForm from '../components/ContractForm.vue'
// import WebSocketHandler from '../components/WebSocketHandler.vue'

  export default {
    name: 'Contract',

    components: {
      ContractForm,
      // WebSocketHandler
    },
  }
</script>