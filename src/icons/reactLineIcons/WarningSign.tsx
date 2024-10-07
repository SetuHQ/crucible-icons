// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { LineIconProps } from "../../types";
import { SVGLineIconWrapper } from "../../styles";

export const WarningSign = React.forwardRef<SVGSVGElement, LineIconProps>(
    ({ width = 24, height = 24, ...props }, forwardedRef) => {
        return (
            <SVGLineIconWrapper {...props}>
                <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 24 24"
                >
                    <defs></defs>

                    <circle
                        className="stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        cx="12.04"
                        cy="15.72"
                        r=".5"
                    />

                    <path
                        strokeWidth="2"
                        className="stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m12,10v3"
                    />
                    <path
                        strokeWidth="2"
                        fill="none"
                        className="stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m12,4l8.66,15H3.34L12,4Z"
                    />
                </svg>
            </SVGLineIconWrapper>
        );
    }
);

WarningSign.displayName = "WarningSign";

export default WarningSign;
