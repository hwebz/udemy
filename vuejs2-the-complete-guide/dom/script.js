new Vue({
  el: '#app',
  data: {
    title: 'Hello World',
    link: 'http://google.com',
    finishedLink: '<a href="http://google.com">Google</a>',
    counter: 0,
    x: 0,
    y: 0,
    name : 'Max'
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    sayHello: function(event) {
      return "Welcome you to our site";
    },
    sayHelloWithTitle: function() {
      this.title = "Hello!";
      return "Hello, " + this.title;
    },
    increase: function(step, event) {
      this.counter += step;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
//     dummy: function(event) {
//       event.stopPropagation();
//     }
    alertMe: function(event) {
      alert(event.target.value);
    }
  }
});

new Vue({
  el: '#app2',
  data: {
    counter: 0,
    secondCounter: 0
  },
  computed: {
    output() {
      console.log('Computed');
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  },
  watch: {
    counter: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 2000);
    }
  },
  methods: {
    result() {
      console.log('Method');
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5'
    }
  }
});

new Vue({
  el: '#app3',
  data: {
    link: 'http://google.com'
  },
  methods: {
    changeLink: function() {
      this.link = 'http://tutsplus.com';
    }
  }
});

new Vue({
  el: '#app4',
  data: {
    attachRed: false,
    attachGreen: true,
    attachBlue: false,
    color: 'green'
  },
  computed: {
    divClasses: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      }
    }
  }
});

new Vue({
  el: '#app5',
  data: {
    color: 'gray',
    width: 50
  },
  computed: {
    myStyle: function() {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  }
})