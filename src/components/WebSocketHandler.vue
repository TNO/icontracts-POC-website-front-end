<template>

</template>

<script>
export default {
  name: 'WebSocketHandler',

  props: {
    wsPath: ''
  },
  data () {
    return {
      socket: null,
      socketState: WebSocket.CLOSED
    }
  },
  computed: {
    ws_is_alive: om => om.socketState === WebSocket.OPEN,
  },
  methods: {
    newEvent(msg) {
      console.info(msg)
      //this.$store.state.receivedMessage = msg;
      this.$store.commit('storeReceivedMessage', msg);
      
    },
    connectWebSocket() {
      if (this.socketState !== WebSocket.CLOSED) {
        return
      }
      console.log('Attempting connection...')
      let wsURL = `ws://caic.sensorlab.tno.nl:8082${this.wsPath}`
      this.socket = new WebSocket(wsURL)
      this.socketState = WebSocket.CONNECTING
      this.socket.onopen = () => {
        this.socketState = WebSocket.OPEN
        this.sendEvent({'user_session': this.$store.state.sessionId})
      }
      this.socket.onclose = () => this.socketState = WebSocket.CLOSED
      this.socket.onmessage = this.newEvent;
      
    },
    sendEvent(txt) {
      if (this.ws_is_alive) {
        this.socket.send(JSON.stringify({
          event: txt
        }))
      }
    }
  },
  mounted: function () {
    this.connectWebSocket()
    window['timer'] = window.setInterval(this.connectWebSocket, 5000)
  },
  unmounted: function () {
    window.clearInterval(window['timer'])
  }
}


</script>