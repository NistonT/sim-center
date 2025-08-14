import PanelButton from "@/assets/svg/tui-accordion-item.svg";
import { useModalPanel } from "@/store/useModalPanel";
import { AnimatePresence, m } from "motion/react";
import { Account } from "./Account";
import { Language } from "./Language";
import { Logo } from "./Logo";
import { Logout } from "./Logout";
import { Navigation } from "./Navigation";
import { Version } from "./Version";

export const Panel = () => {
  const { isOpenPanel, setIsOpenPanel } = useModalPanel();

  return (
    <AnimatePresence>
      {isOpenPanel ? (
        <m.div
          key="panel"
          initial={{ x: -320, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 25 },
          }}
          exit={{
            x: -320,
            opacity: 0,
            transition: { duration: 0.2 },
          }}
          className="relative w-full max-w-[274px]"
        >
          <m.div
            key="close_button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute -right-3.5 top-8"
            onClick={() => setIsOpenPanel(false)}
          >
            <m.img src={PanelButton} alt="PanelButton" initial={{ rotate: 180 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }} />
          </m.div>

          <Logo />
          <Navigation />
          <div className="px-3 pb-[18px]">
            <Account />
            <Logout />
            <Language />
            <Version />
          </div>
        </m.div>
      ) : (
        <m.div
          key="open_button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-0 top-8 rotate-180"
          onClick={() => setIsOpenPanel(true)}
        >
          <m.img initial={{ rotate: 180 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }} src={PanelButton} alt="PanelButton" />
        </m.div>
      )}
    </AnimatePresence>
  );
};
