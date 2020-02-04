<template>
    <div>
        <app-Parent-Component></app-Parent-Component>
        {{title}}
        <button @click="handleClick">a</button>
        <app-quote-component>
            This Will be printed in Child
        </app-quote-component>
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