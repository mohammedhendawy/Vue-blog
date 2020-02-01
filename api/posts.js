//importing api for making dynamic pages

import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'https://demo.ghost.io',
    key: '22444f78447824223cefc48062',
    version: "v3"
  });
  

export async function getPosts(){
    return await api.posts
    .browse({
        limit: "all",
        include: "tags,authors"
    })
    .catch(err=>{
        console.error(err);
    })
}

export async function getSinglePost(postSlug){
    return await api.posts
    .read({
        slug: postSlug
    })
    .catch(err=>{
        console.error(err);
    })
}

