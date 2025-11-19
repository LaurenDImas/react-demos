import React, {useRef} from 'react'

const RefApp = () => {
    const inputElemet = useRef(null);

    const focusInput = () => {
        inputElemet.current.focus();
        inputElemet.current.value = "Lauren"
    }
    return (
        <div>
            <input ref={inputElemet} type="text" />
            <button onClick={focusInput}>Focus & Write Lauren</button>
        </div>
    )
}
export default RefApp
