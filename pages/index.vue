<template>
  <div class="container">
    <main>
      <h1>Latest Posts</h1>
      <!--all data are extracted dynamically from api-->
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <img :src="post.feature_image" />
          <div class="content">
            <span>{{ post.authors[0].name}}</span>
            <h2>
              <nuxt-link :to="{path: post.slug}">{{post.title}}</nuxt-link>
            </h2>
            <p>{{ post.excerpt}}</p>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import { getPosts } from "~/api/posts";

//pass data of the post with api from api/posts
export default {
  async asyncData() {
    const posts = await getPosts();
    return { posts: posts };
  }
};
</script>

<style lang="scss" scoped>
    main {
      padding: 20px;
      h1 {
        text-align: center;
        margin-top: 0.7em;
        text-transform: uppercase;
        font-size: 1.8em;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          padding: 0.8rem;
          margin: 1rem 0;
          border-radius: 1em;
          background: white;
          box-shadow: 15px 21px 40px 0px rgba($color: #000000, $alpha: 0.04);

          img {
            width: 100%;
            border-radius: 0.5rem;
          }
          .content {
            padding: 0.8rem;
            a {
              font-weight: bold;
              font-size: 1.5rem;
              text-decoration: none;
              color: black;
              display: block;
            }
          }
        }
      }
    }
    @media only screen and (min-width: 768px) {
      main li {
        display: grid;
        grid-template-columns: 180px auto;
        grid-column-gap: 1em;
      }
    }
</style>
