
import { Post } from './Post';
import { Header } from './Header';
import { Sidebar} from './Sidebar';

import './global.css';

import styles from './App.module.css';

const posts = [
  {
  id: 1,
  author: {
      avatarUrl:'https://avatars.githubusercontent.com/u/89458923?v=4',
      name: 'Matheus J Barobosa',
      role: 'CEO of gaming'    
      },
  content: [
              { type :'paragraph', content:'Fala galeraa 👋' },
              { type :'paragraph', content:'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },  
              { type :'link', content: ' jane.design/doctorcare'},
                  
              ],
              publishedAt: new Date('2022-08-16 20:00:00'),
  },

  {
      id: 2,
      author: {
          avatarUrl:'https://i.scdn.co/image/3fb9fb7e2c4ae8bbfb5b3343e03fcbc77c40b8a1',
          name: 'SpongeBob ',
          role: 'Fry cook @KrustyKrab'    
          },
      content: [
        {type :'paragraph', content:'Fala galeraa 👋' },
        { type :'paragraph', content:'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },  
        { type :'link', content: ' jane.design/doctorcare'},
                  ],
                  publishedAt: new Date('2022-08-17 20:00:00'),
      },
];



export function App() {
  

  return (
    
    
    <div className="App">
     
      <Header/>
      
      <div className = {styles.wrapper} >

       <Sidebar />
        <main>
       
        {posts.map(post=>{
          return (
            <Post 
            key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}

        </main>

      </div>
    </div>
  )
}


