document.querySelector("p").remove();
let div = document.getElementsByClassName("our-element")[0];
let before = document.createElement("div");
before.className = "start";
before.title = "Start Elment";
before.setAttribute("data-value", "Start");
before.innerHTML = "Start";

let after = document.createElement("div");
after.className = "end";
after.title = "End Elment";
after.setAttribute("data-value", "End");
after.innerHTML = "End";

div.before(before);
div.after(after);
