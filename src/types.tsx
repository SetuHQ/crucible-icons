import { PictogramsNames } from "./iconsNames";
import { PictogramTypes } from "./iconSpecificStyles";

// prettier-ignore
export interface PictogramIconProps extends PictogramTypes {
    children      ? : never;
    width         ? : number;
    height        ? : number;
    icon          ? : keyof typeof PictogramsNames;
    base          ? : string;
    primary       ? : string;
    secondary     ? : string;
    tertiary      ? : string;
}

// prettier-ignore
export interface LineIconProps {
    stroke ? : string;
    width  ? : number;
    height ? : number;
}

// prettier-ignore
export interface LogoProps {
    width  ? : number;
    height ? : number;
}
