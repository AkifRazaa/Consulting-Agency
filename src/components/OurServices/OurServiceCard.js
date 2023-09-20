import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./OurServices.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@chakra-ui/react";
import { BiRightArrowCircle } from "react-icons/bi";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const iconStyle = {
  fontSize: "50px",
  color: "black",
};

function OurServiceCard({ title, text }) {
  const [pointer, setPointer] = useState(false);

  const handleMouseEnter = () => {
    setPointer(true);
  };

  const handleMouseLeave = () => {
    setPointer(false);
  };

  return (
    <Card
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: pointer && "#fad783" }}
    >
      <CardHeader>
        <Heading className="heading">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{text}</Text>
      </CardBody>
      <CardFooter>
        <Link style={{ marginLeft: "auto" }}>
          {pointer ? (
            <BsFillArrowUpRightCircleFill style={iconStyle} />
          ) : (
            <BiRightArrowCircle style={iconStyle} />
          )}

          {}
        </Link>
      </CardFooter>
    </Card>
  );
}

export default OurServiceCard;
