<template>
  <div>
    <header>
      <div class="container">
        <div class="navbar">
          <nuxt-link to="/" class="logo">Home</nuxt-link>

          <nav>
            <ul>
              <li>
                <nuxt-link to="/posts">See Posts</nuxt-link>
              </li>
             
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <nuxt />
  </div>
</template>

<style lang='scss' >
html {
  font-family: lato;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body{
  background: #cececece;
}
.container {
  width: 90%;
  margin: 0 auto;
}
header {
  background: #9C84E8;
  padding: 1rem 0;
  text-align: center;
  a{
    font-weight: bold;
    font-size: 22px;
  }
}
.navbar {
  display: flex;
  justify-content: space-between;
  a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
}
nav {
  display: flex;
  justify-content: space-between;
  ul {
    list-style: none;
    display: flex;
    a {
      padding: 20px;
      font-weight: 600;
      font-size: 20px;
    }
  }
}


</style>
