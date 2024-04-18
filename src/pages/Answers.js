import React, {useContext, useEffect, useState} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AnswerList from "../components/AnswerList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Pages from "../components/Pages";
import SortBar from '../components/SortBar';
import { fetchAnswers } from '../http/answerAPI';

const Answers = observer(() => {
    const {answer} = useContext(Context)
    const [loading, setLoading] = useState(true)
    let loaded = false;

    useEffect(() => {
        fetchAnswers(answer.page, 30, answer.selectedOrder).then(data => {
        if (data) {
            answer.setAnswers(data.rows)
            answer.setTotalCount(data.count)
            loaded = true;
            }
        })
        .catch((e) => {
            loaded = false;
            })
        .finally(() => {if (loaded) setLoading(false)})
    }, [answer.page, answer.selectedType, answer.selectedOrder])

    if (loading) {
        return
    }

    return (
        <>
            <Row className="mt-2">
                <Col md={12}>
                    <SortBar/>
                    <AnswerList/>
                    <Pages/>
                </Col>
            </Row>
        </>
    );
});

export default Answers;