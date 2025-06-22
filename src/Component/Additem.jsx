import { useState } from "react"
import axios from 'axios'
import SuccessAlert from "./SucessAlert";
import './Additem.css'

export default function AddItems(){


    let [name,setName]=useState('');
    let [type,setType]=useState('');
    let [description,setdescription]=useState('');
    let [coverImage,setcoverImage]=useState({});
    let [additionalImage,setadditionalImage]=useState([]);
    let [coverImageName,setcoverImageName]=useState('Choose cover image');
    let [additionalImageName,setadditionalImageName]=useState('select the addtional image');
    let [open,setOpen]=useState(false);
    let [successalert,setSucessalert]=useState({
        severity:'',
        message:''
    });



    let handleclick=async()=>{

        if(name==''|| type==''|| description==''|| additionalImage==''|| coverImage==''){
            console.log('enter');
            setSucessalert(prev => ({ ...prev, severity: 'error', message: 'please fill all mandatory feild' }));
             setOpen(true);
             return
        }
        
         const fomrdata=new FormData();
        fomrdata.append('name',name);
        fomrdata.append('type',type);
        fomrdata.append('description',description);
        fomrdata.append('coverimage',coverImage);
        
        additionalImage.forEach((file)=>{
            fomrdata.append('additionalImage',file);
        })

       try{
       const res=await axios.post('https://stored-board-server-api.onrender.com/storeboard/additem',fomrdata);
       console.log(res.data);

       }catch(err){
        console.log(err);
        return
       }
       setOpen(true);
       setSucessalert(prev => ({ ...prev, severity: 'success', message: 'Item Added Successfully' }))
       setName('');
       setType('');
       setdescription('');
       setcoverImageName('Choose cover Image');
       setadditionalImage('select additinal images');
    }

    let handleclose=()=>{
        setOpen(false);
    }


    let handlefile=(e)=>{
        const file=e.target.files[0];
        if(file){
            console.log(file);
             setcoverImage(file);
             setcoverImageName(file.name);
            }
            else{
                setcoverImageName('choose your image');
            }
    }

    let handleAdditional=(e)=>{
        
        const files=Array.from(e.target.files);
        console.log(files);
        const names=files.map(file => file.name);
        setadditionalImage(files);
        setadditionalImageName(names);

    }
    return (<div className="board h-[89%] w-full mt-1 ">
    
         <div className=' h-[100%] w-full bg-white rounded  flex justify-center items-center'>
              <div className="item-forms h-full w-[40%] rounded flex flex-col justify-around">
                   <div className="name w-full flex flex-col gap-2">
                   <label htmlFor="name" className="text-lg font-semibold">{
                   <span>
                    Item Name:
                     <span className="color-[red]" style={{color:'red'}}>*</span>
                     </span>
                    }</label>
                   <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter item name" className=" border border-gray-300
 rounded p-3 focus:ring-1 focus:ring-blue-500 focus:outline-none"></input>
              </div>

                    <div className="select w-full flex flex-col gap-2">
                   <label htmlFor="type"  className="text-lg font-semibold">{
                       <span>
                    Item Type:
                     <span className="color-[red]" style={{color:'red'}}>*</span>
                     </span>
                    }</label>

                  <select id="type"  value={type} onChange={(e)=>{setType(e.target.value)}} name="type" className="border border-gray-300
 rounded p-3 focus:ring-1 focus:ring-blue-500 focus:outline-none">
                    <option value='Shirt'>Shirt</option>
                    <option value='T-Shirt'>T-shirt</option>
                    <option value='pant'>Pant</option>
                    <option value='Trouser'>Trouser</option>
                    <option value='Shoes'>Shoes</option>
                    <option value='Sports Gear'>Sports Gear</option>
                    <option value='Bags'>Bags</option>
                    <option value='Hats'>Hats</option>
                    <option value='Accessories'>Accessories</option>
                    <option value='Electronics'>Electronics</option>
                    <option value='Watches'>Watches</option>
                  </select>

                   </div>

                    <div className="description w-full flex flex-col gap-2">
                   <label htmlFor="description" className="text-lg font-semibold">
                    { <span>
                    Item Description:
                     <span className="color-[red]" style={{color:'red'}}>*</span>
                     </span>}
                   </label>
                  <textarea placeholder="write item description" rows={3} cols={10} value={description} onChange={(e)=>{setdescription(e.target.value)}} className="border border-gray-300
 rounded p-3 focus:ring-1 focus:ring-blue-500 focus:outline-none"></textarea>
                   </div>
                  
                     <div className="cover-image  flex items-center gap-3">
                   <label htmlFor="cover-upload" className="block font-medium">{
                       <span>
                    Item cover image:
                     <span className="color-[red]" style={{color:'red'}}>*</span>
                     </span>
                    }</label>
                  <label htmlFor="cover-upload" className=" file cursor-pointer px-4 py-2 mr-auto rounded-full bg-[#5AB2FF]" style={{color:'white'}}>{coverImageName}</label>
                  <input type="file" className="hidden" onChange={handlefile} id="cover-upload"></input>
                   </div>


                    <div className="additional-image  flex items-center gap-3 justify-between">
                   <label htmlFor="additional-upload" className="block font-medium">Item Additional Image:</label>
                  <label htmlFor="additional-upload" className=" file cursor-pointer px-4 py-2 mr-auto rounded-full bg-[#5AB2FF] whitespace-nowwrap overflow-hidden text-ellipsis max-w-[250px] " style={{color:'white'}}>{additionalImage.length==0?'select the additonal image':`${additionalImage.length} files slected`}</label>
                  <input type="file" className="hidden" id="additional-upload" onChange={handleAdditional} multiple></input>
                   </div>
                   
                   <button className="mt-4 mx-25" style={{backgroundColor:' var(--color-blue-500)', color:'white'}} onClick={handleclick}>ADD item</button>
              </div>
              <SuccessAlert open={open} handleclose={handleclose} sucessalert={successalert}/>
          </div>
          </div>
    )
}