import axios from 'axios';

export default {
  color: [
    {'rouge': {on: true, sat: 254, hue: 0}},
    {'bleue': {on: true, sat: 254, hue: 46920}},
    {'bleu': {on: true, sat: 254, hue: 46920}},
    {'blanc': {on: true, sat: 254, hue: 10000}},
    {'aléatoire': {on: true, sat: 122, effect: "colorloop"}}
  ],
  apiLights: 'http://192.168.137.7/api/9aG5iH8uo4Vea7oRFxXF2iAibQTRr57qrRSRRnO1/lights',

  turnOn (color) {
    const itemId = 2
    const data = this.color.find(key => key === color) || {on: true}
    axios.put(`${this.apiLights}/${itemId}/state`, data)
  },
  turnOff () {
    const itemId = 2
    axios.put(`${this.apiLights}/${itemId}/state`, {on: false})
  },
  getState () {
    const itemId = 2
    return axios.get(this.apiLights).then(response => response.data[itemId].state.on)
  }
}