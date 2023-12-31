// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { LineIconProps } from "../../types";
import { SVGLineIconWrapper } from "../../styles";

export const LockLineIcon = React.forwardRef<SVGSVGElement, LineIconProps>(
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
                    <rect
                        strokeWidth="2"
                        fill="none"
                        className="stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        x="5"
                        y="10"
                        width="14"
                        height="11"
                        rx="1"
                    />
                    <path
                        strokeWidth="2"
                        fill="none"
                        className="stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8,9V8a4,4,0,0,1,4-4h0a4,4,0,0,1,4,4V9"
                    />
                    <circle
                        strokeWidth="2"
                        fill="none"
                        className="stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        cx="12"
                        cy="16"
                        r="1"
                    />
                </svg>
            </SVGLineIconWrapper>
        );
    }
);

LockLineIcon.displayName = "LockLineIcon";

export default LockLineIcon;
