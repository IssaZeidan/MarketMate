import React, { useState } from 'react';
import './cart_page.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import  { useEffect} from 'react'


import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,

    MDBInput,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";

    export default function Basic() {

        const [count, setCount] = useState(1);

        const [cards, setCards] = useState([
          {
            id: 2,
            name: "Headphones Bose 35 II",
            color: "red",
            price: "239",
            count: 1,
            image:
              "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp",
          },
          {
            id: 1,
            name: "Headphones Bose 35 II",
            color: "red",
            price: "239",
            count: 1,
            image:
              "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp",
          },
        ]);
        
        const handleDelete = (id) => {
          setCards(cards.filter((card) => card.id !== id));
        };
        
  function calculatePrice() {
  let total = 0;
  cards.forEach((card) => {
    total += card.price * (card.count);
  });
  return total;
}
        
        const increaseCount = (id) => {
          setCards((prevState) =>
            prevState.map((card) =>
              card.id === id ? { ...card, count: card.count + 1 } : card
            )
          );
          


        };
        
        const decreaseCount = (id) => {
          setCards((prevState) =>
            prevState.map((card) =>
              card.id === id && card.count > 0 ? { ...card, count: card.count - 1 } : card
              
            )
          );
        };
        useEffect(() => {
            cards.forEach(card => {
              if (card.count === 0) {
                handleDelete(card.id);
                
              }
            });
          }, [cards]);
          return (

            <>
            { cards.length === 0 ? (
              <div className="center">
                <FontAwesomeIcon className="iconc" icon={faShoppingCart} />
                <h2>Your cart is empty</h2>
                <p>Spend $0.00 more and get free shipping!</p>
                <button className="shopnow ">Shop Now</button>
              </div>
            ) : (

            <section className="h-100 h-custom" style={{ backgroundColor: "#ffff" }}>
           
              <MDBContainer  className="h-100 py-5"  >
              
                <MDBRow className="justify-content-center align-items-center h-100" >
                
                  <MDBCol >
                  
                    <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
                      <MDBCardBody className="text-black">
                        <MDBRow>
                          <MDBCol lg="7" className="px-5 py-4">
                          <MDBTypography
                          tag="h3"
                          className="mb-5 pt-2 text-left text-muted"
                          style={{ fontSize: "1rem", fontWeight: "bold", color: "black" }}
                        >
                          <span style={{ fontSize: "2rem", fontWeight: "bold", color: "black" }}>Shopping cart</span>
                          <br />
                          <br />
                          You have {cards.length} items in your cart
                        </MDBTypography>
  
                            {cards.map((card) => (
                                <div className="d-flex align-items-center mb-5" key={card.id}>
                                  <div className="flex-shrink-0">
                                    <MDBCardImage
                                      src={card.image}
                                      fluid
                                      style={{ width: "150px" }}
                                      alt="Generic placeholder image"
                                    />
                                  </div>
                        
                                  <div className="flex-grow-1 ms-3">
                                  <button 
                                  className="float-end bg-transparent border-0"
                                  style={{ outline: 'none' }}
                                  onClick={() => handleDelete(card.id)}
                                >
                                  <FontAwesomeIcon 
                                    icon={faTrash}
                                    style={{ fontSize: '1.5rem', color: 'gray', marginTop: '30px' }} 
                                  />
                                </button>
                        

                            
                                    <MDBTypography tag="h5" className="text-primary " >
                                    <span style={{ color: "black" }}>{card.name}</span>
                                    </MDBTypography>
                                    <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                                      Color: {card.color}
                                    </MDBTypography>
                        
                                    <div className="d-flex align-items-center">
                                      <p className="fw-bold mb-0 me-5 pe-3">{card.price}</p>
                        
                                      <div className="def-number-input number-input safari_only">
                                      <button className="minus" onClick={() => decreaseCount(card.id)} ></button>
                                      <input
                                          className="quantity fw-bold text-black"
                                          min={1}
                                          value={card.count}
                                          type="number"
                                      />
                                      <button className="plus" onClick={() => increaseCount(card.id)} ></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            <hr
                              className="mb-4"
                              style={{
                                height: "3px",
                                backgroundColor: "#fab00f",
                                
                               
                              }}
                            />
                                    
                            <div className="d-flex justify-content-between p-2 mb-2" style={{ backgroundColor: " #a4cc76" }}>
                            <MDBTypography tag="h5" className="fw-bold mb-0">
                              Total:
                            </MDBTypography>
                            <MDBTypography tag="h5" className="fw-bold mb-0">
                              {calculatePrice()}$
                            </MDBTypography>
                          </div>
                       
                          <div style={{ marginTop: '50px' }}>
                          {/* Your container here */}
                          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <a href="#!" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                              <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                              Back to shopping
                            </a>
                          </div>
                        </div>
                        
                          </MDBCol>
                          
                          
                          <MDBCol lg="5" className="px-5 py-4" style={{ backgroundColor: "#ddd" }}>
                            <MDBTypography
                              tag="h3"
                              className="mb-5 pt-2 text-center fw-bold text-uppercase" >

                              Payment
                            </MDBTypography>
        
                            <form className="mb-5">
                            <label> Card Number</label>
                            <br/>
                              <MDBInput  
                                className="mb-5"
                                label="Name on card"
                                type="text"
                                size="lg"
                                defaultValue=""
                                placeholder='•••• •••• •••• ••••'
                              />
        
                              <MDBInput
                                className="mb-5"
                               
                                type="text"
                                size="lg"
                                defaultValue=""
                                placeholder='Name'
                                
                              />
                              <MDBRow>
                              <MDBCol md="6" className="mb-10 text-right">
                                <label>Expiration</label>
                                <MDBInput
                                  className="mb-4"
                                  type="text"
                                  size="lg"
                                  minLength="7"
                                  maxLength="7"
                                  defaultValue=""
                                  placeholder="MM/YYYY"
                                />
                              </MDBCol>
                              <MDBCol md="3" className="mb-5 text-right">
                                <label>Cvv</label>
                                <MDBInput
                                  className="mb-4"
                                  type="text"
                                  size="lg"
                                  minLength="3"
                                  maxLength="3"
                                  placeholder="&#9679;&#9679;&#9679;"
                                  defaultValue=""
                                />
                              </MDBCol>
                            </MDBRow>
                            
                            
        
                              <p className="mb-5">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit
                                <a href="#!"> obcaecati sapiente</a>.
                              </p>

                              <div className="d-flex justify-content-center mt-5">
                              <MDBBtn className="custom-btn" size="lg" style={{ width: '200px', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                Buy now
                              </MDBBtn>
                            </div>

                              <MDBTypography
                                tag="h5"
                                className="fw-bold mb-5"
                                style={{ position: "absolute", bottom: "0" }}
                              >
                              </MDBTypography>
                            </form>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>
            )}
            </>
            );}
                        





