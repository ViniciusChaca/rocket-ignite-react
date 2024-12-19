import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import "./global.css"
import styles from "./App.module.css"


export function App() {

  return (
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
      <Sidebar/>
        <main>
        <Post author="Vinicius Ferreira" content="Formação enviada de teste"></Post>
        <Post author="Eduardo Chaca" content="Formação enviada de teste"></Post>
        </main>

      </div>
    </div>
  )
}
