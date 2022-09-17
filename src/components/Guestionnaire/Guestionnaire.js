import Title from "./Title"
import './Guestionnaire.css'
import GuestionsBlock from "./GuestionsBlock"

export default function Questionnaire(props){
 return (
  <div className="Guestionnaire">
   <Title />
   <GuestionsBlock questions={props.questions} />
  </div>
 )
}