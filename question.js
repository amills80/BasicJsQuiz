function Question(query, answer, choices){
  this.query = query;
  this.answer = answer;
  this.choices = choices;
}

Question.prototype.isRightChoice = function(choice) {
  return this.answer === choice;
}
