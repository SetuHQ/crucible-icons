// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { LineIconProps } from "../../types";
import { SVGLineIconWrapper } from "../../styles";

export const FolderWithArrowsLineIcon = React.forwardRef<SVGSVGElement, LineIconProps>(
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
                    <path
                        strokeWidth="2"
                        fill="none"
                        className="stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20,20H4a1,1,0,0,1-1-1V5A1,1,0,0,1,4,4h6l2,3h8a1,1,0,0,1,1,1V19A1,1,0,0,1,20,20Z"
                    />
                    <polyline
                        strokeWidth="2"
                        fill="none"
                        className="stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="9 8.97 7 10.97 17 10.97"
                    />
                    <polyline
                        strokeWidth="2"
                        fill="none"
                        className="stroke"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="15 16.97 17 14.97 7 14.97"
                    />
                </svg>
            </SVGLineIconWrapper>
        );
    }
);

FolderWithArrowsLineIcon.displayName = "FolderWithArrowsLineIcon";

export default FolderWithArrowsLineIcon;
