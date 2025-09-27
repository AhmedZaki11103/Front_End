fetch("obj.json")
  .then((result) => {
    let objects = result.json();
    return objects;
  })
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
