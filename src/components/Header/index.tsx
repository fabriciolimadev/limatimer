import { HeaderContainer } from "./styles";

import logoIgnite from "../../assets/SIMBOLO.svg";
import { Scroll, Timer, Sun, Moon } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
//import { ThemeContext } from "styled-components";
import { ThemeTogleContext } from "../../contexts/ThemeToggle";

export function Header() {
  //const theme = useContext(ThemeContext);
  const { theme, toggleTheme } = useContext(ThemeTogleContext);
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="Logo" width="80px" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
        <button
          onClick={toggleTheme}
          title={
            theme.title === "dark"
              ? "Mudar para tema claro"
              : "Mudar para tema escuro"
          }
        >
          {theme.title === "dark" ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </nav>
    </HeaderContainer>
  );
}
