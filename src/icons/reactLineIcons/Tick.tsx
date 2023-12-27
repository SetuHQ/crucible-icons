// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { LineIconProps } from "../../types";
import { SVGLineIconWrapper } from "../../styles";

export const Tick = React.forwardRef<SVGSVGElement, LineIconProps>(
    ({ width = 24, height = 24, ...props }, forwardedRef) => {
        return (
            <SVGLineIconWrapper {...props}>
                <svg
                    width={width}
                    height={height}
                    ref={forwardedRef}
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <defs></defs>
                    <polyline
                        strokeWidth="2"
                        fill="none"
                        className="stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="5 14 9 18 19 7"
                    />
                </svg>
            </SVGLineIconWrapper>
        );
    }
);

Tick.displayName = "Tick";

export default Tick;
