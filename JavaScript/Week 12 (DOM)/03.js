let result = document.getElementsByClassName("result")[0];
let input = document.getElementsByName("dollar")[0];
console.log(input);
let EGP = 0,
USD = 0;

input.oninput = function () {
    let v = input.value;
    USD = v;
    EGP =(48.25 * USD).toFixed(2) ;
    result.innerHTML = `{${USD}} USD Dollar = {${EGP}} Egyptian Pound`;
  // let value = input.value;
};

