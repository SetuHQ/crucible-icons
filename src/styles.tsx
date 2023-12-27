import styled from "styled-components";
import { iconSpecificStyles, PictogramTypes } from "./iconSpecificStyles";
import { LineIconProps } from "./types";

interface PictogramIconProps extends PictogramTypes {
    icon: keyof typeof iconSpecificStyles;
}

// prettier-ignore
export const SVGPictogramWrapper = styled.div<PictogramIconProps>`
    display: inline-block;

    .base {
        fill : ${(props) => (props.base ? props.base : iconSpecificStyles[props.icon].base)};
    }

    .primary {
        fill : ${(props) => (props.primary ? props.primary : iconSpecificStyles[props.icon].primary)};
    }

    .secondary {
        fill : ${(props) => (props.secondary ? props.secondary : iconSpecificStyles[props.icon].secondary)};
    }

    .tertiary {
        fill : ${(props) => (props.tertiary ? props.tertiary : iconSpecificStyles[props.icon].tertiary)};
    }

    .isolate {
        isolation : isolate;
    }

    .mix-blend-multiply {
        mix-blend-mode : multiply;
    }

`;

// prettier-ignore
export const SVGLineIconWrapper = styled.div<LineIconProps>`
    display : inline-block;

    .stroke {
        stroke : ${(props) => (props.stroke ? props.stroke : "#000")};
    }
`;

export const SVGLogoWrapper = styled.div``;
