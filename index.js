var feet = document.getElementById("feet");
var inch = document.getElementById("inch");
feet.addEventListener("input", function () {
  let f = this.value;
  let i = f * 12;
  inch.value = i;
});
inch.addEventListener("input", function () {
  let i = this.value;
  let f = i / 12;
  if (!Number.isInteger(f)){
    f = f.toFixed(2);
  };
  feet.value = f;
});
var kg = document.getElementById("kg");
var pound = document.getElementById("pound");
kg.addEventListener("input", function () {
  let a = this.value;
  let b = a * 2.205;
  pound.value = b;
});
pound.addEventListener("input", function () {
  let b = this.value;
  let a = b / 2.205;
  if (!Number.isInteger(a)){
    a = a.toFixed(4);
  };
  kg.value = a;
});
