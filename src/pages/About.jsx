import ig from '../assets/socmed-icons/instagram.png'
import twt from '../assets/socmed-icons/twitter.png'
import git from '../assets/socmed-icons/github.png'
import yt from '../assets/socmed-icons/youtube.png'
import bass from '../assets/bass.png'
import React from 'react'
import hmpic from '../assets/me.webp'
import "../style/about.css";
import Spotify from '../components/Spotify'

const About = () => {
return (
  <>
  {/* -------------about me ----------------- */}
  <div className='box'>
  <div className='abm-container'>
    <img className='me' src={hmpic} alt="hmpic" />
      <div className='overlay'>
        <div className='msg'>Hello my name is <p className='clrme'>Jon Von Ivar Lita</p>
        <p>I'm a potato</p>
        </div>
      </div>  
    </div>  
  </div>

	<div class="h1pos">
    
  </div>
  
  {/* --------------------------- C A R D --------------------------*/}
    <div className='box2'>
          <div class="cards">
              <h1>My Hobbies</h1>
        <div class="services">
                <div class="content content-1">
                  <div class="fab fa-facebook">
        </div>
        <h2>Musician</h2>
        <p>
          I play the "Bass Guitar" in a band I'm currently in and I sometimes play the electric guitar. Me and my buddy Jasfel were in a band for a long time. We even compose songs but we haven't publish any of it due to lack of financial reasons.
          </p>
        <a href="#">Read More</a>
                </div>
        <div class="content content-2">
                  <div class="fab fa-whatsapp">
        </div>
        <h2>Collection</h2>
        <p>
        I like knives and guns</p>
        <a href="#">Read More</a>
                </div>
        <div class="content content-3">
                  <div class="fab fa-youtube">
        </div>
        <h2>Video Games</h2>
        <p>
          I play a lot of games more likely First-Person Shooter. That is where I spend my vacant time or play with my friends as bonding each other since we live in far away places.</p>
        <a href="#">Read More</a>
                </div>
        </div>
        </div>
  </div>  
  
  <Spotify/>

  {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */}
  <div className="sect bg-dark">
  <div className='sect'>
  <ul>
    <li>
      <a target="_blank" href="https://www.instagram.com/jvi_jvii/">
        <img className='imicon' src={ig} alt="ig" />
      </a>
    </li>
    <li>
      <a target="_blank" href="#">
      <img className='imicon' src={twt} alt="twitter" />
      </a>
    </li>
    <li>
      <a target="_blank" href="#">
      <img className='imicon' src={git} alt="github" />
      </a>
    </li>
    <li>
      <a target="_blank" href="#">
      <img className='imicon' src={yt} alt="youtube" />
      </a>
    </li>
  </ul>
</div>
</div>
  </>
);
};

export default About;
