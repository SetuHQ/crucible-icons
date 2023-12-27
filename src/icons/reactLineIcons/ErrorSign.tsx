// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { LineIconProps } from "../../types";
import { SVGLineIconWrapper } from "../../styles";

export const ErrorSign = React.forwardRef<SVGSVGElement, LineIconProps>(
    ({ width = 24, height = 24, ...props }, forwardedRef) => {
        return (
            <SVGLineIconWrapper {...props}>
                <svg
                    width={width}
                    height={height}
                    ref={forwardedRef}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <defs></defs>
                    <g id="Layer_1" data-name="Layer 1">
                        <circle
                            fill="none"
                            className="stroke"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            cx="11.98"
                            cy="15.92"
                            r=".5"
                        />
                    </g>
                    <g id="Layer_2" data-name="Layer 2">
                        <path
                            strokeWidth="2"
                            fill="none"
                            className="stroke"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12,21c4.97,0,9-4.03,9-9S16.97,3,12,3,3,7.03,3,12s4.03,9,9,9Z"
                        />
                        <path
                            strokeWidth="2"
                            fill="none"
                            className="stroke"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12,7v6"
                        />
                    </g>
                </svg>
            </SVGLineIconWrapper>
        );
    }
);

ErrorSign.displayName = "ErrorSign";

export default ErrorSign;
