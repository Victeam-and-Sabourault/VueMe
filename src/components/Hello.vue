<template>
<div>
    <div v-if="isSupported">
        <button @click="listen">LISTEN</button>
        <p>{{ transcription }}</p>
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
                .then(() => { this.transcription = '' })
                .catch(err => handleError(err))

            },
            handleResponse(res) {
              console.log(res)
              console.log(res.result.fulfillment.speech)
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
