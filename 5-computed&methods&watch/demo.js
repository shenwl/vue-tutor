var vm = new Vue({
  el: '#app',
  data: {
    firstName: "Allen",
    lastName: "Iverson",
    fullName: "Allen Iverson",
    age: 20,
  },
  // 计算属性 逻辑写在计算属性中，而不是模板中
  // 内置缓存，依赖的数据不变就不会重新求值
  // 计算属性有getter(get)和setter(set)，不写默认为getter
  // computed: {
  //   fullName() {
  //     console.log('****执行了fullName****')
  //     return this.firstName + " " + this.lastName
  //   },
  // },
  // methods: {
  //   // 方法没有缓存，性能不如computed
  //   fullName() {
  //     return this.firstName + " " + this.lastName
  //   }
  // },
  // 侦听器
  // watch也具备缓存机制，但推荐使用更简洁的computed
  watch: {
    firstName: () => {
      console.log('****watch firstName****')
      this.fullName = this.firstName + ' ' + this.lastName
    },
    lastName: () => {
      console.log('****watch lastName****')
      this.fullName = this.firstName + ' ' + this.lastName
    }
  },
})

// test
setTimeout(() => {
  vm.$data.age = 21
}, 1000)

setTimeout(() => {
  vm.$data.firstName = "AI"
}, 2000)