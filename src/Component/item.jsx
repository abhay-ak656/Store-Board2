import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import Image_Carousel from './image_carousel';
import { Button } from '@mui/material';
import SuccessAlert from './SucessAlert';
import './item.css'

export default function Item(){
  
    let {id}=useParams();
     let [item,setItem]=useState({});
    let [open,setOpen]=useState(false);
    let [successalert,setSucessalert]=useState({
        serverity:'',
        message:''
    });

    let handleAlert=()=>{
        setOpen(false)
    }

    useEffect(()=>{
        async function fetchData(){
         
            try{
              let res=await axios.get(`https://stored-board-server-api.onrender.com/storeboard/viewitem/${id}`);
            
              setItem(res.data);
            }catch(err){
               console.log(err);
            }

        }
        fetchData();
    },[])

    const enquire=async ()=>{

        try{
          let res=await axios.post(`https://stored-board-server-api.onrender.com/storeboard/viewitem/${id}`);
           setOpen(true);
           setSucessalert(prev => ({...prev,severity:'success',message:res.data}));
        }catch(err){
           setOpen(true);
           setSucessalert(prev => ({...prev,severity:'error',message:'something went wrong'}));
        }
    }
    return <div className="item-container h-full w-full flex flex-col items-center gap-4">
           {item && <Image_Carousel CoverImage={item.CoverImage} additionalImage={item.additionalImage} />}
           <div className="content mt-4 gap-4 flex flex-col">
             <h2 className='font-bold text-xl'>{item.name}</h2>
             <p className='text-sm'>{item.type}</p>
             <p className='italic'>{item.description}</p>
             <Button variant='contained' sx={{backgroundColor:'black', borderRadius:'15px'}} onClick={enquire}>Enquire</Button>
           </div>
         <SuccessAlert open={open} handleclose={handleAlert} sucessalert={successalert}/>
    </div>
}