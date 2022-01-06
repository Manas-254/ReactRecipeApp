import React from 'react'

function Recipe(props) {
    let sendItem = (data1,data2,data3,data4) => {
        var data = [{id:data1, name:data2, item:data3, img:data4}];
        props.getData(data)
    }

    return (
        <div style={{ float: "left", margin: "80px 0px 0px 80px"}} className="border border-secondary">
            {
                props.data.map((val, idx) => {
                    return (
                        <div key={val+val.id} className="border border-secondary shadow p-3 mb-5 bg-body rounded">
                            <div  className="card" style={{ width: "18rem" }} onClick={()=>{sendItem(val.id,val.name,val.item,val.img)}}>
                            <div  className="card-body">
                            <h5  className="card-title">{val.id}</h5>
                                    <h5  className="card-title">{val.name}</h5>
                                </div>
                                <img src={val.img} className="card-img-top" alt="img" />
                                
                            </div><br />
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Recipe
