import './PopUp.css';

function PopUp(props){
    return(
        <div className="outer">
            <div className="inner">
                <h1 className="close" onClick={props.onClick}>X</h1><br/>
                <br/>
                <span className="symbol">&#10003;</span>
                <h2 className="quotes">You have successfully <br/>signed In</h2>
            </div>

        </div>
    )
}

export default PopUp;