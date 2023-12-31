// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { LineIconProps } from "../../types";
import { SVGLineIconWrapper } from "../../styles";

export const Dustbin = React.forwardRef<SVGSVGElement, LineIconProps>(
    ({ width = 24, height = 24, ...props }, forwardedRef) => {
        return (
            <SVGLineIconWrapper {...props}>
                <svg
                    width={width}
                    height={height}
                    ref={forwardedRef}
                    id="Layer_1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <defs></defs>
                    <path strokeWidth="2" fill="none" className="stroke" strokeLinecap="round" d="m3,7h18" />
                    <path
                        strokeWidth="2"
                        fill="none"
                        className="stroke"
                        strokeLinecap="round"
                        d="m5,7l.87,12.14c.07,1.05.95,1.86,1.99,1.86h8.28c1.05,0,1.92-.81,1.99-1.86l.87-12.14"
                    />
                    <path
                        strokeWidth="2"
                        fill="none"
                        className="stroke"
                        strokeLinecap="round"
                        d="m16,6v-1c0-1.1-.9-2-2-2h-4c-1.1,0-2,.9-2,2v1"
                    />
                    <path strokeWidth="2" fill="none" className="stroke" strokeLinecap="round" d="m14,10v8" />
                    <path strokeWidth="2" fill="none" className="stroke" strokeLinecap="round" d="m10,10v8" />
                </svg>
            </SVGLineIconWrapper>
        );
    }
);

Dustbin.displayName = "Dustbin";

export default Dustbin;
