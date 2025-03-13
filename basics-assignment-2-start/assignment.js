const task3Element = document.getElementById("task-3");

function noParameter() {
  alert("Panik");
}

function Parameter(n) {
  alert(n);
}

function threeParameter(s1, s2, s3) {
  let text = s1 + s2 + s3;

  console.log(text);
  alert(text);
  return text;
}

noParameter();
Parameter("hello");

task3Element.addEventListener("click", noParameter);

threeParameter("hello", "Peter", "Maus");
