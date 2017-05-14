<template>
<div class="item">
    <h3 class="title">{{ item.title }}</h3>
    <md-switch v-model="switchLight" @change="switchTheLight()" class="md-warn leftside"></md-switch>
</div>
</template>

<script>
    import axios from 'axios';

    export default {
        props: ['item'],
        data() {
            return {
                apiLights: 'http://192.168.137.7/api/9aG5iH8uo4Vea7oRFxXF2iAibQTRr57qrRSRRnO1/lights',
                switchLight : false,
            }
        },
        created() {
            this.switchTheLight();
        },
        methods : {
            switchTheLight(){
                var itemId = 2; //Hasto be 2 cause that's the light bulb ID
                axios.get(this.apiLights)
                    .then(response => this.switchLight = !response.data[itemId].state.on)
                    .then(() => axios.put(this.apiLights+'/'+itemId + '/state', {on: this.switchLight}));
            }
        }
    }
</script>

<style scoped>
    .item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .title {
        font-size: 20px;
        color: #414F5D;
    }
    
    .title:hover {
        color: #6FB485;
    }
</style>