<template>
    <div id="app">
    <navBar></navBar>
    </div>
</template>

<script>
const navBar = () => import("./navBar.vue");
export default {
    computed: {
        count(){
            return this.$store.state.count;
        }
    },
    methods: {
        increment(){
            return this.$store.dispatch('increment')
        }
    },
}
</script>