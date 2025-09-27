// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "articles.json");
// myRequest.send();
// console.log(myRequest);
// myRequest.onreadystatechange = function () {
//   if (myRequest.readyState === 4 && myRequest.status === 200) {
//     console.log(myRequest.responseText);
//   }
// };
// =============================================================================
// let mainData = myRequest.p
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();
let container = document.createElement("div");
container.id = "data";
document.body.appendChild(container);
myRequest.onreadystatechange = function () {
  if (myRequest.readyState === 4 && myRequest.status === 200) {
    let mainData = JSON.parse(myRequest.responseText);
    console.log(mainData);
    for (let obj of mainData) {
      obj.category = "All";
    }
    // ==========================================================================
    for (let article of mainData) {
      let div = document.createElement("div");
      let title = document.createElement("h2");
      title.innerHTML = article.title;
      let body = document.createElement("p");
      body.innerHTML = article.body;
      let author = document.createElement("p");
      author.innerHTML = article.author;
      let category = document.createElement("p");
      category.innerHTML = article.category;
      div.appendChild(title);
      div.appendChild(body);
      div.appendChild(author);
      div.appendChild(category);
      container.appendChild(div);
    }
  }
};
