import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

export default function Login() {
  const router = useRouter();
  function handleLogin(e) {
    e.preventDefault();


    router.push('/categorias')
  }

  return (
    <>
      <Container>
        <Card style={{ margin: "5px",
      borderRadius: "18px"}}>
          <Form onSubmit={handleLogin}>
            <h1 className="text-center m-2">Login</h1>
            <Form.Group className="m-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Insira seu email!"
                required
              />
            </Form.Group>
            <Form.Group className="m-2">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Insira sua senha!"
                required
                minLength={8}
              />
            </Form.Group>
            <Form.Group className="m-4 text-center">
              <Button className="m-3" type="submit">
                Entrar no sistema
              </Button>
              <br />
              <Link href={"/conta-nova"}>
                <a>Criar nova conta</a>
              </Link>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
}
