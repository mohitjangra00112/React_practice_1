

export default function Logout({ setIsLogged}){

    return(
        <>
     
             <button onClick={()=>setIsLogged(false)} >Logout</button>

        </>
    )
}