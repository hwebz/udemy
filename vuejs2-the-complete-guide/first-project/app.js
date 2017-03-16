new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: []
	},
	methods: {
		startGame: function() {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},
		attach: function() {
			var damage = this.calculateDamage(3, 10);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				heal: 0,
				damage: damage
			});
			if (this.checkWin()) return;

			this.monsterAttacks();
		},
		specialAttach: function() {
			var damage = this.calculateDamage(10, 20);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				heal: 0,
				damage: damage
			});
			if(this.checkWin()) return;

			this.monsterAttacks();
		},
		heal: function() {
			if (this.playerHealth <= 90) {
				this.playerHealth += 10;
			} else {
				this.playerHealth = 100;
			}
			this.turns.unshift({
				isPlayer: true,
				heal: 10,
				damage: 10
			});
			this.monsterAttacks();
		},
		stopGame: function() {
			this.gameIsRunning = false;
		},
		monsterAttacks: function() {
			var damage = this.calculateDamage(5, 12);
			this.playerHealth -= damage;
			this.turns.unshift({
				isPlayer: false,
				heal: 0,
				damage: damage
			});
			this.checkWin();
		},
		calculateDamage: function(min, max) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		checkWin: function() {
			if (this.playerHealth <= 0 || this.monsterHealth <= 0) {
				if (confirm('You '+ (this.playerHealth <= 0 ? 'lost' : 'won') +'! New game?')) {
					this.startGame();
				} else {
					this.stopGame();
				}
				return true;
			}
			return false;
		}
	}
});