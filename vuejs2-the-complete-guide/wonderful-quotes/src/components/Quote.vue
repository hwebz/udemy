<template>
	<div class="col-sm-6 col-md-4 col-lg-3">
		<div class="quote panel panel-body">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	
</script>

<style>
	.panel-body {
		font-family: 'Arizonia', cursive;
		font-size: 24px;
		color: #6e6e6e;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
		margin: 15px;
	}

	.quote {
		cursor: pointer;
	}

	.quote:hover {
		background-color: #ffe2e2;
	}
</style>