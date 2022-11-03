import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import ItemTable from "../../components/ItemTable";
// import ItemTable from "../../components/ItemTable";

export default function Categorias() {
  const [data, setData] = useState([
    { name: "Categoria X", createdAt: "xx/xx/xxxx", id: 1 },
    { name: "Categoria Y", createdAt: "xx/xx/xxxx", id: 2 },
    { name: "Categoria Z", createdAt: "xx/xx/xxxx", id: 3 },
  ]);

  const header = ["NOME"];

  return (
    <>
      <Card className="m-md-5 p-md-5">
        <h2 className="text-center" style={{ fontSize: "29px" }}>
          Categorias
        </h2>
        <Row classname="pt-2" style={{ justifyContent: "left" }}>
          <Col md={10}>
            <InputGroup>
              <InputGroup.Text>
                <Icon.Search></Icon.Search>
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Pesquisar..." />
            </InputGroup>
          </Col>
          <Col className="d-grid" md={2}>
            <Link href="/categorias/cadastrar">
              <Button>Adicionar</Button>
            </Link>
          </Col>
        </Row>
        <ItemTable data={data} header={header} />
      </Card>
    </>
  );
}
