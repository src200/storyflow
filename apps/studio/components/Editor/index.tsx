import {
    Stage,
    Layer,
    Rect,
    Circle,
    Transformer
} from 'react-konva';

export interface EditorProps {
    width?: number;
    height?: number;
}

export default function Editor(props: EditorProps) {
    const editorWidth = props.width || window.innerWidth;
    const editorHeight = props.height || window.innerHeight;

    return (
        <Stage
            width={editorWidth}
            height={editorHeight}
            style={{ border: '1px solid grey' }}>
            <Layer>
                <Rect width={50} height={50} fill="red" />
                <Circle x={200} y={200} stroke="black" radius={50} />
            </Layer>
        </Stage>
    );
}