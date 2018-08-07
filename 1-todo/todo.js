// Vue.component('TodoItem', {
//   props: ['item'],
//   template: "<li>{{item}}</li>",
// })

var TodoItem = {
  props: ['item', 'index'],
  template: `<li @click="handleItemClick">{{item}}</li>`,
  methods: {
    handleItemClick() {
      this.$emit('delete', this.index)
    },
  }
}

var app = new Vue({
  el: '#app',
  components: {
    TodoItem,
  },
  data: {
    todos: [],
    inputValue: '',
  },
  methods: {
    submitTodo() {
      this.todos.push(this.inputValue)
      this.inputValue = ''
    },
    handleItemDelete(index) {
      this.todos.splice(index, 1)
    },
  }
})
