import './Header.css'
import logo from '../assets/react.svg'
export default function Header(){

    return (
       <div className="header h-[10%] w-full flex p-4 shadow justify-between px-12">
          <div className="brand flex h-full w-auto items-center">
             <img src={logo}></img>
             <h2 className="p-4 text-2xl font-semibold">StoreBoard</h2>
          </div>
          <div className="link flex h-full w-auto items-center gap-4">
            <a href="/storeboard/additems" className="text-lg " style={{color:'black'}}>Add item</a>
            <a href="/storeboard/viewitems" className="text-lg " style={{color:'black'}}>View items</a>
          </div>
       </div>
    )
}