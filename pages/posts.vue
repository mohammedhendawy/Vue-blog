<template>
  <div class="container">
    <main>
      <h1>POSTS</h1>
     
      <div>
        <img v-for="img in images" v-bind:src="img" :key='img.id' />
      </div>
      <Form v-on:createTodo="createTodo" />
      <Todos v-bind:todos="todos" v-on:removeTodo="removeTodo" />
    </main>
  </div>
</template>

<script>
import { getSinglePost } from "~/api/posts";
import Form from "~/pages/form";
import Todos from "~/pages/Todos";
let todos = [
  {
    id: "1",
    name: "Created with NUXT by Mohammed Fathi",
    done: false
  },
  {
    id: "2",
    name: "This my first Blog App",
    done: false
  },
  {
    id: "3",
    name: "Thanks for Checking my app",
    done: false
  }
];
export default {
  components: {
    Form,
    Todos
  },
  data: function() {
    return {
      todos: todos,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxGohqFTTpgfixwIckUhsrQ9IY4UrynxmZTiXjuYd6ssb7-5iz"
      ]
    };
  },
  methods: {
    createTodo: function(todo) {
      let todoObject = {
        id: Math.floor(Math.random() * 10000000),
        name: todo,
        done: false
      };
      this.todos.push(todoObject);
    },
    removeTodo: function(id) {
      this.todos = this.todos.filter(todo => todo.id != id);
    }
  },
  async asyncData({ params }) {
    const post = await getSinglePost(params.slug);
    return { post: post };
  }
};
</script>

<style lang="scss" scoped>
    h1 {
      text-align: center;
      margin: 1em 0;
      text-transform: uppercase;
    }
    div {
      width: 80%;
      display: flex;
      justify-content: center;
      margin: 0 auto 20px;
      img{
        width: 100%;
      }
    }
</style>
