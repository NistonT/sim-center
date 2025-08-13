import { Container } from "./components/Container";
import { Logo } from "./components/Main/Logo";
import { navigation } from "./constants/navigation.constants";

function App() {
  return (
    <Container>
      <div className="flex w-full">
        <div>
          <Logo />
          <div>
            {navigation.map((link) => (
              <div className="flex">
                <div>
                  <img src={link.logo} alt={`nav-${link.href}`} />
                </div>
                <div className="font-manropeExtraBold font-extrabold text-[15px] leading-[24px] tracking-normal align-middle">{link.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div>block2</div>
      </div>
    </Container>
  );
}

export default App;
