import BoardItem from './components/boardItem'
import styles from './page.module.css'

const boardItemContents = [
  // {content: 'hello world 1'},
  // {content: 'hello world 2'},
  // {content: 'hello world 3'},
  {content: 'aagh'}
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.jotBoard}>
        {
          boardItemContents.map(boardItem => (
            <BoardItem content={boardItem.content}></BoardItem>
          ))
        }
      </div>
    </main>
  )
}
