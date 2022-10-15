import React from 'react';
import styles from '@styles/Editor.module.css';
import Editor from '../../editor';

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