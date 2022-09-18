
import './App.css';
import { Guestionnaire } from './components/Guestionnaire/Guestionnaire';

const questions = [{
      question: "Сколько будет 1+1?",
      answer: '2',
    }, {
      question: "Сколько будет 2+1?",
      answer: '3',
    }, {
      question: 'Как зовут Андрея?',
      answer: 'Андрей'
    },]
    
function App() {
  return (
    <Guestionnaire questions={questions} />
  );
}

export default App;
