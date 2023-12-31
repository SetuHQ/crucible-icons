// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { PictogramIconProps } from "../../types";
import { SVGPictogramWrapper } from "../../styles";
import { PictogramsNames } from "../../iconsNames";

export const Envelope = React.forwardRef<SVGSVGElement, PictogramIconProps>(
    ({ width = 64, height = 64, ...props }, forwardedRef) => {
        return (
            <SVGPictogramWrapper icon={PictogramsNames.Envelope} {...props}>
                <svg
                    width={width}
                    height={height}
                    ref={forwardedRef}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                >
                    <defs></defs>
                    <g className="isolate">
                        <g id="Layer_1" data-name="Layer 1">
                            <path
                                className="base"
                                d="M2,8H62a1.85,1.85,0,0,1,1.41.69A2.5,2.5,0,0,1,64,10.34V53.66a2.5,2.5,0,0,1-.59,1.65A1.85,1.85,0,0,1,62,56H2a1.85,1.85,0,0,1-1.41-.69A2.5,2.5,0,0,1,0,53.66V10.34A2.5,2.5,0,0,1,.59,8.69,1.85,1.85,0,0,1,2,8Z"
                            />
                            <g className="mix-blend-multiply">
                                <path
                                    className="primary"
                                    d="M62.48,8H1.62a.5.5,0,0,0-.32.13.62.62,0,0,0-.2.31.78.78,0,0,0,0,.4.67.67,0,0,0,.18.33c5.58,5.25,26.86,26,30.74,26s25.74-20.82,30.86-26A.7.7,0,0,0,63,8.83a.78.78,0,0,0,0-.4.64.64,0,0,0-.21-.31A.52.52,0,0,0,62.48,8Z"
                                />
                            </g>
                        </g>
                    </g>
                </svg>
            </SVGPictogramWrapper>
        );
    }
);

Envelope.displayName = "Envelope";

export default Envelope;
