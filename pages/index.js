import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import Banner from "../public/imgs/cara3.png";
import HomeStoreList from "../components/HomeStoreList";

export default function Home() {
  return (
<>
 <Row className="justify-content-center  p-2">
  <Col
      md={6} 
      style={{borderRadius: "34px",
      backgroundColor: "#4682B4"}}>
  <Row className="text-white  align-items-center mt-4 mb-4">
    <Col>
    <Image src={Banner}/>
    </Col>
    <Col>
    <h2>O marketplace</h2>
    <h3>Venha vender com a gente</h3>
    </Col>
  </Row>
  </Col>
 </Row>
 <div className="text-center p-2 ">
  <h1>
    Nossos Clientes
  </h1>
 </div>
 <HomeStoreList/>
 </>
)

}
