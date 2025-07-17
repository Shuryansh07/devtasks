import { useTheme } from "../../context/ThemeContext";
import * as styles from "../../components/styles/styles";

export default function useStyledTheme() {
  const { darkMode } = useTheme();
  return { darkMode, styles };
}
