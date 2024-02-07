var posts=["post/2023/hello-world/","post/2023/zdsny/","post/2024/lc/","post/2023/srbgm/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };