<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations, mapActions } from 'vuex';
    export default {
        methods: {
            /*...mapMutations([
                'increment',
                'decrement'
            ])*/
            ...mapActions([
                'increment',
                'decrement'
            ]),
            /*increment() {
                this.$store.commit('increment');
            },
            decrement() {
                // this.$emit('updated', -1);
                this.$store.commit('decrement');
            }*/
            increment(by) {
                this.$store.dispatch('increment', by);
            }
        }
    }
</script>