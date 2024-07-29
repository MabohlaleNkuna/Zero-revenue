import imgCheck from './checkmarkImg.svg';
function Checkmark() {

    return (
      <div className="checkmarkIm">
         <img src={imgCheck} style={{ fill: "white" }} alt="card-checkm"/>
      </div>
    );
  }
  
  export default Checkmark;