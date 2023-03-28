<template>
  <div>
    <legal-form />
    <!-- <web-socket-handler wsPath="/legal_expert" /> -->
  </div>
</template>

<script>
// import WebSocketHandler from '../components/WebSocketHandler.vue'
import LegalForm from '../components/LegalForm.vue'

  export default {
    name: 'LegalExpert',

    components: {
      LegalForm,
      // WebSocketHandler
    },
  }
</script>