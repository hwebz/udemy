<template>
	<app-server-status></app-server-status>
</template>

<script>
	import ServerStatus from './ServerStatus.vue'
	export default {
		components: {
			'app-server-status': ServerStatus
		}
	}
</script>