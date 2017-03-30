import Home from './components/Home.vue'
import Porfolio from './components/porfolio/Porfolio.vue';
import Stocks from './components/stocks/Stocks.vue';

export const routes = [
	{ path: '/', component: Home },
	{ path: '/porfolio', component: Porfolio },
	{ path: '/stocks', component: Stocks }
]