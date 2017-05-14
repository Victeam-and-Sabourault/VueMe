<template>
<div>
    <page-title :titleImage="src">ÉCLAIRAGE</page-title>
    <md-list class="list-container" v-for="item in itemList" :key="item.title">
        <md-list-item class="item-container">
        <eclairage-list-item :item="item"></eclairage-list-item>              
        </md-list-item>
    </md-list>
    <div class="couleur-picker-container">     
        <h4>Couleur de la lampe</h4>
        <div class="couleur-picker">
            <div class="couleur couleur-bleu" @click="bleu()"></div>    
            <div class="couleur couleur-blanc" @click="blanc()"></div>    
            <div class="couleur couleur-rouge" @click="rouge()"></div>    
        </div>
    </div>     
</div>
</template>

<script>
    import PageTitle from '../Common/PageTitle'
    import EclairageListItem from './EclairageListItem'
    import axios from 'axios'
    export default {
        components: {
            PageTitle,
            EclairageListItem,
        },
        data() {
            return {
                itemList: [
                    {
                        title: "Fhacktory",
                    }
                ],
                apiLights: 'http://192.168.137.151/api/9aG5iH8uo4Vea7oRFxXF2iAibQTRr57qrRSRRnO1/lights',
            }
        },
        computed: {
            src() {
                return require('../../assets/icons/ic_light_w.svg')
            }
        },
        created() {
        },
        methods: {
            bleu () {
                axios.put(this.apiLights+'/2/state', {on: this.switchLight, sat: 254, hue: 46920});
            },
            blanc () {
                axios.put(this.apiLights+'/2/state', {on: this.switchLight, sat: 100, hue: 10000});
            },
            rouge () {
                axios.put(this.apiLights+'/2/state', {on: this.switchLight, sat: 254, hue: 0});
            },
        }
    }
</script>

<style scoped>
    .item-container {
        border-bottom: 1px solid #c8c8c8;
    }

    .list-container {
        padding: 0;
        margin-top: 10px;
    }

    .couleur-picker-container {
        padding: 0 16px;
    }

    .couleur-picker{
        display: flex;
        justify-content: space-around;
    }

    .couleur {
        border-radius: 50%;
        box-sizing: border-box;
        border: 3px solid #fff;
        box-shadow: 0 2px 4px 0px rgba(0,0,0,0.2);
        height: 80px;
        width: 80px;
        cursor: pointer;
        transition: all .2s ease;
    }

    .couleur:hover {
        box-shadow: 0 4px 6px 0px rgba(0,0,0,0.3);
    }

    .couleur-bleu {
        background-color: #2D7DE8;
    }
    .couleur-blanc {
        background-color: white;
    }
    .couleur-rouge {
        background-color: #E82D2D;
    }

    .couleur-picker {
        list-style: none;
        margin: 0 !important;
        padding: 0;
    }

    h4 {
        text-transform: uppercase;
        color: #909090;
    }
</style>