import classes from"./PopScreen.module.css";

function PopScreen(props){
   




    return(
        <div className={classes.backdrop}>
             
            <h1>Are you sure you want to delete the card?</h1>
            <button>Cancel</button>
            <button onClick={props.cancel}>Save</button>
        </div>


    );

}
export default PopScreen