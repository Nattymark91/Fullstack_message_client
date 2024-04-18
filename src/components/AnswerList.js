import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import AnswerItem from "./AnswerItem";

const AnswerList = observer(() => {
    const {answer} = useContext(Context)

    return (
        <>
            {answer.answers.map(answer =>
                <AnswerItem key={answer.id} answer={answer}/>
            )}
        </>    
    );
});

export default AnswerList;