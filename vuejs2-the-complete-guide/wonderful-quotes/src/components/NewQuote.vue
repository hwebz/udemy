<template>
	<div class="row form">
		<form>
			<div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 text-center">
				<label>Quote</label>
				<textarea v-model="quote" rows="3" class="form-control"></textarea>
			</div>
			<div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 text-center">
				<button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				quote: ''
			};
		},
		methods: {
			createNew() {
				this.$emit('quoteAdded', this.quote);
				this.quote = '';
			}
		}
	}
</script>

<style scoped>
	 .form {
		border-bottom: 1px dashed #ccc;
		padding-bottom: 15px;
		margin: 15px auto;
	}
	button {
		margin-top: 15px;
	}
</style>