import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import  {useState} from "react"
import authServices from "../services/auth.services";
import  {useAuthContext} from "../context/auth.context"

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] =  useState("");
  const [IsAuthenticated, setIsAuthenticated]
      = useAuthContext();




async function handleLogin(e) {
  e.preventDefault();



  try {
    await authServices.login({
      email,
      password
    });
    setIsAuthenticated(true)/
    router.push("/categorias");

 } catch(error) {
    alert("Falha ao autenticar tente novamente")
  }
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
                value ={email}
                onChange= {(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="m-2">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Insira sua senha!"
                required
                minLength={8}
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
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
