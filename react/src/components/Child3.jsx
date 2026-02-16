import { useContext } from "react"
import { UserContext } from "../App"


export default function Child3(){

const {count , setCount} = useContext(UserContext);

    return (
        <>
        
        <h4>child 3 </h4>
        <br/>
        <h3>{count}</h3>

        <button onClick={()=>setCount(count + 1)} >Count</button>
        </>
    )
}