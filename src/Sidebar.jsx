import { PencilSimpleLine} from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';



export function Sidebar() {
    return(
        <aside className={styles.sidebar}>

        <img className={styles.cover} src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" alt="" />
           
            <div className={styles.profile}>
            
                <Avatar hasBorder src="https://pps.whatsapp.net/v/t61.24694-24/296921769_732428011395234_7530630064693897540_n.jpg?ccb=11-4&oh=01_AVwVmJHrZynaxhONpofv_-aFzOcuOmcTjz7rUxGIaN9lEQ&oe=63158BA3" />
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