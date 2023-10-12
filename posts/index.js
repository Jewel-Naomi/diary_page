
let form = document.getElementById("form");
let content = document.getElementById("content");
let date = document.getElementById("date");
let title = document.getElementById("title");
let posts = document.getElementById("posts");
let msg = document.getElementById("msg");
let save = document.getElementById("save");

form.addEventListener("save", (e) => {
    e.preventDefault();
    console.log("button clicked");
  
    formValidation();
  });
  
  let formValidation = () => {
    if (content.value === "") {
        msg.innerHTML = "content cannot be blank";
        console.log("failure");
      } else {
        console.log("successs");
        msg.innerHTML = "";
        acceptData();
      }
  };

  let data = {};

  let acceptData = () => {
    data["text"] = content.value;
  console.log(data);
  createPost();
  };

  let createPost = () => {
    posts.innerHTML += `<div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fa-regular fa-pen-to-square" style="color: white;"></i>
      <i onClick="deletePost(this)" class="fa-regular fa-pen-to-square" style="color: white;"></i>
    </span>
  </div>`;
  content.value;
  };

  let deletePost = (e) => {
    e.parentElement.parentElement.remove();
  };

  let editPost = (e) => {
    content.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };