<template>
    <v-alert error dismissible v-on:input="onClose" :value="true">{{text}}</v-alert>
</template>

<script>
    export default{
        methods: {
            onClose(){
                this.$emit('dismissed');
            }
        },
        props: [
            'text'
        ]
    }
</script>