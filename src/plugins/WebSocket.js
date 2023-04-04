const WebSocket = require('ws')

class SimpleWebSocket {
  constructor(url) {
    this.url = url
    this.socket = null
  }

  connect() {
    this.socket = new WebSocket(this.url)

    this.socket.on('open', () => {
      console.log('WebSocket connected')
    })

    this.socket.on('message', (data) => {
      console.log(`Received message: ${data}`)
    })

    this.socket.on('close', () => {
      console.log('WebSocket disconnected')
    })
  }

  send(data) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(data)
    } else {
      console.log('WebSocket not connected')
    }
  }

  disconnect() {
    this.socket.close()
  }
}

module.exports = SimpleWebSocket
