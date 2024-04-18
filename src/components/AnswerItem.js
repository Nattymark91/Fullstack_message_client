import React from 'react';
import {Card} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const AnswerItem = observer(({answer}) => {
const formatter = new Intl.DateTimeFormat("ru", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      });

    return (
            <Card style={{cursor: 'pointer'}}>
                <span>{answer.firstname} {answer.lastname}</span>
                <span>{formatter.format(Date.parse(answer.createdAt))}</span>
                <span>{answer.email}</span>
                <span>Ответ: {answer.answer}</span>
            </Card> );
});

export default AnswerItem;