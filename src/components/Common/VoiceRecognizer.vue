<template>
<div class="voice-recognizer-container">
    <docker category="Musique" v-if="isPlayingMusic">
      <audio src="http://www.mfiles.co.uk/mp3-downloads/Dvorak-Symphony9-2-from-the-New-World.mp3" autoplay controls>
      </audio>
    </docker>
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
import Docker from '@/components/Docker/Docker'

const client = new ApiAiClient({accessToken: '53002c34bea24a65afd849611e96531e'});

export default {
        name: 'VueJS',
        components: {
          Docker,
        },
        data () {
            return {
                isSupported: true,
                isListening: false,
                recognizer: null,
                transcription: '',
                mails: [{
                  title: 'Bonjour le rendu',
                  body: 'Cordialement, Adrien Redon'
                }],
                events: [{
                  title: 'rendez-vous gynéco',
                  time: 'à 19 heure'
                }],
                isPlayingMusic: false
            }
        },
        created () {
            // Test browser 
            window.SpeechRecognition = window.SpeechRecognition ||
                window.webkitSpeechRecognition  ||
                null;
            if (window.SpeechRecognition === null) {
                this.isSupported = false;
            } else {
                this.recognizer = new window.SpeechRecognition();
                this.recognizer.lang = 'fr-FR';
                // Recogniser doesn't stop listening even if the user pauses
                this.recognizer.continuous = true;
                // interim results
                this.recognizer.interimResults = false;
                // Start recognising
                this.recognizer.onresult = (event) => {
                    this.transcription = '';
                    for (let result of event.results) {
                      if(result.isFinal) {
                        this.transcription = result[0].transcript;
                        this.sendAction(result[0].transcript);
                      } else {
                        this.transcription += result[0].transcript;
                      }
                    }
                };
            }
        },
        methods: {
            listen () {
                if (this.isListening) {
                    this.stop();
                } else {
                    this.play();
                }
                this.isListening = !this.isListening;
            },
            play () {
                try{
                  this.recognizer.start();
                  console.log('Recognition started');
               } catch(e) {
                  console.log(e.message);
               }
            },
            stop () {
                this.recognizer.stop();
                console.log('Recognition stopped');
            },
            sendAction () {
              console.log(this.transcription);
              if (this.transcription.length < 1) {
                this.transcription = 'Ok cool'
              }
              client.textRequest(this.transcription)
                .then(resp => this.handleResponse(resp))
                .catch(err => this.handleError(err))

            },
            handleResponse(res) {
              console.log(res)
              if (res.result.action === 'turnOn') {
                // send action to turn on light
              } else if (res.result.action === 'mail') {
                this.readLastMail()
              } else if (res.result.action === 'calendar') {
                this.getNextEvent()
              } else if (res.result.action === 'music') {
                this.playMusic()
              } else if (res.result.action === 'stop') {
                this.stopMusic()
              }
              this.speak(res.result.fulfillment.speech);
            },
            handleError (err) {
              this.transcription = '';
              console.log(err)
            },
            speak(text, callback) {
              var msg = new SpeechSynthesisUtterance(text);
              msg.lang = 'fr-FR';
              this.transcription = text;
              setTimeout(() => this.transcription = '', 3000);
              window.speechSynthesis.speak(msg);
              typeof callback === "function" ? callback() : null
            },
            readLastMail () {
              this.speak(
                'sujet du mail : ' + this.mails[this.mails.length - 1].title,
                setTimeout(() => this.speak('corps du mail: ' + this.mails[this.mails.length - 1].body), 2000)
                );  
            },
            getNextEvent () {
              this.speak('Vous avez ' + this.events[0].title + this.events[0].time)
            },
            playMusic () {
              this.isPlayingMusic = true
            },
            stopMusic () {
              this.isPlayingMusic = false
            }
        }

    }
</script>

<style scoped>
.flex {
    display: flex;
}

.voice-recognizer-container {
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
