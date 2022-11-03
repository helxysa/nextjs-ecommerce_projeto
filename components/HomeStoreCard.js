import Image from "next/image";
import { Col } from "react-bootstrap";

export default function HomeStoreCard(props) {
  return (
    <>
    <Col  clasName="m-2">
    <Image
      src={props.img}
      height="400px"
      style={{borderRadius: "15px"}}    
    />
    <h5 style={{fontSize: "15px"}}>{props.name}</h5>
    </Col>
    </>

  );
}
