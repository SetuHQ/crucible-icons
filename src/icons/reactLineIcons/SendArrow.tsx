// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { LineIconProps } from "../../types";
import { SVGLineIconWrapper } from "../../styles";

export const SendArrow = React.forwardRef<SVGSVGElement, LineIconProps>(
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
                        d="M20 12L3 21L7.33333 12L3 3L20 12Z"
                        className="stroke"
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8 12L20 12"
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

SendArrow.displayName = "SendArrow";

export default SendArrow;
