import React from "react";
import { Grid,Container } from "@mui/material";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import "./styleHome.css"

const Home=()=>{

//ahi le digo q ue a ese elemento grid, cuando sea pantalla gde ocupe la mitad de pantalla...entonces el de abajo q tb tiuene 6, va a ocupar la otra mitad
//cuando pantalla chica ocupa toda la pantalla

    return(
       <>
            <div className="home-title">
                <Grid container className="home-title-title">
                    <Grid item md={12} xs={12} id="title">
                        <img src="starbucks_logo1.png" id="img-logo"/>
                        <p>STARBUCKS</p>
                    </Grid>
                    <div className="home-title-button">
                        <Grid item md={6} xs={6} id="title">
                        <Link to="/menu">  <Button variant="contained" id="button-menu">Menu</Button></Link>
                        </Grid>
                        <Grid item md={6} xs={6} id="title">
                            <Button variant="contained" id="button-shops">Shops</Button>
                        </Grid>
                    </div>
                </Grid>

            
            </div>
            <Grid container className="home-second">
                <Grid item md={12} xs={12}>
                    <h3>IT HAS NEVER BEEN EASIER TO ENJOY STARBUCKS</h3>

                </Grid> 
                <Grid container className="home-second2">
                    <Grid item md={4} xs={12}>
                        <img src="select.gif" alt="loading"/>

                    </Grid> 
                    <Grid item md={4} xs={12}>
                        <img src="order.gif" alt="loading"/>

                    </Grid> 
                    <Grid item md={4} xs={12}>
                        <img src="enjoy.gif" alt="loading"/>

                    </Grid> 
                </Grid>
            </Grid>
        
            <div className="home-third">
                <Grid item md={6} xs={12}>
                    <div className="home-uber">
                        <p id="title2">Let the holiday cheer come to you</p>
                        <p>Make the moment merry. Order Starbucks® holiday favorites on Uber Eats*****.</p>
                        <Button variant="contained" id="button-menu2">Menu</Button>

                    </div>

                </Grid> 
                <Grid item md={6} xs={12}>
                    <img src="uber.jpg" alt="loading" id="uber-img"/>
                </Grid> 
            </div>
        
            
        </>
            
        
    )




}

export default Home

/* <Container className="home-container"  >
             <Grid container spacing={2}>
                <Grid item  md={6} xs={12}>
                        <div className="home-text-container">
                            <p id="home-title">STARBUCKS TAMBIEN EN VERANO</p>
                            <p id="home-text">Disfruta nuestra variedad de cafes frios y calientes en nuestros locales o pidelo online!</p>
                            <div className="buttons">
                            
                                    <Button id="home-button1"  variant="contained">Menu</Button>
                                
                                
                                    <Button id="home-button2"  variant="contained">Locales</Button>
                                
                            </div>
                        </div>
                        
                        
                        
                    
                    </Grid>
            

                    <Grid item  md={6} xs={12}>
                        <img className="img-home" src="icecoffe.gif"/>
                        
                        
                        
                    
                    </Grid>
                

            </Grid>
            <Grid container spacing={2}>
                <Grid item  md={6} xs={12}>
                    <img className="img-home2" src="win.png"/>
                    <div className="home-text-container">
                            <p id="home-title">STARBUCKS FOR LIFE</p>
                            <p id="home-text">Participa por premios distintos todos los dias! Juga por cafe gratis, menus y mas! Anotate</p>
                            <div className="buttons">
                            
                                    <Button id="home-button1"  variant="contained">Participa</Button>
                                
                                
                                 
                                
                            </div>
                    </div>
                        
                        
                        
                    
                </Grid>
                <Grid item  md={6} xs={12}>
                   
                        
                        
                        
                    
                </Grid>

            </Grid>
        </Container>*/