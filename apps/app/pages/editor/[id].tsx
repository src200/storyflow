import styles from '@styles/Editor.module.css';
import dynamic from 'next/dynamic';
import Editor from '../../editor';
// const Editor = dynamic(() => import('../../editor'),
//     { ssr: false }
// );

interface EditorPageProps {
    id: string;
}
export default function EditorPage({ id = 'new' }: EditorPageProps) {
    return (
        <div className={styles.editor}>
            <Editor id={id} />
        </div>
    )
}