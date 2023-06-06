import {FaTrashAlt} from 'react-icons/fa';
import React from 'react'

const Itemlist = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
    {items.map((item)=>(
          <li className='item' key={item.id}>
                <input 
                  type='checkbox'
                  checked={item.checked}
                  onChange={()=>handleCheck(item.id)}>
                </input>


                <label 
                  style={(item.checked)?{textDecoration:'line-through'}:null}  
                  onDoubleClick={()=>handleCheck(item.id)}
                >{item.item}
                </label>

                {/* fonts */}
                <FaTrashAlt 
                  onClick={()=>handleDelete(item.id)}    
                  role="button" tabIndex="0"> 
                </FaTrashAlt>
          </li>
    ))}
 </ul>
  )
}

export default Itemlist
