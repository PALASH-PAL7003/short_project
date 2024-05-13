// Get the URL parameter value
const urlParams = new URLSearchParams(window.location.search);
const dataParam = urlParams.get('data');

// Decode the URL parameter value and parse the JSON
const decodedData = (JSON.parse(decodeURIComponent(dataParam)));
console.log(decodedData);

// Now, decodedData contains the original array or object
// You can use it as needed in your code
let questionsContainer = document.querySelector(".questioncontainer");
decodedData.forEach(questionData => {
   let questionDiv = document.createElement('div');

    // Set the question text
    let questionPara = document.createElement('p');
    questionPara.textContent = "Question: " + questionData.question;
    questionDiv.appendChild(questionPara);
    console.log(questionPara);

    // Display correct and incorrect answers
    let optionsPara = document.createElement('q');
    optionsPara.textContent = "Options: " + questionData.correct_answer + ", " + questionData.incorrect_answers;
    questionDiv.appendChild(optionsPara);
    console.log(optionsPara);

    // Append the questionDiv to the main container
    questionsContainer.appendChild(questionDiv);
});

