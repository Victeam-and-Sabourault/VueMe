<template>
    <div class="docker" :class="{full: isFull}" @click.stop="toggleModal()">
        <div class="modal">
            <h2>{{ category }}</h2>
            <div class="content"><slot></slot></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['category'],
    data () {
        return {
            isFull: false
        }
    },
    methods: {
        toggleModal() {
            if (this.isFull) {
                this.$emit('close')
            }
            this.isFull=!this.isFull
        }
    }
}
</script>

<style scoped>
.docker {
    width: 100%;
    position: fixed;
    bottom: 100px;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;
    transition: background-color .3s ease-in-out;
}

audio {
    min-height: 50px;
    margin-top: 10px;
    vertical-align: baseline;
    order: 1;
}

.full {
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, .5);
}

img {
    display: none;
    margin-top: 10px;
}

.full img {
    display: block;
    height: 30vh;
}

.modal {
    width: calc(100% - 32px);
    box-shadow: 0 2px 3px 0 rgba(0,0,0,.2);
    margin: 3px 16px;
    padding: 10px;
    background-color: #fff;
    transition: all .3s ease-in-out;
}

.modal p {
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.full .modal p {
    width: 100%;
    white-space: normal;
    text-overflow: unset;
    overflow: visible;
}

.full .modal {
    background-color: #fff;
    min-height: auto;
    margin: auto;
}

h2 {
    text-align: center;
    border-bottom: 1px solid #999;
    margin: 0;
    padding: 5px;
}

.content {
    height: 100%;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
</style>