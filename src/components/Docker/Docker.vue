<template>
    <div class="docker" :class="{full: isFull}" @click.stop="isFull=!isFull">
        <div class="modal">
            <h2>{{ category }}</h2>
            <div class="content"><slot></slot></div>
            <div v-if="isFull">
                
            </div>
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
    }
}
</script>

<style scoped>
.docker {
    width: 100%;
    position: fixed;
    bottom: 100px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;
    transition: background-color .3s ease-in-out;
}

.full {
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, .5);
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
    height: 50%;
    margin: auto;
}

h2 {
    text-align: center;
    border-bottom: 1px solid #999;
    margin-top: 0;
    padding: 5px;
}
</style>