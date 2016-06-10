import * as axios from 'axios';
import questions from './questions.json'; // eslint-disable-line


class QuestionsApi {
  static getAllQuestions() {
    return new Promise((resolve, reject) => {
      axios.get(questions)
        .then(response => {
          resolve(response.data.questions);
        })
        .catch(error => reject(error));
    });
  }

  static getAnswer(question) {
    return new Promise((resolve, reject) => {
      axios.get(questions)
        .then(response => {
          const answer = response.data.answers.filter(answer => {
            return !!answer[question];
          });
          resolve(answer[0][question]);
        })
        .catch(error => reject(error));
    });
  }
}

export default QuestionsApi;
