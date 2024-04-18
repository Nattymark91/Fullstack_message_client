import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import {createAnswer} from "../http/answerAPI";
import book from '../assets/book.png'
import { Image } from 'react-bootstrap';
 
const QuestionBar = observer(() => {
  const {user} = useContext(Context)
  const [intro, setIntro] = useState('Привет!')
  const [response, setResponse] = useState('Планируешь ли ты ехать на летний корпоратив?')

  const sayYes = () => {
    if (!user.isAuth) {
      alert('Войдите или зарегистрируйтесь')
      return;
      }
      createAnswer(user.user.email, 'да')
      .then(data => {
        if (data) {
          setIntro('Спасибо за ответ!')
          setResponse(data.message)
        } 
      })
  }

  const sayNo = () => {
    if (!user.isAuth) {
      alert('Пожалуйста, войдите или зарегистрируйтесь')
      return;
      }
      createAnswer(user.user.email, 'нет')
        .then(data => {
          if (data) {
            setIntro('Спасибо за ответ!')
            setResponse(data.message)
          } 
        }) 
  }

  const time = new Date();

    return (
        <section style={{display: 'block',
        margin: '0 auto',
        maxWidth: 600
        }}>
        <section style={{display: 'grid',
        gridTemplateColumns: '1fr 99fr',
        }}>
        <Image width={40} height={40} src={book}/>
        <section>
        <h5> Your APP<span style={{color: 'gray', backgroundColor: 'lightgrey', margin:'10px'}}>APP</span><span style={{color: 'gray'}}>{time.getHours()}:{time.getMinutes()}</span></h5>
        <p style={{fontSize: '1.2rem'}}>{intro}</p>
        <p style={{fontSize: '1.2rem'}}>{response}</p>
        <InputGroup className="form">
        <Button variant="outline-dark" onClick={sayYes} style={{width: 60, marginRight: 30}}>
          Да
        </Button>
        <Button variant="outline-dark" onClick={sayNo} style={{width: 60}}>
          Нет
        </Button>  
        </InputGroup>
        </section>
        </section>
        </section>
    );
});

export default QuestionBar;