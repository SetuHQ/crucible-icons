// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { LineIconProps } from "../../types";
import { SVGLineIconWrapper } from "../../styles";

export const ArrowInsideBox = React.forwardRef<SVGSVGElement, LineIconProps>(
    ({ width = 24, height = 24, ...props }, forwardedRef) => {
        return (
            <SVGLineIconWrapper {...props}>
                <svg
                    width={width}
                    height={height}
                    ref={forwardedRef}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs></defs>

                    <path
                        d="M11 8L6 12L11 16"
                        className="stroke"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M17 12H7"
                        className="stroke"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3 8.0625V4.125C3 3.50368 3.44772 3 4 3H20C20.5523 3 21 3.50368 21 4.125V19.875C21 20.4963 20.5523 21 20 21H4C3.44772 21 3 20.4963 3 19.875L3 15.9375"
                        className="stroke"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </SVGLineIconWrapper>
        );
    }
);

ArrowInsideBox.displayName = "ArrowInsideBox";

export default ArrowInsideBox;
