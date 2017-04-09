// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import './main.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	data: {
		list: JSON.parse(localStorage.getItem('item')) || [],
		newTodo: ''
	},
	methods: {
		addList: function() {
			this.list.push(this.newTodo);
			localStorage.setItem('item', JSON.stringify(this.list));
			this.newTodo = '';
		},
		removeList: function(e) {
			console.log(e.target.innerText);
			this.list.splice(this.list.indexOf(e.target.innerText), 1);
			localStorage.setItem('item', JSON.stringify(this.list));

		}
	}
})
