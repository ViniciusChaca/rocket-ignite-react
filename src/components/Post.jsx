import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/67805866?v=4"/>
                    <div className={styles.authorInfo}>
                        <strong>Vinicius Ferreira</strong>
                        <span>Arquiteto de Soluções</span>
                    </div>
                </div>

                <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Publicado a 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraaa</p>

                <p>Acabei de subir mais um projeto no meu portifólio. é um projeto que fiz no NLW, evento da Rocketseat.</p>

                <p><a href="#">#novoprojeto</a> <a href="#">#ignite</a> <a href="#">#rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário"/>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment></Comment>
            </div>
        </article>
    )
}