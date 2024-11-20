document.addEventListener("click", (event) => {
    var result = []
    var allQuestions = document.querySelector(".wpProQuiz_list").querySelectorAll(".wpProQuiz_listItem")
    for (let index = 0; index < allQuestions.length; index++) {
        var currQues = allQuestions[index]
        var question = currQues.querySelector(".wpProQuiz_question_text").innerText
        var answerElements = currQues.querySelectorAll(".wpProQuiz_questionList .wpProQuiz_questionListItem")
        var answers = []
        for (let j = 0; j < answerElements.length; j++) {
            var answerText = cleanEscapedStrings(answerElements[j].querySelector("label").innerText)
            console.log(answerText);
            answers.push(cleanEscapedStrings(answerText))
        }
        result.push({
            question: cleanEscapedStrings(question),
            answers
        })
    }

    // Send the data to the background script
    chrome.runtime.sendMessage({ action: "storeData", data: result });
});

function removeNewlinesAndTabs(str) {
    return str.replace(/[\n\t\\]/g, '');
}

function cleanEscapedStrings(text) {
    // Replace all occurrences of backslashes followed by special characters
    return text.replace(/[\n\t\\]/g, '')
               .replace(/\\\\/g, "\\")
               .replace(/\\"/g, '"')
               .replace(/\\'/g, "'")
               .replace(/\\n/g, '\n')
               .replace(/\\r/g, '\r');
  }