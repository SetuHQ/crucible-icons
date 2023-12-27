// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { LineIconProps } from "../../types";
import { SVGLineIconWrapper } from "../../styles";

export const EyeWithSlash = React.forwardRef<SVGSVGElement, LineIconProps>(
    ({ width = 24, height = 24, ...props }, forwardedRef) => {
        return (
            <SVGLineIconWrapper {...props}>
                <svg
                    width={width}
                    height={height}
                    ref={forwardedRef}
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <defs></defs>
                    <circle className="stroke" fill="none" strokeWidth="2" cx="12" cy="12" r="3" />
                    <path
                        className="stroke"
                        fill="none"
                        strokeWidth="2"
                        d="m3,12c1.53-3.52,4.97-6,9-6s7.47,2.48,9,6c-1.53,3.52-4.97,6-9,6s-7.47-2.48-9-6Z"
                    />
                    <line
                        className="stroke"
                        fill="none"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        x1="3"
                        y1="3"
                        x2="21"
                        y2="21"
                    />
                </svg>
            </SVGLineIconWrapper>
        );
    }
);

EyeWithSlash.displayName = "EyeWithSlash";

export default EyeWithSlash;
