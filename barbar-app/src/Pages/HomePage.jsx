import { Image } from '@chakra-ui/react'
import "../CSS/Home.css"
import men from "../Images/men.jpg"
import kids from "../Images/kids.jpg"
import colour from "../Images/colour.jpg"
import beard from "../Images/beard.jpg"
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import { Button, ButtonGroup } from '@chakra-ui/react'


const HomePage = () => {
    return (
        <div className='body'>
            <div className="maindiv">
                <div className="home">
                    <h5>WELCOME OUR WEBSITE</h5>
                </div>
                <div className="nav-links">
                        <Link to="/reviewspage" className="nav-link">Reviews</Link>
                    </div>
                <div className='images'>
                    <div className='kidsimg'>
                        <Link to="/mens"><Image borderRadius="full"
                            boxSize='300px' src={men} /></Link>
                    </div>
                    <div className='kidsimg'>
                        <Link to="/kids"><Image borderRadius="full"
                            boxSize='280px' src={kids} /></Link>
                    </div>
                    <div className='kidsimg'>
                        <Link to="/colour"><Image borderRadius="full"
                            boxSize='280px' src={colour} /></Link>
                    </div>
                    <div className='kidsimg'>
                        <Link to="/beard"><Image borderRadius="full"
                            boxSize='280px' src={beard} /></Link>
                    </div>
                </div>
            </div>
            {/* footer */}
           
                <Footer />
          

        </div>
    )
}
export default HomePage