import { useState } from 'react'
import './App.css'


function App() {
  const [toDos, setToDos] = useState([])
  const [toDo,setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      

      <div className="input">
        <input type="text" placeholder="🖊️ Add item..." value={toDo} onChange={(e)=>setToDo(e.target.value)}/>
        <i className="fas fa-plus" id='icon' onClick={ ()=>{
          if(toDo.length>0){
            setToDos([...toDos,{id : Date.now(),text:toDo,status : false}]);
          }
          }}></i>
      </div>

      <div className="todos">
        {
          toDos.map((value)=>{
            return(
              <div className="todo" key={value.id}>
          <div className="left">
            <input type="checkbox" name="" id="" value={value.status} onChange={(e)=>{

              setToDos(toDos.filter((obj)=>{
                if(obj.id==value.id){
                  obj.status=e.target.checked;
                }
                  return obj;
              }))
            }}/>
            <p>{value.text}</p>
          </div>
          <div className="right">
          <i className="fas fa-times"  id='icon' onClick={()=>setToDos(toDos.filter((obj)=>{
            if(obj.id==value.id){
              obj=null
            }
            return obj
          }))}></i>
          </div>
        </div>
            )
          })
        }
      </div>
      {toDos.map((obj)=>{
        if(obj.status){
          return (<h1 key={obj.id}>{obj.text}</h1>)
        }
        return null
      })}
    </div>

  )
}

export default App
