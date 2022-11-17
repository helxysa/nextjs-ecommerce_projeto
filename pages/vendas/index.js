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

export default function Vendas() {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      order: `#${i + 1}`,
      client: "cliente",
      total: `total ${i + 1}`,
      createdAt: "xx/xx/xxxx",
      id: i,
    });
  }


  const header = ["PEDIDO", "CLIENTE", "TOTAL", "CRIADO EM", "AÇOES"];
  console.log(header);


  return (
    <>
      <Card className="m-md-5 p-md-5">
        <h2 className="text-center" style={{ fontSize: "29px" }}>
          Vendas
        </h2>
        <Row className="pt-2" style={{ justifyContent: "left" }}>
          <Col md={12}>
            <InputGroup>
              <InputGroup.Text>
                <Icon.Search></Icon.Search>
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Pesquisar..." />
            </InputGroup>
          </Col>
        </Row>
        <ItemTable data={data} header={header} detailLink="vendas"/>
      </Card>
    </>
  );
}
