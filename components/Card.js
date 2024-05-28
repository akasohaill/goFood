import React, { useEffect, useState ,useRef} from 'react'
import { useDispatchCart , useCart } from './contextReducer';


export default function Card(props) {
  let data=useCart();
  let dispatch=useDispatchCart();
  let option=props.option;
  let priceOption=Object.keys(option)

  const priceRef=useRef()
  const[qty,setQty]=useState(1)
  const[size,setSize]=useState("")


  const handleAddtoCart=async ()=>{
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice, qty:qty, size:size})
     console.log(data)
  }

  let finalPrice=qty * parseInt(option[size])
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])



  return (
    <div>
      <div className="card mt-3" style={{'width': '18rem','maxHeight':'360px'}}>
          <img src={props.foodItem.img} className="card-img-top m-auto" alt="..." style={{height:'150px',objectFit:'fill'}} />
            <div className="card-body">
              <h5 className="card-title">{props.foodItem.name}</h5>
              {/* <p className="card-text">This is one of the important line</p> */}
              <div className="container w-100">
                <select className="m-2 bg-success h-100 rounded" onChange={(e)=>setQty(e.target.value)}>
                  {Array.from(Array(6),(e,i)=>{
                    return(
                      <option value="1" key={i+1}>{i+1}</option>
                    )
                  })}
                </select>
                <select className="m-2 bg-success h-100 rounded" ref={priceRef}  onChange={(e)=>setSize(e.target.value)}>
                  {priceOption.map((data)=>{
                    return <option key={data} value={data}>{data}</option>
                  })
                  }
                </select>
                <div className="d-inline h-100 fs-5">
                    Rs{finalPrice}/-
                </div>
              </div>
              <hr />
              <button className={`btn btn-success justify-center`} onClick={handleAddtoCart}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}
