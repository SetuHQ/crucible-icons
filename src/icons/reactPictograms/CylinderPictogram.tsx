// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { PictogramIconProps } from "../../types";
import { SVGPictogramWrapper } from "../../styles";
import { PictogramsNames } from "../../iconsNames";

export const CylinderPictogram = React.forwardRef<SVGSVGElement, PictogramIconProps>(
    ({ width = 64, height = 64, ...props }, forwardedRef) => {
        return (
            <SVGPictogramWrapper icon={PictogramsNames.CylinderPictogram} {...props}>
                <svg
                    width={width}
                    height={height}
                    ref={forwardedRef}
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs></defs>
                    <rect x="39" y="4" width="11" height="2" rx="1" transform="rotate(90 39 4)" fill="white" />
                    <rect x="27" y="4" width="11" height="2" rx="1" transform="rotate(90 27 4)" fill="white" />
                    <rect x="20" y="4" width="24" height="2" rx="1" fill="white" />
                    <rect x="16" y="12.0181" width="32" height="47.9819" rx="6" fill="white" />
                    <g className="mix-blend-multiply">
                        <rect x="16" y="12.0181" width="32" height="47.9819" rx="6" className="base" />
                    </g>
                    <g className="mix-blend-multiply">
                        <rect x="16" y="25" width="32" height="13" className="primary" />
                    </g>
                    <g className="mix-blend-multiply">
                        <rect x="20" y="4" width="24" height="2" rx="1" className="base" />
                    </g>
                    <g className="mix-blend-multiply">
                        <rect x="20" y="4" width="24" height="2" rx="1" className="primary" />
                    </g>
                    <g className="mix-blend-multiply">
                        <rect
                            x="39"
                            y="4"
                            width="11"
                            height="2"
                            rx="1"
                            transform="rotate(90 39 4)"
                            className="primary"
                        />
                    </g>
                    <g className="mix-blend-multiply">
                        <rect
                            x="27"
                            y="4"
                            width="11"
                            height="2"
                            rx="1"
                            transform="rotate(90 27 4)"
                            className="primary"
                        />
                    </g>
                </svg>
            </SVGPictogramWrapper>
        );
    }
);

CylinderPictogram.displayName = "CylinderPictogram";

export default CylinderPictogram;
