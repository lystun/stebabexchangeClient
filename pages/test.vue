<template>
    <div class="container">
        <input type="text" v-model="message">
        <!-- <button type="button"
            v-clipboard:copy="message"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError">Copy!
        </button> -->

        <input type="text" v-model="message">
        <button type="button" @click="doCopy">Copy!</button>
  </div>
</template>

<script>

    export default {
        layout: 'auth',

        data: function () {
            return {
                message: 'Copy These Text'
            }
        },
        methods: {
            onCopy: function (e) {
                console.log(e);
                alert('You just copied: ' + e.text)
            },
            onError: function (e) {
                alert('Failed to copy texts')
            },

            doCopy: function () {
                this.$copyText(this.message).then(function (e) {
                    alert('Copied')
                    console.log(e)
                }, function (e) {
                    alert('Can not copy')
                    console.log(e)
                })
            }
        }
    }
</script>

<style>

</style>