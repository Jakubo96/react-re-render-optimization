import './MainUnoptimized.scss';
import React, {useEffect, useState} from "react";
import {Input} from "./input/Input";
import {Question} from "./question/Question";

export const MainUnoptimized = () => {
    useEffect(() => console.log('Main rendered'))

    const [state, setState] = useState({name: 'Jakub', lastName: 'Woźny'})
    const [questionVisible, setQuestionVisible] = useState(true)

    const updateName = (name: string) => setState({...state, name})
    const updateLastName = (lastName: string) => setState({...state, lastName})
    const addQuestion = () => setState({name: state.name + '?', lastName: state.lastName + '?'})


    return (
        <div className='main'>`
            <h3>{JSON.stringify(state)}</h3>`

            <div className='children'>
                <Input fieldValue={state.name} updateField={updateName} id={1}/>
                <Input fieldValue={state.lastName} updateField={updateLastName} id={2}/>

                <div>
                    <label>
                        Toggle question
                        <input type='checkbox' checked={questionVisible}
                               onChange={event => setQuestionVisible(event.target.checked)}/>
                    </label>

                    {questionVisible && <Question addQuestion={addQuestion}/>}
                </div>
            </div>
        </div>
    );
};
