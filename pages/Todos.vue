<template>
  <section id="todos">
    <div class="todo" v-for="(todo) in todos" v-bind:key="todo.id">
      <label for="done">{{ todo.name }}</label>
      <button class="remove" v-on:click="() => removeTodo(todo.id)">X</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Todos",
  props: ["todos"],
  methods: {
    removeTodo: function(id) {
      this.$emit("removeTodo", id);
    }
  }
};
</script>

<style lang="scss" scoped>
#todos {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  .todo {
    margin: 15px;
    padding: 15px;
    background: #fff;
    display: flex;
    color: #6b6363;
    width: 100%;
    label {
      flex: 1;
    }
    .remove {
      background: #ff7675;
      border: none;
      color: white;
      padding: 7px 10px;
      cursor: pointer;
      font-weight: bold;
      margin-left: 10px;
    }
  }
}
</style>