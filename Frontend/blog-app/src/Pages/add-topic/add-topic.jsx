import { useState } from 'react';


const AddTopic = () => {
    const [title,updateTitle] = useState('');
    const [description,updateDescription] = useState('');
    const changeTitle = (event) => {
        updateTitle(event.target.value);
    }
    const changeDescription = (event) => {
        updateDescription(event.target.value);
    }
    return (
        <div className='add-topic-container'>
            <form className='add-topic-form-container'>
                <div className='label-container'>
                <label htmlFor="topic" className="add-topic-title-label">Title :</label>
                <input type="text" className="add-topic-title-input" value={title} onChange={changeTitle} id="topic"/>
                </div>
                <label htmlFor="description" className="add-topic-title-description">Description</label>
                <textarea rows={20} cols={20} />
            </form>
        </div>
    )
}
export default AddTopic;