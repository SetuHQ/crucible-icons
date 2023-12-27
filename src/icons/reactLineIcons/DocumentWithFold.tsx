// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { LineIconProps } from "../../types";
import { SVGLineIconWrapper } from "../../styles";

export const DocumentWithFold = React.forwardRef<SVGSVGElement, LineIconProps>(
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
                    <polygon
                        strokeWidth="2"
                        fill="none"
                        className="stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="15 3 4 3 4 21 6 20.23 8 21 10 20 12 21 14 20 16 21 18 20 20 21 20 8 15 3"
                    />
                    <polyline
                        strokeWidth="2"
                        fill="none"
                        className="stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="14 4 14 9 19 9"
                    />
                    <line
                        strokeWidth="2"
                        fill="none"
                        className="stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        x1="8"
                        y1="13"
                        x2="16"
                        y2="13"
                    />
                    <line
                        strokeWidth="2"
                        fill="none"
                        className="stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        x1="8"
                        y1="16"
                        x2="16"
                        y2="16"
                    />
                </svg>
            </SVGLineIconWrapper>
        );
    }
);

DocumentWithFold.displayName = "DocumentWithFold";

export default DocumentWithFold;
