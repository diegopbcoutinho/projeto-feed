import { useState } from 'react';

import '../styles/PostForm.css'

import userIcon from '../images/user.svg';
import paperPlaneIcon from '../images/paper-plane.svg';

export default function PostForm(props) {
    const [history, setHistory] = useState('')
    const [userName, setUsername] = useState('')

    function handleSubmit(event) {
        event.preventDefault();

        props.onSubmit({ history, userName })

        setHistory('')
        setUsername('')
    }

    return(
        <form className='post-form' onSubmit={handleSubmit}>
        <input
            value={history}
            placeholder="Escreva uma nova história..." 
            onChange={(event) => setHistory(event.target.value)} />
        <div>
            <img src={userIcon} />

            <input 
            value={userName}
            
            placeholder="Digite seu nome..." 
            
            onChange={(event) => setUsername(event.target.value)}
            />

            <button type="submite">
                <img src={paperPlaneIcon} />

                Publicar
            </button>
        </div>
    </form>
    );
}
