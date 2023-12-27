// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { LineIconProps } from "../../types";
import { SVGLineIconWrapper } from "../../styles";

export const CheckboxLineIcon = React.forwardRef<SVGSVGElement, LineIconProps>(
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
                        d="M3 4.125L3 19.875C3 20.4963 3.44772 21 4 21H20C20.5523 21 21 20.4963 21 19.875V4.125C21 3.50368 20.5523 3 20 3H4C3.44772 3 3 3.50368 3 4.125Z"
                        className="stroke"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 14L9 17L18 7"
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

CheckboxLineIcon.displayName = "CheckboxLineIcon";

export default CheckboxLineIcon;
