import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import ProductImg from "../../public/imgs/produto.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import produtoServices from "../../services/produto.services";


export default function DetalhesProduto() {
  const router = useRouter(); 
  const {id} = router.query; 
  const [data, setData]=  useState(undefined);

  useEffect(()=>{
    produtoServices.getProdutos(id).then((r) => setData(r))
  },[]);

  return (
    <>
      <Container className="p-5">
        <Card className="p-2">
          {data ? ( <div>
            <h2>Detalhes do Produto</h2>
          <strong>Nome</strong>
          <p>{data.name}</p>
          <strong>Categoria</strong>
          <p>{data.category}{id}</p>
          <strong>Preço</strong>
          <p>{data.price}</p>
          <strong>Criado em</strong>
          <p>{data.createdAt}</p>
          <Col>
            <Image src={data.image} height={250} width={250}/>
          </Col>
          </div>
          ) : (
            "Produto nao encontrado"
          )}
        </Card>
      </Container>
    </>
  );
}
