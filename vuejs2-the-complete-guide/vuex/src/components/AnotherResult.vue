<template>
	<div>
		<p>Counter is: {{ doubleCounter }}</p>
		<p>Number of clicks: {{ stringCounter }}</p>

		<!-- <p>Counter is: {{ counter }}</p>
		<p>Number of clicks: {{ clicks }}</p> -->
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
    import * as types from '../store/types';
    export default {
        // props: ['counter']
        /*computed: {
        	counter() {
        		return this.$store.getters.doubleCounter;
        	},
        	clicks() {
        		return this.$store.getters.stringCounter;
        	}
        }*/
        /*computed: mapGetters({
        	counter: 'doubleCounter',
        	clicks: 'stringCounter'
        })*/
        computed: {
        	/*...mapGetters([
        		'doubleCounter',
        		'stringCounter'
        	])*/
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
                stringCounter: types.CLICK_COUNTER
            })
        }
    }
</script>