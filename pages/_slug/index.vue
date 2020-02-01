<template>
  <div class="container">
    <main>
      <h1>{{post.title}}</h1>

      <div>
        <img :src="post.feature_image" />
      </div>

      <div class="contents">
        <p>{{ post.excerpt}}</p>
        <p>{{ post.excerpt}}</p>
      </div>

    </main>
  </div>
</template>

<script>
import { getSinglePost } from "~/api/posts";

export default {
  async asyncData({ params }) {
    const post = await getSinglePost(params.slug);
    return { post: post };
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
  margin: 0 auto;
   
  div {
    width: 90%;
    margin: 0 auto;
    img {
      width: 100%;
      border-radius: 0.5rem;
    }
  }
  .contents {
    width: 90%;
    box-shadow: 0px 2px 10px 0px #908888;
    color: #797575;
    background: white;
    padding: 10px 0;
    border-radius: 5px;
    p {
      margin-bottom: 5px ;
      padding: 10px;
      line-height: 22px;
    }
  }
}

main {
  padding: 20px;

  h1 {
    text-align: center;
    margin: 0.7em;
    text-transform: uppercase;
    font-size: 1.8em;
  }
}
</style>
