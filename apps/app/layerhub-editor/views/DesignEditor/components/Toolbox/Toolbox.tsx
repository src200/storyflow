import React from "react"
import { useActiveObject, useEditor } from "@layerhub-io/react"
import getSelectionType from "../../../../utils/get-selection-type"
import { styled } from "baseui"
import Items from "./Items"
import useAppContext from "../../../../hooks/useAppContext"
import { ILayer } from "@layerhub-io/types"
import { Block } from "baseui/block"

const DEFAULT_TOOLBOX = "Canvas"

interface ToolboxState {
  toolbox: string
}

const SelectionContainer = styled("div", () => ({
  display: "flex",
  // flexDirection: "column",
  alignItems: "center",
  // paddingLeft: "12px"
}))

const Toolbox = () => {
  const [state, setState] = React.useState<ToolboxState>({ toolbox: "Text" })
  const { setActiveSubMenu } = useAppContext()
  const activeObject = useActiveObject() as ILayer
  const editor = useEditor()

  React.useEffect(() => {
    const selectionType = getSelectionType(activeObject)
    if (selectionType) {
      if (selectionType.length > 1) {
        setState({ toolbox: "Multiple" })
      } else {
        setState({ toolbox: selectionType[0] })
      }
    } else {
      setState({ toolbox: DEFAULT_TOOLBOX })
      setActiveSubMenu("")
    }
  }, [activeObject])

  React.useEffect(() => {
    let watcher = async () => {
      if (activeObject) {
        // @ts-ignore
        const selectionType = getSelectionType(activeObject) as any

        if (selectionType.length > 1) {
          setState({ toolbox: "Multiple" })
        } else {
          setState({ toolbox: selectionType[0] })
        }
      }
    }
    if (editor) {
      editor.on("history:changed", watcher)
    }
    return () => {
      if (editor) {
        editor.off("history:changed", watcher)
      }
    }
  }, [editor, activeObject])

  // @ts-ignore
  const Component = Items[state.toolbox]
  return (
    // eslint-disable-next-line baseui/no-block-style
    <Block
      $style={{
        background: "#ffffff",
        width: Component ? "306px" : 0,
        flex: "none",
        borderRight: "1px solid #d7d8e3",
        display: "flex",
        transition: "ease width 0.3s",
        overflow: "hidden",
      }}
    >
      {Component ? <Component /> : <SelectionContainer>{state.toolbox}</SelectionContainer>}
    </Block>)
}

export default Toolbox
