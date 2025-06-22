import axios from "axios"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import './viewitem.css'

export default function ViewItem(){
    

    let [items,setItems]=useState([])
    useEffect(()=>{
        async function fetchdata(){
            try{
            const res=await axios.get('https://stored-board-server-api.onrender.com/storeboard/viewitem');
            console.log(res.data);
            setItems(res.data);
            }catch(err){
                console.log(err);
            }
        }

        fetchdata();
    },[])
    return (
            <div className="board h-[89%] w-full mt-1 ">
              <div className="items h-full w-full p-4 flex ">
            {items.map(item => (
                <Link to={`/storeboard/viewitem/${item._id}`} sx={{}}>
                <div className="card h-[40%] w-auto m-2  flex flex-col items-center gap-3 rounded cursor-pointer" style={{padding:'12px',boxShadow:'1px 1px 8px grey'}}>
                    {item.CoverImage && 
                     <img src={item.CoverImage.ImageUrl} className="h-[80%] w-full rounded "></img>
                    }
                    <p className="font-semibold text-md ">{item.name}</p>
                </div>
                </Link>
            ))}
            </div>
            </div>
    )
}