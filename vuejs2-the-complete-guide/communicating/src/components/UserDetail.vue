<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
        <p>User age: {{ userAge }}</p>
        <!-- <button @click="resetName">Reset Name</button> -->
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
	import { eventBus } from '../main';
	export default {
		// props: ['myName'],
		props: {
			// myName: String
			myName: {
				type: String,
				required: true,
				default: 'John'
			},
			// child: {
			// 	type: Object,
			// 	default: function() {
			// 		return {
			// 			name: 'Leo'
			// 		}
			// 	}
			// }
			resetFn: Function,
			userAge: Number
		},
		methods: {
			switchName() {
				return this.myName.split("").reverse().join("");
			},
			resetName() {
				this.myName = 'Max';
				this.$emit('nameWasReset', this.myName);
			}
		},
		created() {
			eventBus.$on('ageWasEdited', (age) => {
				this.userAge = age;
			});
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
