import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { CartReducer } from '../components/contextReducer';





export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItems] = useState([]);

  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/foodData', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }
    });

    response = await response.json();
    setFoodItems(response[0])
    setFoodCat(response[1])
  }

  useEffect(() => {
    loadData()
  }, [])


  return (
    <CartReducer>
    <div>
      <div><Navbar></Navbar></div>
      <div>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" style={{ objectFit: 'contain !important' }}>
          <div className="carousel-inner" id='carousel'>
            <div className="carousel-item active">
              <img src="https://source.unsplash.com/random/700x900/?cake" className="d-block w-100" alt="..." style={{ filter: 'brightness(30%)' }} />

              <div className="search-engine" style={{ zIndex: '160' }}>
                <form className="search-bar"  >
                  <input className="srch" type="search" placeholder="Search any Item" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                  {/* <button className="button" type="submit">Search</button> */}
                </form>
              </div>
            </div>
            <div className="carousel-item" >
              <img src="https://source.unsplash.com/random/700x900/?manchurian" className="d-block w-100" alt="..." style={{ filter: 'brightness(30%)' }} />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/700x900/?pizza" className="d-block w-100" alt="..." style={{ filter: 'brightness(30%)' }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='container'>
        {
          !foodCat == []
            ? foodCat.map((data) => {
              return (<div className='row mb-3'>
                <div key={data._id} className='fs-3 m-3'>
                  {data.CategoryName}
                </div>
                <hr />
                {!foodItem == [] ?
                  foodItem.filter((item) => (item.CategoryName === data.CategoryName) &&(item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                    .map(filterItems => {
                      return (
                        <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                         <Card foodItem={filterItems}
                            option={filterItems.options[0]}
                            
                          ></Card>
                        </div>
                      )
                    })
                  : <div>NO Such Data Found</div>}
              </div>
              )
            }) : <div>NULL</div>
        }

      </div>
      <div><Footer></Footer></div>
    </div>
    </CartReducer>
  )
}
