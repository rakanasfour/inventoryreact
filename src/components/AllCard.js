import Card from "./Card";
import PopScreen from "./PopScreen";
import {useState} from "react";
import{useNavigate} from "react-router-dom";
function AllCard(){

 /*we need to take us to another page */
    const navigate = useNavigate();
    const [open,setOpen] = useState(false);

    function Add(list){
        /* we add person.json */

        fetch('https://inventory.herokuapp.com/inventorys/add',
        /* we are describing the method is because we are posting */
        {
            method:"POST",
            body:JSON.stringify(list),
            /* this is extra some website required this */
            headers:{
                "Content-Type": "application/json"
            }
        }
        ).then (()=>{
             /*If we clicked save it will take use to this page */
            navigate("/displayinfo");
            
           



        })

    }

    function displayPopScreen(){
       /* to display the pop screen*/
            setOpen(true);
          
        
    }

    function cancelScreen(){
        /* to cancel  display the pop screen*/
        setOpen(false)
    }

   


    return(
        <div>

            <Card onAdd={Add}></Card>
           
            {/*/if open is true display the popscreen component */}
            {open &&  <PopScreen cancel={cancelScreen}></PopScreen>}
           
        
            
            <button onClick={displayPopScreen}> delete Card</button>

        </div>
    );

}
export default AllCard;