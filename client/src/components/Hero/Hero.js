import styled from 'styled-components/macro';
import '../styles/button.css';
import '../styles/Hero.css';
import { Link } from 'react-scroll';

const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

const Hero = ({ slides }) => {
  return (
    <div className='HeroSection' name='home'>
        <div className='HeroWrapper'>
            {slides.map((slide, index) => {
                return (
                  <div className='HeroSlide' key={index}> 
                    <div className='HeroSlider'>
                    <HeroImage src={slide.image} alt={slide.alt}/>
                    <div className='HeroContent'>    
                    <div className='bar'>
                      <ul className='list'>
                        <li>
                            <Link to='home' smooth={true} duration={500}>Home</Link>
                        </li>

                        <li>
                            <Link to='info' smooth={true} duration={500}>About</Link>
                        </li>

                        <li>
                            <Link to='explore' smooth={true} duration={500}>Explore</Link>
                        </li>

                        <li>
                            <Link to='/' onClick={handleLogout}>Log Out</Link>
                        </li>
                      </ul>
                    </div>   
                    <h1>{slide.title}</h1>
                    <p>{slide.price}</p>
                      <Link to='info' className='Button' css={`max-width: 160px;`} smooth={true} duration={500}>
                        {slide.label}
                      </Link>
                      </div>
                    </div>
                  </div>
                )
            })}
        </div>
    </div>
  )
}

export default Hero