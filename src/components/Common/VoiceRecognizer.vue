<template>
  <div class="voice-recognizer-container">
    <music-card @close="isPlayingMusic=false" v-if="isPlayingMusic" />
    <mail-card @close="isShowingMail=false" :mail="mail" v-if="isShowingMail" />
    <calendar-card @close="isShowingCalendar=false" :event="event" v-if="isShowingCalendar" />
    <weather-card @close="isShowingWeather=false" :weather="weather" v-if="isShowingWeather" />
    <div class="vr-wrapper" v-if="isSupported">
      <button class="ic-voice-container" :class="{active: isListening}" @click="listen">
        <img class="ic-voice" src="../../assets/icons/ic_voice.svg">
      </button>
      <p :class="{active: transcription}" class="transcription">{{ transcription }}</p>
    </div>
    <div v-else>
      Your browser doesn't support speech recognition 😢
    </div>
  </div>
</template>

<script>
import { ApiAiClient } from 'api-ai-javascript/ApiAiClient'
import axios from 'axios'
import CalendarCard from '@/components/Calendar/Calendar'
import MailCard from '@/components/Mail/Mail'
import MusicCard from '@/components/Music/Music'
import WeatherCard from '@/components/Weather/Weather'
import moment from 'moment'
import lights from '@/utils/lights'

const client = new ApiAiClient({accessToken: '53002c34bea24a65afd849611e96531e'})

export default {
  name: 'VueJS',
  components: {
    CalendarCard,
    MailCard,
    MusicCard,
    WeatherCard,
  },
  data () {
    return {
      apiWeather: 'http://api.openweathermap.org/data/2.5/weather?APPID=ed79dba0a784436fb37d5680c23eac59&q=',
      isSupported: true,
      isListening: false,
      recognizer: null,
      transcription: '',
      mail: null,
      event: null,
      weather: {
        city: 'Lyon',
        temp: 0,
        icon: '',
      },
      isPlayingMusic: false,
      isShowingMail: false,
      isShowingCalendar: false,
      isShowingWeather: false
    }
  },
  computed: {
    time () {
      return moment().locale('fr').format('LT')
    },
    
  },
  created () {
    // Test browser 
    window.SpeechRecognition = window.SpeechRecognition ||
    window.webkitSpeechRecognition  ||
    null;
    if (window.SpeechRecognition === null) {
      this.isSupported = false
    } else {
      this.recognizer = new window.SpeechRecognition()
      this.recognizer.lang = 'fr-FR'
      // Recogniser doesn't stop listening even if the user pauses
      this.recognizer.continuous = true
      // interim results
      this.recognizer.interimResults = false
      // Start recognising
      this.recognizer.onresult = (event) => {
        this.transcription = ''
        for (let result of event.results) {
          if(result.isFinal) {
            this.transcription = result[0].transcript
            this.sendAction(result[0].transcript)
          } else {
            this.transcription += result[0].transcript
          }
        }
      };
    }
  },
  methods: {
    listen () {
      if (this.isListening) {
        this.stop()
      } else {
        this.play()
      }
      this.isListening = !this.isListening
    },
    play () {
      try{
        this.recognizer.start()
        console.log('Recognition started')
      } catch(e) {
        console.log(e.message)
      }
    },
    stop () {
      this.recognizer.stop()
      console.log('Recognition stopped')
    },
    sendAction () {
      client.textRequest(this.transcription)
        .then(resp => this.handleResponse(resp))
        .catch(err => this.handleError(err))

    },
    handleResponse(res) {
      this.isShowingMail = false
      this.isPlayingMusic = false
      this.isShowingCalendar = false
      this.isShowingWeather = false
      if (res.result.action === 'turnOn') {
        lights.turnOn(res.result.fulfillment.messages[0].payload.color)
      } else if (res.result.action === 'turnOff') {
        lights.turnOff()
      } else if (res.result.action === 'mail') {
        this.readMail(res.result.fulfillment.messages[0].payload)
      } else if (res.result.action === 'calendar') {
        this.readEvent(res.result.fulfillment.messages[0].payload)
      } else if (res.result.action === 'music') {
        this.playMusic()
      } else if (res.result.action === 'stop') {
        this.stopMusic()
      } else if (res.result.action === 'job') {
        setTimeout(() => { window.location.href = 'http://lebrun.io' } , 2000)
      } else if (res.result.action === 'time') {
        res.result.fulfillment.speech = this.sayTime()
      } else if (res.result.action === 'weather') {
        this.sayWeather()
      }
      this.transcription = res.result.fulfillment.speech
      this.speak(res.result.fulfillment.speech)
    },
    handleError (err) {
      this.transcription = ''
      console.log(err)
    },
    speak(text, callback) {
      var msg = new SpeechSynthesisUtterance(text)
      msg.lang = 'fr-FR'
      msg.pitch = 1.5
      msg.rate = 1.9
      setTimeout(() => this.transcription = '', 3000)
      window.speechSynthesis.speak(msg)
      typeof callback === "function" ? callback() : null
    },
    readMail (mail) {
      this.isShowingMail = true
      this.mail = mail
      this.speak(
        'sujet du mail : ' + mail.title,
        setTimeout(() => this.speak('corps du mail: ' + mail.body), 2000)
      )
    },
    readEvent (event) {
      this.isShowingCalendar = true
      this.event = event
      this.speak('Vous avez ' + event.title + event.time)
    },
    playMusic () {
      this.isPlayingMusic = true
    },
    stopMusic () {
      this.isPlayingMusic = false
    },
    sayTime () {
      this.isTimeKnown = true
      return 'Il est ' + moment().locale('fr').format('LT')
    },
    sayWeather (city) {
      city = city || 'Lyon'
      axios.get(this.apiWeather + city)
      .then(response => {
        this.isShowingWeather = true
        this.weather.city = city
        this.weather.temp = response.data.main.temp
        this.weather.icon = response.data.weather[0].icon
        this.speak('Il fait ' + parseInt(response.data.main.temp - 273) + ' degrés à ' + city)
      })
    }
  }
}
</script>

<style scoped>
  .flex {
    display: flex;
  }

  .voice-recognizer-container {
    z-index: 9;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .vr-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ic-voice-container {
    padding: 0;
    border-radius: 50%;
    background: #465565;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.78);
    margin: 16px;
    height: 56px;
    width: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    box-sizing: border-box;
    transition: all .3s ease-in-out;
  }

  .ic-voice-container.active {
    background-color: #6FB485;
  }

  .ic-voice-container:focus {
    outline: 0;
  }

  .ic-voice-container:active {
    background-color: #29333D;
  }

  .ic-voice {
    height: 56px;
    width: 56px;
  }

  .transcription {
    text-align: center;
    font-family: Helvetica, Arial, sans-serif;
    background: rgba(0,0,0,0.80);
    color: white;
    border-radius: 20px;
    transition: all .3s ease-in-out;
    will-change: transform;
    opacity: 0;
    margin: 0;
  }

  .transcription.active {
    padding: 5px 10px;
    opacity: 1;
    margin-bottom: 16px;
  }

</style>
