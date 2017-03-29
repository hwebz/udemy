import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		// counter: 0,
		value: 0,
		value2: 0
	},
	// getters: {
		/*doubleCounter: state => {
			return state.counter * 2;
		},
		stringCounter: state => {
			return state.counter + " Clicks";
		},*/
		// value: state => {
		// 	return state.value
		// },
		// value2: state => {
		// 	return state.value2
		// }
	// },
	getters,
	// mutations: {
		/*increment: (state, payload) => {
			state.counter += payload;
		},
		decrement: state => {
			state.counter--;
		},*/
		// updateValue: (state, payload) => {
		// 	state.value = payload;
		// },
		// updateValue2: (state, payload) => {
		// 	state.value2 = payload;
		// }
	// },
	mutations,
	// actions: {
		/*increment: ({ commit }, payload) => {
			commit('increment', payload);
		},
		decrement: ({ commit }) => {
			commit('decrement');
		},
		asyncIncrement: ({commit}, payload) => {
			setTimeout(() => {
				commit('increment', payload.by);
			}, payload.duration);
		},
		asyncDecrement: ({commit}) => {
			setTimeout(() => {
				commit('decrement');
			}, 1000);
		},*/
		// updateValue({commit}, payload) {
		// 	commit('updateValue', payload);
		// },
		// updateValue2({commit}, payload) {
		// 	commit('updateValue2', payload);
		// }
	// },
	actions,
	modules: {
		counter
	}
});