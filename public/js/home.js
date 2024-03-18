// console.log("fhkmsndf");
const texArea = document.getElementById("postTextarea");
const btnPost = document.getElementById("btnPost");
// console.log(btnPost);
texArea.addEventListener("keyup", function (e) {
  const textBox = e.target;
  const value = textBox.value.trim();
  if (value == "") {
    btnPost.disabled = true;
    return;
  }
  btnPost.disabled = false;
});
getPost();
async function getPost() {
  const url = "http://localhost:3000/api/posts";
  const res = await fetch(url);
  const posts = await res.json();
  posts.forEach((post) => {
    const message=document.querySelector('.messages')
    const content=createPost(post)
    message.innerHTML=content
    // console.log(content);
  });
}

btnPost.addEventListener("click", function (e) {
  e.preventDefault();
  const url = "http://localhost:3000/api/posts";
  const data = new URLSearchParams();
  data.append("content", texArea.value);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader(
    "content-Type",
    "application/x-www-form-urlencoded;charset=UTF-8"
  );
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const posts = JSON.parse(xhr.responseText);
    
    } else if (xhr.readyState === 4) {
      console.error("requset failed: " + xhr.status);
    }
  };
  xhr.send(data);
});

function createPost(post) {
  console.log(post);
  const img= post.postedBY.profilePic
  let data = `<div class="post" data-id="${post._id}">
                <div class="user-pic">
                  <img src='img' alt='Profile Image' width="100px"
                </div>
              </div>`;
  return data
}
