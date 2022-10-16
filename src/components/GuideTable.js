import React from "react"
import '../styles/index.css';
import '../styles/GuideTable.css';

function GuideTable(props) {
    return (
      <div className="GuideTable">{props.content}</div>
    );
  }
  
  export default GuideTable;