let myPromise = new Promise((resolve, reject) => {
  let myRequest = new XMLHttpRequest();
  myRequest.open("GET", "obj.json");
  myRequest.send();
  myRequest.onload = () => {
    if (myRequest.readyState === 4 && myRequest.status === 200) {
      resolve(JSON.parse(myRequest.responseText));
    } else {
      reject(Error("API Is Wrong"));
    }
  };
})
  .then(
    (resolveValue) => {
      return resolveValue;
    },
    (rejectValue) => console.log(rejectValue)
  )
  .then((ten) => {
    ten.length = 5;
    return ten;
  })
  .then((five) => {
    five.forEach((element) => {
      let div = document.createElement("div");
      let title = document.createElement("h3");
      title.innerHTML = element.title;
      div.appendChild(title);
      let description = document.createElement("p");
      description.innerHTML = element.description;
      div.appendChild(description);
      document.body.appendChild(div);
    });
  });
