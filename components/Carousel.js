import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" style={{ objectFit: 'contain !important' }}>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/700x900/?cake" className="d-block w-100" alt="..." style={{filter:'brightness(30%)'}} />

                        <div className="search-engine"  style={{zIndex:'160'}}>
                            <div className="d-flex justify-content-center"  >
                                <input className="srch" type="search" placeholder="Search any Item" aria-label="Search" />
                                <button className="button" type="submit">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" >
                        <img src="https://source.unsplash.com/random/700x900/?manchurian" className="d-block w-100" alt="..."  style={{filter:'brightness(30%)'}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/700x900/?pizza" className="d-block w-100" alt="..."  style={{filter:'brightness(30%)'}}/>
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
    )
}
