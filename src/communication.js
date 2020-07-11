exports.say = {
  greeting: () => console.log('Welcome to the Brain Games'),
  rules: () => console.log('Answer "yes" if the number is even, otherwise answer "no".'),
  cucces: () => console.log('Correct!'),
  answer: (answer, name) => console.log(`${answer} is wrong answer ;(. Correct answer was ${answer ? 'yes' : 'no'}. Let's try again, ${name}!`),
  question: (question) => console.log(`Question: ${question}`),
  hello: (name) => console.log(`Hello, ${name}`),
};
