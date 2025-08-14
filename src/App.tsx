import { Container } from "./components/Container";
import { Header } from "./components/Header";

import { Panel } from "./components/Main/Panel";

function App() {
  return (
    <Container>
      <div className="flex w-full">
        <Panel />
        <div className="bg-main w-full">
          <div className="bg-white py-4 px-6 rounded-xl m-2">
            <Header />

            <div></div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
