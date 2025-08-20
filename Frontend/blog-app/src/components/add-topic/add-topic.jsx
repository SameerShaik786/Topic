import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'


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
        <div>
            <form>
                <label htmlFor="topic" className="add-topic-title-label">Title :</label>
                <input type="text" className="add-topic-title-input" value={title} onChange={changeTitle} id="topic"/>
                <label htmlFor="description" className="add-topic-title-description">Description</label>
            </form>
        </div>
    )
}
export default AddTopic;