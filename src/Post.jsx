import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';


import { Comment } from './Comment';
import { Avatar } from './Avatar';


import styles from './Post.module.css';
import { useState } from 'react';



export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState([
        'Post muito bacana !'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const updatedPublishedDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('')

    }


    function handleNewCommentChange() {
        
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)

    }

    function deleteComment(commenToDelete) {
        
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commenToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }


    function handleNewCommentInvalid() {
        event.target.setCustomValidity ('Esse campo é obrigatório !')
    }

    const isNewCommentEmpty = newCommentText.length==0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>

                </div>
                <time title={updatedPublishedDate} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>

                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    required
                    onInvalid={handleNewCommentInvalid}
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>

            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (<Comment
                        key={comment.content}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                    )
                })}

            </div>

        </article>
    );
}

