import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, onSubmit, onChange } from "react";
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import ProductImg from "../../public/imgs/produto.jpg";
import categoriaServices from "../../services/categoria.services";

export default function CadastrarProduto() {
  const [categoryList, setCategoryList] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");

  useEffect(() => {
    categoriaServices.getCategorias().then((r) => setCategoryList(r));
  }, []);

  function handleCadastro(e) {
    e.preventDefault();
    console.log(name, image, pricec, category);
  }

  return (
    <Container classname="p-2">
      <Card classname="p-2">
        <Form onSubmit={handleCadastro}>
          <h2>Cadastrar Produto</h2>
          <Form.group classname="p-2">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o nome do produto"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.group>
          <Form.group classname="p-2">
            <Form.Label>Imagem</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira a url da imagem"
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.group>
          <Form.group classname="p-2">
            <Form.Label>Valor</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o valor do produto"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.group>
          <Form.group classname="p-2">
            <Form.Label>Categoria</Form.Label>
            <Form.Select
              type="text"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Escolha uma categoria</option>
              {}
            </Form.Select>
          </Form.group>
        </Form>
      </Card>
    </Container>
  );
}
