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

export default function Produtos() {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      image: "image",
      nome: `Nome${i + 1}`,
      categoria: `Categoria ${i + 1}`,
      preco: `RS ${i}.99`,
      createdAt: "xx/xx/xxxx",
      id: i,
    });
  }


  const header = ["FOTO", "NOME", "CATEGORIA", "PRECO", "CRIADO EM", "AÇÕES"];
  console.log(header);


  return (
    <>
      <Card className="m-md-5 p-md-5">
        <h2 className="text-center" style={{ fontSize: "29px" }}>
          Produtos
        </h2>
        <Row className="pt-2" style={{ justifyContent: "left" }}>
          <Col md={10}>
            <InputGroup>
              <InputGroup.Text>
                <Icon.Search></Icon.Search>
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Pesquisar..." />
            </InputGroup>
          </Col>
          <Col className="d-grid" md={2}>
            <Link href="/produtos/cadastrar">
              <Button>Adicionar</Button>
            </Link>
          </Col>
        </Row>
        <ItemTable data={data} header={header}  detailLink="produtos"/>
      </Card>
    </>
  );
}
