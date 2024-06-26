import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../utils/consts";
import {registration } from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            data = await registration (email, firstname, lastname, password);
            if (data) {
                user.setUser(data)
                user.setIsAuth(true)
                navigate(HOME_ROUTE)
            }  
        } catch (e) {
            return
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Регистрация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите имя"
                        value={firstname}
                        onChange={e => setFirstname(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите фамилию"
                        value={lastname}
                        onChange={e => setLastname(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >
                            Зарегистрироваться
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;