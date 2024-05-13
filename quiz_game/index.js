// let quiz = fetch("http://quiz-app-by-saad.surge.sh/");

// FETCH THE object.

let quiz = fetch("https://opentdb.com/api_category.php");

quiz
  .then((value) => {
    console.log(value.status);
    return value.json();
  })
  .then((value) => {
    let question_type = value.trivia_categories;
    console.log(question_type);

    var selectElement = document.getElementById("topic_name");

    question_type.forEach((data) => {
      let option = document.createElement("option");
      option.value = data.id;
      option.innerText = data.name;
      selectElement.appendChild(option);
    });
  });

let fetchQnButton = document.getElementById("question");

fetchQnButton.addEventListener("click", () => {
  let {value: selectedValue} = document.getElementById("topic_name");
  
  //take the number of question.
  let selectElement1 = document.getElementById("question_number");
  const qnNo = selectElement1.value;
  const {value:difficulty} = document.querySelector(".mode select")  
  let questionData = fetch(
    `https://opentdb.com/api.php?amount=${qnNo}&category=${selectedValue}&difficulty=${difficulty}`
  );

  questionData
    .then((value) => {
      return value.json();
    })
    .then((value) => {
      console.log(value.results)
      const arrStr = encodeURIComponent(JSON.stringify(value.results))
      window.location.href = `/questions.html?data=${arrStr}`
    });
});
