var questions = [
  new Question("How old is Erika?", "42", ["38", "42", "old"]),
  new Question("Who is the boss?", "Erika", ["Erika", "Alan", "Eli"]),
  new Question("Did you brush your teeth?", "Yes", ["Yes", "No", "Yes"])
];

var quiz = new Quiz(questions);

QuizUI.displayNext();