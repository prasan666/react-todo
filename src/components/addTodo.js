import { useState, useRef } from 'react'
function AddTodo(props) {
    const titleRef = useRef()
    const [isTitleAdded, setIsTitleAdded] = useState(true);
    function submitHandler(event) {
        event.preventDefault()
        const title = titleRef.current.value
        props.parentCallback(title);
        props.onCancel()
    }

    const handleTitleChange = (event) => {
        if (event.target.value.length > 0)
            setIsTitleAdded(false)
        else
            setIsTitleAdded(true)
    }

    const style = {
        width : '100%',
    }

    return (
        <div className="modal">
            <h1>New Todo</h1>
            <div>
                <form>
                    <input style={style} type="text" id="title" placeholder="Enter Todo title" ref={titleRef} onChange={handleTitleChange} />
                </form>
            </div>
            <button className="btn btn--alt" onClick={props.onCancel}>Cancel</button>
            <button className="btn" disabled={isTitleAdded} onClick={submitHandler}>Create</button>
        </div>
    );
}
export default AddTodo