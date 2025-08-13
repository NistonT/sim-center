import { Container } from "./components/Container";
import { Account } from "./components/Main/Account";
import { Language } from "./components/Main/Language";
import { Logo } from "./components/Main/Logo";
import { Logout } from "./components/Main/Logout";
import { Navigation } from "./components/Main/Navigation";
import { Version } from "./components/Main/Version";

import PanelButton from "@/assets/svg/tui-accordion-item.svg";

function App() {
  return (
    <Container>
      <div className="flex w-full">
        <div className="relative">
          <div className="absolute right-0 top-8">
            <img src={PanelButton} alt="PanelButton" />
          </div>

          <Logo />
          <Navigation />
          <div className="px-3 pb-[18px]">
            <Account />
            <Logout />
            <Language />
            <Version />
          </div>
        </div>
        <div>block2</div>
      </div>
    </Container>
  );
}

export default App;
