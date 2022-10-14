import Provider from "./Provider"
import Container from "./Container"
import DesignEditor from "./views/DesignEditor"

export default function Editor({ id }) {
  return (
    <Provider>
      <Container>
        <DesignEditor />
      </Container>
    </Provider>
  )
}