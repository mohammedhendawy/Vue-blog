<template>
  <main>
    <!--Add Comment form -->
    <input type="text" name="todoInput" v-model="todoValue" placeholder="Type Your Comment" />
    <button class="submit" v-on:click="createTodo">+</button>
  </main>
</template>

<script>

    export default {
    name: "Form",
    data: function() {
        return {
        todoValue: ""
        };
    },

    //add data from
    methods: {
        createTodo: function() {
        this.$emit("createTodo", this.todoValue);
        this.todoValue = "";
        }
    }
    };
</script>

<style lang="scss" scoped>
    main {
    display: flex;
    padding: 20px 0;
    width: 70%;
    margin: auto;
    input {
        flex: 1;
        height: 50px;
        box-sizing: border-box;
        text-indent: 15px;
        font-size: 20px;
    }
    .submit {
        width: 50px;
        height: 50px;
        color: #ffffff;
        font-size: 28px;
        line-height: 1;
        font-weight: 700;
        background-color: #9C84E8;
        border: none;
        outline: none;
        cursor: pointer;
        &:hover {
        background-color: lighten($color: #9C84E8, $amount: 10);
        }
        &:active {
        background-color: darken($color: #9C84E8, $amount: 5);
        }
    }
    }
</style>

