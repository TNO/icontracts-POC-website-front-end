<template>
  <v-app>
    <v-app-bar
      app
      dense
      elevation="3"
      color="white"
    >
      <div class="d-flex align-center">
        <v-img 
          alt="img" 
          src="../src/assets/onassis_logo2.png" 
          width="80"
        />
      </div>
      <v-tabs color="#689F38">
        <v-tabs-slider color="#689F38"></v-tabs-slider>
        <v-tab class="font-weight-bold ml-10" to="/">Overview</v-tab>
        <v-tab class="font-weight-bold" to="/contract" v-if="this.$store.state.userType == 'freelancer' || this.$store.state.userType == 'client'">Contract drafting</v-tab>
        <v-tab class="font-weight-bold" to="/legal" v-if="this.$store.state.userType == 'legal_expert'">Evaluate contract</v-tab>
        <v-tab class="font-weight-bold" to="/final" v-if="this.$store.state.finalContractReady">View final contract data</v-tab>
      </v-tabs>

      <v-spacer></v-spacer>
      <div v-if="this.$logged_in.value">
      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <!--<v-icon>mdi-logout</v-icon>-->
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title small>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </div>
      <!-- <v-btn>{{ this.$user.value }}</v-btn> -->
      <!-- <v-chip class="mr-2">{{ this.$poject.value }}</v-chip> -->
      <!-- <v-chip>{{ this.$company.value }}</v-chip> -->
     
      <!-- <v-btn icon to="/">
        <v-icon>mdi-account</v-icon>
      </v-btn> -->

      <!-- <v-img
          alt="TNO Logo"
          class="shrink mr-2"
          contain
          src="https://uwise.tno.nl/wp-content/uploads/2020/08/TNO-logo.png"
          transition="scale-transition"
          width="150"
        /> -->
      <!-- src="https://www.dinoloket.nl/themes/custom/tno_2_0/images/TNO-logo-wit.png" -->
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <v-footer color="#689F38" height="25px"></v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    showBars: false,
    items: [{title: 'Logout'}]
  }),
  computed: {
    userType () {
      return this.$store.state.userType;
    },
    finalContractReady () {
      return this.$store.state.finalContractReady;
    },  
  },  
  methods: {
    show_bars() {
      this.showBars = true
    },
    logout() {
      this.$logged_in.value = false;
      this.$router.push({path:"/"});
      this.$router.go();
    }
  }
};
</script>

<style scoped>
.theme--light.v-application {
  background-color: var(--v-background-base, #ECEFF1) !important;
}
</style>
