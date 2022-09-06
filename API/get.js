document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUsers").addEventListener("click", getUsers);
document.getElementById("getPosts").addEventListener("click", getPosts);
document.getElementById("addPosts").addEventListener("submit", addPosts);

function getText() {
  fetch("sample.txt")
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
    });
  // or--------------
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => console.log(data));
  document.getElementById("output").innerHTML = data;
}

function getUsers() {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2> Users</h2>";
      console.log(data);
      data.forEach(function (user) {
        output += `
        <ul class="list-group mb-2">
        <li class="list-group-item list-group-item-primary"> id: ${user.id}</li>
        
        <li class="list-group-item"> name: ${user.name}</li>
        <li class="list-group-item"> surname: ${user.email}</li>
        </ul>
        `;
      });
      document.getElementById("output").innerHTML = output;
      console.log("this is output:" + output);
    });
}

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2 class="m-4"> Posts</h2>';
      console.log(data);
      data.forEach(function (post) {
        output += `
        <div class="card card-body mb-3">
        <div class="fw-bolder p-3 border border-bottom">
        UserID:${post.userId}.  Post ID: ${post.id}
        </div>  
        <div>
        ${post.title}
        </div>      
        <div>
        ${post.body}
        </div> 
        </div>
        `;
      });
      document.getElementById("output").innerHTML = output;
      console.log("this is output:" + output);
    });
}

function addPosts(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
