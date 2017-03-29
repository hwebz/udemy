<template>
    <div>
    	<h3>Some User Details</h3>
    	<p>Hi, User {{ id }}</p>
    	<!-- <router-link class="btn btn-primary" tag="button" :to="'/user/edit/' + $route.params.id">Edit User</router-link> -->
    	<router-link class="btn btn-primary" tag="button" :to="link">Edit User</router-link>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				id: this.$route.params.id,
				link: { 
					name: 'userEdit', 
					params: { 
						id: this.id 
					}, 
					query: { 
						locale: 'en', 
						q: 100 } 
					},
					hash: '#data'
			}
		},
		watch: {
			'$route'(to, from) {
				this.id = to.params.id;
			}
		},
		beforeRouteEnter(to, from, next) {
			if (true) {
				next();
			} else {
				next(false);
			}
		}
	}
</script>