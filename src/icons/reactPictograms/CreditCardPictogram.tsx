// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { PictogramIconProps } from "../../types";
import { SVGPictogramWrapper } from "../../styles";
import { PictogramsNames } from "../../iconsNames";

export const CreditCardPictogram = React.forwardRef<SVGSVGElement, PictogramIconProps>(
    ({ width = 64, height = 64, ...props }, forwardedRef) => {
        return (
            <SVGPictogramWrapper icon={PictogramsNames.CreditCardPictogram} {...props}>
                <svg
                    width={width}
                    height={height}
                    ref={forwardedRef}
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs></defs>
                    <rect y="10" width="64" height="44" rx="2.0805" className="base" />
                    <g className="mix-blend-multiply">
                        <rect y="17" width="64" height="8" className="base" />
                    </g>
                    <g className="mix-blend-multiply">
                        <rect x="34" y="39" width="23" height="8" rx="4" className="primary" />
                    </g>
                </svg>
            </SVGPictogramWrapper>
        );
    }
);

CreditCardPictogram.displayName = "CreditCardPictogram";

export default CreditCardPictogram;
