import animations from "@/styles/animations";
import colors from "@/styles/colors";

export default {
  colors,
  animations,
} as Theme;

export type Theme = {
  colors: {
    [x: string]: string;
  };
  animations: {
    [x: string]: string;
  };
};
