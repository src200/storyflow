import React from "react"
import { Canvas as LayerhubCanvas } from "@layerhub-io/react"
import Playback from "../Playback"
import useDesignEditorContext from "../../../../hooks/useDesignEditorContext"
import ContextMenu from "../ContextMenu"

const Canvas = () => {
  const { displayPlayback } = useDesignEditorContext();

  return (
    <div style={{ flex: 1, display: "flex", position: "relative" }}>
      {displayPlayback && <Playback />}
      <ContextMenu />
      <LayerhubCanvas
        config={{
          background: "#f1f2f6",
          controlsPosition: {
            rotation: "TOP",
          },
          shadow: {
            blur: 2,
            color: "#bdc3c7",
            offsetX: 0,
            offsetY: 0,
          },
        }}
      />
    </div>
  )
}

export default Canvas
