// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { LineIconProps } from "../../types";
import { SVGLineIconWrapper } from "../../styles";

export const BookLineIcon = React.forwardRef<SVGSVGElement, LineIconProps>(
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
                        points="12 7 15 5 22 5 22 19 15 19 12 21 9 19 2 19 2 5 9 5 12 7"
                    />
                    <line
                        strokeWidth="2"
                        fill="none"
                        className="stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        x1="12"
                        y1="20"
                        x2="12"
                        y2="7"
                    />
                </svg>
            </SVGLineIconWrapper>
        );
    }
);

BookLineIcon.displayName = "BookLineIcon";

export default BookLineIcon;
