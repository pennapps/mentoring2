import './index.css';
import './GuideTable.css';

function GuideTable(props) {
    return (
      <div className="GuideTable">{props.content}</div>
    );
  }
  
  export default GuideTable;