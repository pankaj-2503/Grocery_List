
import './App.css';
import SearchItem from './SearchItem';
import  AddItem from './AddItem.js';
import  Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import {useState} from 'react';
import React from 'react';


 


function App() {
 
  const [newItem,setNewItem]=useState('');
  
  const [items,setItem]=useState(JSON.parse(localStorage.getItem('shopping list')));

  const [search,setSearch]=useState('');

  const setandSaveItem=(newItems)=>{
    setItem(newItems);
    localStorage.setItem(`shopping list`,JSON.stringify(newItems)); 

  }


  const addItem=(item)=>{
      const id= items.length ? items[items.length-1].id+1:1;
      const mynewItem={id,checked:false,item};
      const listItems=[...items,mynewItem];
      setandSaveItem(listItems);
  }
 
   const handleCheck=(id)=>{
     const listItems= items.map((item)=> item.id===id?{...item,checked:!item.checked}:item);
     setandSaveItem(listItems);
   }


   const handleDelete=(id)=>{
    const listItems=items.filter((item)=>item.id!==id);
    setandSaveItem(listItems);
   }

   const handleSubmit=(e)=>{
    
     e.preventDefault();
     if(!newItem) return ;
     addItem(newItem);
     setNewItem('');
   }


  return (
    <div className="App">
       <Header title="Grocery List"/>
      
       <AddItem 
         newItem={newItem}
         setNewItem={setNewItem}
         handleSubmit={handleSubmit}
       />
        <SearchItem
          search={search}
          setSearch={setSearch}
        />  
       <Content 
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
       />
       <Footer length={items.length}/>

    </div>
  );
}

export default App;
