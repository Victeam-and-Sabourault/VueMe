<template>
  <div class="hello">
    <div class="supported" v-if="isSupported">
        <button :class="{'is-primary': isListening}" class="button is-large" @click="listen">🎤</button>
        <p>{{ transcription }}</p>
    </div>
    <div class="not-supported" v-else>
        Your browser doesn't support speech recognition 😢
    </div>
  </div>
</template>

<script>
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
                // Recogniser doesn't stop listening even if the user pauses
                this.recognizer.continuous = true;
                // interim results
                this.recognizer.interimResults = false;
                // Start recognising
                this.recognizer.onresult = (event) => {
                    this.transcription = '';
                    for (let result of event.results) {
                        if (result.isFinal) {
                            console.log('Result! : ' + event.results)
                            
                            this.transcription = result[0].transcript + ' (Confidence: ' + result[0].confidence + ')';
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
                this.sendAction();
            },
            sendAction () {
              console.log(this.transcription);
                // const actions = commands.getActions(this.transcription);
                // const lights = commands.getLights(this.transcription);
                // const groups = commands.getGroups(this.transcription);
                // commands.send(actions, lights, groups);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
