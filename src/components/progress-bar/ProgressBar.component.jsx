import "./ProgressBar.styles.scss"

const ProgressBar = ({ progress }) => {
    return (
      <div className="outer-bar">
        <div className="inner-bar" style={{ width: `${progress}%`, backgroundColor: "#33ddff"}}></div>
      </div>
    );
  }
  
  export default ProgressBar;
  