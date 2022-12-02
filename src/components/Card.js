import {useRef} from "react";

function Card(props){
    /* these just to reference the value we enter in the < input ref=  */


    const idInput= useRef();
    const productInput= useRef();
    const priceInput= useRef();
    const aisleInput= useRef();
    const binInput= useRef();
    const dateInput= useRef();
    const statusInput= useRef();



    function submitHandler(event){
        /* event and prevent Default just fot the system  */

        event.preventDefault();
        const enteredId= idInput.current.value
        const enteredProduct= productInput.current.value
        const enteredPrice= priceInput.current.value
        const enteredAisle= aisleInput.current.value
        const enteredBin= binInput.current.value
        const enteredDate= dateInput.current.value
        const enteredStatus= statusInput.current.value

        /* we are writing the list in json  */

        const list={
            id:enteredId,
            product:enteredProduct,
            price: enteredPrice,
            aisle:enteredAisle,
            bin:enteredBin,
            date: enteredDate,
            status:enteredStatus


        };
        /* we are going to execute the pass funvtion and provid the json list  */
        props.onAdd(list);
    }


    return(
                /* once we click save we will execute the submiteHandler  */

        <form onSubmit={submitHandler}>
         <table>
            <thead>
            <tr>
                <th>
                <label htmlFor="id">Id</label>
                </th>

                <th>
                <label htmlFor="product">Product</label>
                </th>
                
                
                <th>
                <label htmlFor="price">Price</label>
            

                </th>
                <th>
                <label htmlFor="aisle">Aisle</label>
           
                    
                </th>
                <th>
                <label htmlFor="bin">Bin</label>
           
                    
                </th>
                <th>
                <label htmlFor="date">Date</label>
            
                    
                </th>
                <th>
                <label htmlFor="status">Status</label>
                    
                </th>

            </tr>
            </thead>

            <tbody>
            <tr>
                <td>
                <input type="text" placeholder="Please write here" id="id" ref={idInput}></input>
                </td>
                <td>
                <input type="text" placeholder="Please write here" id="product" ref={productInput}></input>
                </td>

                <td>
                <input type="text" placeholder="Please write here"id="price" ref={priceInput}></input>
                </td>
                <td>
                <input type="text" placeholder="Please write here" id="aisle"ref={aisleInput}></input>
                    
                </td>
                <td>
                <input type="text" placeholder="Please write here" id="bin" ref={binInput}></input>
                    
                </td>
                <td>
                <input type="text" placeholder="Please write here" id="date" ref={dateInput}></input>
                    
                </td>
                <td>
                
           
                <input type="text" placeholder="Please write here" id="status"ref={statusInput}></input>
                    
                </td>
           
            </tr>
            </tbody>
            

             
           

            

            

            

            
            </table>
            <button>Save</button>



            
        </form>

    );
}
export default Card;