import React, { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Createnote from './components/CreateNote/Createnote'
import Note from './components/Note/Note.jsx'

const App = () => {
  const [addItem,setAddItem] = useState([])
  const addNote = (note) => { 
    setAddItem((oldData) => {
      return [...oldData,note]
    })
    console.log(note)

  }

  const deleteMe = (id) => {
    setAddItem((aa) => {
      aa.filter((curredata,index) => {
        return index !== id
      })
    })
  }
  return (
    <>
      <Header/>
      <Createnote passNote={addNote}/>
      {addItem.map((item,index) => {
         return (
          <Note 
            key={index} 
            id={index} 
            title={item.title} 
            content={item.content} 
            delete={deleteMe}
          />
        );
        })}
      <Footer/>
    </>
  )
}

export default App;