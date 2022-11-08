import React, {useEffect} from "react";

export const Exclamation = React.memo(({addExclamation, id}: { addExclamation: () => void, id: number }) => {
    useEffect(() => console.log(`Exclamation ${id} rendered`))

    return (
        <div className='exclamation'>
            <button type='button' onClick={addExclamation}>Exclamation</button>
        </div>
    )
})
