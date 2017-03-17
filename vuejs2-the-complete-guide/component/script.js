// We only do have ONE Vue Instance
new Vue({
	el: '.app',
	data: {
		status: 'Critical'
	},
	template: '<p>Server Status: {{ status }}</p>'
});

// Create reusable component
// Registering Globally
var data = {
	status: 'Important'
};

Vue.component('my-component', {
	data: function() {
		// return data; // all object refer to one data
		return { // each obj has separated data
			status: 'Important'
		}
	},
	template: '<p>Server Status: {{ status }} <button @click="changeStatus">Change</button></p>',
	methods: {
		changeStatus: function() {
			this.status = 'Done';
		}
	}
});

new Vue({
	el: '#app'
});

new Vue({
	el: '#app2'
});

// Registering Locally
var other = {
	data: function() {
		// return data; // all object refer to one data
		return { // each obj has separated data
			status: 'Important'
		}
	},
	template: '<p>Other Server Status: {{ status }} <button @click="changeStatus">Change</button></p>',
	methods: {
		changeStatus: function() {
			this.status = 'Done';
		}
	}
}
new Vue({
	el: '#app3',
	components: {
		'other-component': other
	}
});