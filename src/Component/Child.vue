<template>
    <div>
        Hello {{name}}
        <button @click="sendData">Send Data</button>
    </div>
</template>

<script>
    export default {
        props : {
            name : {
                type : String,
                required : true
            }
        },
        data () {
            return {
                message : "Hi from Child"
            }
        },
        methods: {
            sendData : function(){
                this.$emit('catchNewName', "NewDatta");
            }
        }
    }
</script>

<style>
</style>