import React, { useState } from 'react'

function Content(props) {
    console.log(props.data)
    return (
        <div style={{margin:"80px 0px 0px 0px"}}>
            
            {
                props.data.map((val,idx)=>{
                   return(<div key={val+idx}>
                       <div  className="card">
                                <img src={val.img} className="card-img-top" alt="img" height={"500px"} width={"500px"}/>
                                <div  className="card-body">
                                    <h5  className="card-title">{val.name}</h5>
                                </div>
                                <p className="card-text">{val.recipe}</p>
                            </div><br />
                   </div>) 
                })
            }

        </div>
    )
}

export default Content
