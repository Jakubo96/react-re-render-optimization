import './MainOptimized.scss';
import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {Input} from "./input/Input";
import {Question} from "./question/Question";

export const MainOptimized = () => {
    useEffect(() => console.log('Main rendered'))

    const stateRef = useRef({name: 'Jakub', lastName: 'Woźny'})

    const [, setMockState] = useState({})
    const forceUpdate = useCallback(() => setMockState({}), [])

    const updateName = useCallback((name: string) => {
        stateRef.current.name = name;
        forceUpdate()
    }, [forceUpdate])

    const updateLastName = useCallback((lastName: string) => {
        stateRef.current.lastName = lastName;
        forceUpdate()
    }, [forceUpdate])

    const addQuestion = useCallback(() => {
        stateRef.current.name += '?'
        stateRef.current.lastName += '?'
        forceUpdate()
    }, [forceUpdate])

    const memoQuestionWithToggle = useMemo(() => <QuestionWithToggle><Question
        addQuestion={addQuestion}/></QuestionWithToggle>, [addQuestion])

    return (
        <div className='main'>
            <h3>{JSON.stringify(stateRef.current)}</h3>

            <div className='children'>
                <Input fieldValue={stateRef.current.name} updateField={updateName} id={1}/>
                <Input fieldValue={stateRef.current.lastName} updateField={updateLastName} id={2}/>

                {memoQuestionWithToggle}
            </div>
        </div>
    );
};


const QuestionWithToggle = ({children}: { children: JSX.Element }) => {
    useEffect(() => console.log('Question with toggle rendered'))

    const [questionVisible, setQuestionVisible] = useState(true)

    return (<div>
        <label>
            Toggle question
            <input type='checkbox' checked={questionVisible}
                   onChange={event => setQuestionVisible(event.target.checked)}/>
        </label>

        {questionVisible && children}
    </div>)
}
