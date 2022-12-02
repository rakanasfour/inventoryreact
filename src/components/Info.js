import classes from "./Info.module.css";
function Info(props){


    return (
    <div>
      <table className={classes.table}>
            <thead>

           
             <tr>
                <th>
                <label>Id</label>

                </th>
                <th>
                <label>Product</label>
           
                    
                </th>
                <th>
                <label>Price</label>
                    
                </th>
                <th>
                <label>Aisle</label>
            
                    
                </th>
                <th>
                <label>Bin</label>
            
                    
                </th>
                <th>
                <label>Date</label>
          
                    
                </th>
                <th>
                <label>Status</label>
           
                    
                </th>
                
             </tr>
             </thead>
             <tbody>
             <tr>
                <td>
                <p>{props.id}</p>
                </td>
                <td>
                <p>{props.product}</p>
                </td>
                <td>
              <p>{props.price}</p>

                </td>
                <td>
                <p>{props.aisle}</p>
                    
                </td>
                <td>
                <p>{props.bin}</p>
                    
                </td>
                <td>
                <p>{props.date}</p>
                    
                </td>
                <td>
                <p>{props.status}</p>
                </td>
             </tr>
             </tbody>
            

           

          

           

           

         

        

           </table>

    </div>


      
    
            

       

    );
}
export default Info;