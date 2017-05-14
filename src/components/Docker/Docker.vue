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
    position: fixed;
    bottom: 100px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,.2);
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
    background-color: #fff;
    transition: all .3s ease-in-out;
}

.full .modal {
    background-color: #fff;
    height: 50%;
    margin: auto;
}

h2 {
    text-align: center;
}

.content {
    padding-top: 30px;
}
</style>