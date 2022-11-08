import {useEffect} from "react";

export const Question = ({addQuestion}: { addQuestion: () => void }) => {
    useEffect(() => console.log('Question rendered'))

    return (
        <div className='question'>
            <button type='button' onClick={addQuestion}>Question</button>
        </div>
    )
}
