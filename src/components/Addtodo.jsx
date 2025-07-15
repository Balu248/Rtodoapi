import React, { useState } from 'react'
import Nav from './Nav'

const Addtodo = () => {
    const[input, xinput]=useState(
        {id:"", task:"", completed:"", userid:""}
    )

    const inputhandler=(event)=>{
        xinput({...input,[event.target.name]:event.target.value})

    }
    const readvalue=()=>{
        console.log(input)
    }
  return (
    <div className="bg-primary-subtle p-4 rounded">
        <Nav/>
         <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">ID</label>
                                <input type="number" className="form-control" name='id' value={input.id} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Task</label>
                                <input type="text" className="form-control" name='task' value={input.task} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Completed</label>
                                <select name='completed' id="" className="form-control" value={input.completed} onChange={inputhandler}>
                                    <option value=""></option>
                                    <option value="true">True✅</option>
                                    <option value="false">False❌</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">User Id</label>
                                <input type="text" className="form-control" name='userid' value={input.userid} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={readvalue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Addtodo