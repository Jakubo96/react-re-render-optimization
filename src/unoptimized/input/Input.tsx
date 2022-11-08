import {ChangeEvent, useEffect, useState} from "react";
import {Exclamation} from "./exclamation/Exclamation";

export const Input = ({
                          fieldValue,
                          updateField,
                          id
                      }: { fieldValue: string, updateField: (value: string) => void, id: number }) => {
    useEffect(() => console.log(`Input ${id} rendered`))

    const [field, setField] = useState(fieldValue)

    useEffect(() => {
        setField(fieldValue)
    }, [fieldValue])

    const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
        setField(event.target.value)
        updateField(event.target.value)
    }

    const addExclamation = () => {
        setField(field + '!')
        updateField(field + '!')
    }


    return (
        <div className='input'>
            <label>
                Field:
                <input type='text' value={field} onChange={handleInput}/>
            </label>

            <Exclamation addExclamation={addExclamation} id={id}/>
        </div>
    );
};
