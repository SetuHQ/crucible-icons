// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { LineIconProps } from "../../types";
import { SVGLineIconWrapper } from "../../styles";

export const ChevronDoubleLeft = React.forwardRef<SVGSVGElement, LineIconProps>(
    ({ width = 24, height = 24, ...props }, forwardedRef) => {
        return (
            <SVGLineIconWrapper {...props}>
                <svg
                    width={width}
                    height={height}
                    ref={forwardedRef}
                    id="Layer_2"
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <defs></defs>
                    <polyline
                        fill="none"
                        className="stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2px"
                        points="13 3 6 12 13 21"
                    />
                    <polyline
                        fill="none"
                        className="stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2px"
                        points="18 3 11 12 18 21"
                    />
                </svg>
            </SVGLineIconWrapper>
        );
    }
);

ChevronDoubleLeft.displayName = "ChevronDoubleLeft";

export default ChevronDoubleLeft;
