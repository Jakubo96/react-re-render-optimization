import React, {ChangeEvent, useCallback, useEffect, useRef} from "react";
import {Exclamation} from "./exclamation/Exclamation";

export const Input = React.memo(({
                                     fieldValue,
                                     updateField,
                                     id
                                 }: { fieldValue: string, updateField: (value: string) => void, id: number }) => {
    useEffect(() => console.log(`Input ${id} rendered`))

    const fieldRef = useRef(fieldValue)

    useEffect(() => {
        fieldRef.current = fieldValue
    }, [fieldValue])

    const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
        updateField(event.target.value)
    }

    const addExclamation = useCallback(() => {
        updateField(fieldRef.current + '!')
    }, [updateField])

    return (
        <div className='input'>
            <label>
                Field:
                <input type='text' value={fieldValue} onChange={handleInput}/>
            </label>

            <Exclamation addExclamation={addExclamation} id={id}/>
        </div>
    );
})
