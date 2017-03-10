var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('Reducers', () => {
	describe('searchTextReducer', () => {
		it('should set searchText', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'dog'
			};
			var res = reducers.searchTextReducer(df(''), df(action));

			expect(res).toEqual(action.searchText);
		});
	});

	describe('showCompletedReducer', () => {
		it('should toggle showCompleted', () => {
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			};
			var res = reducers.showCompletedReducer(df(false), df(action));

			expect(res).toBe(true);
		});
	});

	describe('todosReducers', () => {
		it('should add new todo', () => {
			var action = {
				type: 'ADD_TODO',
				todo: {
					id: 'abc123',
					text: 'Something to do',
					completed: false,
					createdAt: 12321
				}
			};
			var res = reducers.todosReducer(df([]), df(action));

			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(action.todo);
		});

		it('should toggle todo', () => {
			var todos = [{
				id: 123,
				text: 'Something',
				completed: true,
				createdAt: 123,
				completedAt: 125
			}];
			var action = {
				type: 'TOGGLE_TODO',
				id: 123
			};

			var res = reducers.todosReducer(df(todos), df(action));

			expect(res[0].completed).toEqual(false);
			expect(res[0].completedAt).toEqual(undefined);
		});
		// defined todos array with realistic todo item
		// generate action
		// call reducer and assert completed flipped

		it('should add existing todos', () => {
			var todos = [{
		      id: '111',
		      text: 'anything',
		      completed: false,
		      completedAt: undefined,
		      createdAt: 33000
		    }];
		    var action = {
		      type: 'SET_TODOS',
		      todos
		    };
		    var result = reducers.todosReducer(df([]), df(action));

		    expect(result.length).toEqual(1);
		    expect(result[0]).toEqual(todos[0]);
		});
	});
});