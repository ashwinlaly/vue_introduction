<template>
    <div>
        <app-child-component :name="name" @catchNewName="name"></app-child-component> 
        <button @click="handleClick">a</button>
    </div>
</template>

<script>
    import Child from './Child.vue';
    
    export default {
        components : {
            'app-child-component' : Child
        },
        data () {
            return {
                name : "Ashwin"
            }
        },
        methods : {
            handleClick() {
                this.name = "NewName";
            }
        }
    }
</script>