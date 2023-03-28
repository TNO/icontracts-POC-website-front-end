<template>
  <div>
    <contract-preview-form />
  </div>
</template>

<script>
import ContractPreviewForm from '../components/ContractPreviewForm.vue'

  export default {
    name: 'finalContract',

    components: {
      ContractPreviewForm
      //TODO: create+include component for PDF generator + ontology instances preview in graph visualisation
    },
  }
</script>