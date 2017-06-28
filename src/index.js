var page = require('page');

var main = document.getElementById('main-container');

page('/', (ctx, next) => {
  main.innerHTML = 'Home'; // diga home
});

page('/signup', (ctx, next) => {
  main.innerHTML = 'Signup'; // diga signup
});

page('/signin', (ctx, next) => {
  main.innerHTML = 'Signin'; // diga signup
});

page();
