import React from "react";
import "./Summary.css"

function Summary({summaryShow, right, possible}){
 return <p className={`Summary ${summaryShow}`}>Правильных ответов: {right}/{possible}</p>
}

export {Summary}