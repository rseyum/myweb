import React,{useState, useEffect} from "react";
import Carousel from 'react-bootstrap/Carousel'
import axios from "axios";

const ControlledCarousel= () => {
    const [information, setInformation] = useState("");
    useEffect(() => {
        axios.get("/api/information").then((response) => {
          setInformation(response.data);
        });
      }, []);
    return (
      <Carousel fade={true} pause={false}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={information.rahel}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={information.rahel2}
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={information.rahel}
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
  
  export default ControlledCarousel;