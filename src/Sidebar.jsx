import { PencilSimpleLine} from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';



export function Sidebar() {
    return(
        <aside className={styles.sidebar}>

        <img className={styles.cover} src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" alt="" />
           
            <div className={styles.profile}>
            
                <Avatar hasBorder src="https://avatars.githubusercontent.com/u/89458923?v=4" />
                <strong>Matheus J Barbosa</strong>
                <span>Front-end Web Developer</span>
            
            <footer>
                <a href="#">
                    <PencilSimpleLine size={16} />
                     Editar seu perfil
                </a>
            </footer>
            
            </div>
        </aside>
    );
}