var posts=["post/2023/hello-world/","post/2024/lc/","post/2024/srdfq/","post/2023/srbgm/","post/2023/zdsny/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };