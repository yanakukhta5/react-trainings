import './Guestionnaire.css'
import {Block} from "./Block/Block"

function Guestionnaire(props){
 return (
  <div className="Guestionnaire">
   <h1>Анкета</h1>
   <Block questions={props.questions} />
  </div>
 )
}

export {Guestionnaire}