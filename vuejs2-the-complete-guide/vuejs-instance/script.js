var data = {
	title: 'The VueJS Instance',
	showParagraph: false
}
var vm1 = new Vue({
	el: '#app1',
	data: data,
	methods: {
		show: function() {
			this.showParagraph = true;
			this.updateTitle('The VueJS Instance (Updated)!');
			console.log(this.$refs);
			this.$refs.myButton.innerText = "Test";
		},
		updateTitle: function(title) {
			this.title = title;
		}
	},
	computed: {
		lowercaseTitle: function() {
			return this.title.toLowerCase();
		}
	},
	watch: {
		title: function(value) {
			alert('Title changed, new value: ' + value);
		}
	}
});

// Change actual DOM, not VueJS template
// setTimeout(function() {
// 	vm1.title = 'Changed by Timer';
// }, 3000);
console.log(vm1.$data === data);
vm1.$refs.heading.innerText = 'Something else outside';

var vm2 = new Vue({
	el: '#app2',
	data: {
		title: 'The second instance'
	},
	methods: {
		onChange: function() {
			vm1.title = 'Changed!';
		}
	}
});

// Just mount 1 times and can't duplicate
var vm3 = new Vue({
	el: 'greet', // el: '.greet'
	template: '<h1>Greet!</h1>'
});

// 1.
// v3.$mount('app3');
// 2.
// vm3.$mount();
// document.getElementById('app3').appendChild(vm3.$el);

// Use component to use multiple times
Vue.component('welcome', {
	template: '<h1>Welcome!</h1>'
});

var vm4 = new Vue({
	el: '#app3'
});