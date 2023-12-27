// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { PictogramIconProps } from "../../types";
import { SVGPictogramWrapper } from "../../styles";
import { PictogramsNames } from "../../iconsNames";

export const GraphBar = React.forwardRef<SVGSVGElement, PictogramIconProps>(
    ({ width = 64, height = 64, ...props }, forwardedRef) => {
        return (
            <SVGPictogramWrapper icon={PictogramsNames.GraphBar} {...props}>
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
                            <path className="base" d="M58.5,57H5.5a1.5,1.5,0,0,0,0,3h53a1.5,1.5,0,0,0,0-3Z" />
                            <g className="mix-blend-multiply">
                                <path
                                    className="primary"
                                    d="M11,6.33a2.19,2.19,0,0,1,.52-1.57A2.21,2.21,0,0,1,13,4H28a2.21,2.21,0,0,1,1.48.76A2.19,2.19,0,0,1,30,6.33V60H11Z"
                                />
                            </g>
                            <g className="mix-blend-multiply">
                                <path
                                    className="base"
                                    d="M35,26.17a2.22,2.22,0,0,1,.52-1.58A2.19,2.19,0,0,1,37,23.83H52a2.19,2.19,0,0,1,1.48.76A2.22,2.22,0,0,1,54,26.17V60H35Z"
                                />
                            </g>
                        </g>
                    </g>
                </svg>
            </SVGPictogramWrapper>
        );
    }
);

GraphBar.displayName = "GraphBar";

export default GraphBar;
