import React from "react";
import { Carousel } from "react-bootstrap";
import style from "./Carousel.module.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import nike from "../Image/nike.jpg";
import { Container } from "react-bootstrap";

export default function CarouselBox() {
  const history = useHistory();

  function Redirect1() {
    history.push("/Man");
  }

  function Redirect2() {
    history.push("/Woman");
  }

  function Redirect3() {
    history.push("/Shoes");
  }

  return (
    <div className={style.transition}>
      <Carousel>
        <Carousel.Item>
          <NavLink to="/Man">
            <img src="https://static.staff-clothes.com/uploads/media/default/0001/89/610dad00ed074fab8bdce984fd3821c6.jpeg" />
          </NavLink>

          <Carousel.Caption>
            <button onClick={Redirect1}>Перейти</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <NavLink to="/Woman">
            <img src="https://static.staff-clothes.com/uploads/media/default/0001/86/dd9b3f8e12324facb6c2b379a0e1abb9.jpeg" />
          </NavLink>

          <Carousel.Caption>
            <button onClick={Redirect2}>Перейти</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <NavLink to="/Shoes">
            <Container>
              <img src={nike} alt="" />
            </Container>
          </NavLink>

          <Carousel.Caption>
            <button onClick={Redirect3}>Перейти</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
