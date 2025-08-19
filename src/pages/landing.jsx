import React from 'react'
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';
export default function LandingPage() {

  const router = useNavigate();
  return (
    <div className='landingPageContainer'>
      <nav>
        <div className='navHeader'>
          <h2>Apna Video Call</h2>
        </div>
        <div className='navlist'>
          <p onClick={()=>{
            router("/qdjf5f");
          }}>Join as Guest</p>

          <p onClick={()=>{
            router("/auth");
          }}>Register</p>
          {/* <button>Login</button> */}
          <div onClick={()=>{
            router("/auth");
          }} role='button'>
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1><span style={{color:"#ff9839"}}>Connect</span> with your loved Ones</h1>
          <p>Cover a distance by Apna Video Call</p>
          <div role='button'>
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div>

          <img src='/mobile.png' alt='video call' className='landingImage' />
        </div>
      </div>
    </div>
  )
}
