<template>
    <div>
        <app-Parent-Component></app-Parent-Component>
        {{title}}
        <button @click="handleClick">a</button>
    </div>
</template>

<script>
    export default {
        data : function() {
            return {
                title : "Home"
            }    
        },
        methods : {
            handleClick : function() {
                this.title = "Changed";
            }
        }
    }
</script>