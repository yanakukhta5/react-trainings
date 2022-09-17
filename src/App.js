import logo from './logo.svg';
import './App.css';
import Questionnaire from './components/Guestionnaire/Guestionnaire';

function App() {
  const questions = [{
      question: "Сколько будет 1+1?",
      answer: '2',
    }, {
      question: "Сколько будет 2+1?",
      answer: '3',
    }, {
      question: 'Как зовут Андрея?',
      answer: 'Андрей'
    },
  ]
  return (
    <Questionnaire questions={questions} />
  );
}

export default App;
