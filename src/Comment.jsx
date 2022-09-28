import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

 export function Comment ({ content, onDeleteComment }) {
    
    const [likeCount, setLikeCount] = useState (0);
    
    function handleLikeComment () {
        setLikeCount((state) => {
        return state +1 
        });
    }
    
    function handleDeleteComment () {
            onDeleteComment(content);
    }
    
    return (
        <div className={styles.comment}>
           <Avatar hasBorder={false} src="https://pps.whatsapp.net/v/t61.24694-24/296921769_732428011395234_7530630064693897540_n.jpg?ccb=11-4&oh=01_AVwVmJHrZynaxhONpofv_-aFzOcuOmcTjz7rUxGIaN9lEQ&oe=63158BA3" />
        
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                 <header>
                <div className={styles.authorAndTime}>
                    <strong>MJB</strong>
                    <time title="18 de Outubro de 2022">Publicado há 1h</time>
                </div>
                <button onClick={handleDeleteComment} title="Deletar comentário">
                    <Trash size={24} />
                </button>
                </header>
                <p>
                    {content}
                </p>
            </div>
               
        <footer>
            <button onClick={handleLikeComment}>
                <ThumbsUp />
                Aplaudir <span>{likeCount}</span>
            </button>
        </footer>
        </div>
        </div>
    );
}