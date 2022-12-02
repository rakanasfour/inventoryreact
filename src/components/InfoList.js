import Info from "./Info";
import{useState,useEffect} from"react"

function InfoList(){

    const [isLoading,setIsLoading] = useState(false);
    const [loadedInfo,setLoadedInfo] = useState([])

    useEffect (()=>{

        setIsLoading(true);
        /* '' */

        fetch('https://inventory.herokuapp.com/inventorys/getAll').then(response=>{
       /* we are getting the response in json */
        return response.json();

    }).then ((data) =>{
        /* we are created an array to store each info in the infos */

        const infos= []

        /* we are extracting  the json response  json */
        for( const key in data){
            
            const info = {
                id:key,
                ...data[key]
                
            };
        /* we are adding each info into infos */

        infos.push(info);

        }



        setIsLoading(false);
        /* we passes all the data to Loadedinfo */

        setLoadedInfo(infos)
    });




    }, [])
    

    if (isLoading){
        <section>
            <p>loading...</p>


        </section>
    }

    return (
        

        <div>

        <ul >
            {/* we are passing the loadedinfo  array to the compponent */}
        {loadedInfo.map(infos => <Info  key={infos.id} product={infos.product} price={infos.price} aisle={infos.aisle} bin={infos.bin} date={infos.date} status={infos.status}></Info> )}
         
        </ul>

        </div>
                    
        
    );
}
export default InfoList;