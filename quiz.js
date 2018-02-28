function Quiz() {
  this.score = 0;
  this.questions = questions;
  this.currentQuestionIndex = 0;
}

Quiz.prototype.add = function(question) {
  this.questions.push(question);
}

Quiz.prototype.guess = function(answer) {
  if(this.getCurrentQuestion().isRightChoice(answer)) 
  {
    this.score++;
  }
  this.currentQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function () {
  return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function () {
  return this.currentQuestionIndex >= this.questions.length;
};
//
//Quiz.prototype.renderInElement = function (list) {
//  list.innerHTML = "";
//  for (var i = 0; i < this.choices.length; i++)
//  {
//    list.innerHTML += this.choices[i].toHTML
//  }
//};