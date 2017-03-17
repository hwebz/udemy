<template>
	<div>
		<p>Server Status: {{ status }} <button @click="changeStatus">Change</button></p>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				status: 'Critical'
			}
		},
		methods: {
			changeStatus() {
				this.status = 'Done';
			}
		}
	}
</script>