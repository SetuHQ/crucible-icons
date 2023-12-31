// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { LineIconProps } from "../../types";
import { SVGLineIconWrapper } from "../../styles";

export const RectangleWithRightArrow = React.forwardRef<SVGSVGElement, LineIconProps>(
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
                        points="16 17 21 12 16 7"
                    />
                    <line
                        strokeWidth="2"
                        className="stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        x1="20"
                        y1="12"
                        x2="8"
                        y2="12"
                    />
                    <path
                        strokeWidth="2"
                        fill="none"
                        className="stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11,17v3a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3h6a1,1,0,0,1,1,1V7"
                    />
                </svg>
            </SVGLineIconWrapper>
        );
    }
);

RectangleWithRightArrow.displayName = "RectangleWithRightArrow";

export default RectangleWithRightArrow;
