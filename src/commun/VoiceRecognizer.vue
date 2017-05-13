<template>
<div class="voice-recognizer-container">
    <div v-if="isSupported">
        <button class="ic-voice-container" :class="{active: isListening}" @click="listen">
            <img class="ic-voice" src="../assets/icons/ic_voice.svg">
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

const client = new ApiAiClient({accessToken: '53002c34bea24a65afd849611e96531e'});

export default {
        name: 'VueJS',
        data () {
            return {
                isSupported: true,
                isListening: false,
                recognizer: null,
                transcription: '',
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
                .then(() => { setTimeout(() => this.transcription = '', 2000) })
                .catch(err => handleError(err))

            },
            handleResponse(res) {
              console.log(res)
              if (res.result.action === 'turnOn') {
                // send action to turn on light
              }
              var msg = new SpeechSynthesisUtterance(res.result.fulfillment.speech);
              msg.lang = 'fr-FR';
              window.speechSynthesis.speak(msg);
            },
            handleError (err) {
              this.transcription = '';
              console.log(err)
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
    justify-content: center;
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
    font-family: Arial;
    background: rgba(0,0,0,0.80);
    color: white;
    border-radius: 20px;
    transform: translateY(20px);
    transition: all .3s ease-in-out;
    will-change: transform;
}

.transcription.active {
    padding: 5px 10px;
    transform: translateY(0px);
}

</style>
