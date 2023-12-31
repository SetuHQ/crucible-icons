// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { PictogramIconProps } from "../../types";
import { SVGPictogramWrapper } from "../../styles";
import { PictogramsNames } from "../../iconsNames";

export const Note = React.forwardRef<SVGSVGElement, PictogramIconProps>(
    ({ width = 64, height = 64, ...props }, forwardedRef) => {
        return (
            <SVGPictogramWrapper icon={PictogramsNames.Note} {...props}>
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
                                d="M40.56,59.23,58.19,42.55a2.53,2.53,0,0,0,.6-.84,2.42,2.42,0,0,0,.21-1v-34a2.59,2.59,0,0,0-.21-1,2.53,2.53,0,0,0-.6-.84,2.85,2.85,0,0,0-1.94-.76H6.75a2.85,2.85,0,0,0-1.94.76,2.6,2.6,0,0,0-.59.81,2.74,2.74,0,0,0-.22,1V57.4a2.59,2.59,0,0,0,.21,1,2.64,2.64,0,0,0,.6.84A2.79,2.79,0,0,0,6.75,60H38.61a3,3,0,0,0,1.06-.2A2.61,2.61,0,0,0,40.56,59.23Z"
                            />
                            <path
                                className="primary"
                                d="M40,59.57V44.5a2.35,2.35,0,0,1,.21-1,2.49,2.49,0,0,1,.57-.8A2.67,2.67,0,0,1,42.65,42H58.57Z"
                            />
                            <g className="mix-blend-multiply">
                                <path className="base" d="M18.5,17h43a1.5,1.5,0,0,1,0,3h-43a1.5,1.5,0,0,1,0-3Z" />
                            </g>
                            <g className="mix-blend-multiply">
                                <path className="base" d="M18.5,24h23a1.5,1.5,0,0,1,0,3h-23a1.5,1.5,0,0,1,0-3Z" />
                            </g>
                        </g>
                    </g>
                </svg>
            </SVGPictogramWrapper>
        );
    }
);

Note.displayName = "Note";

export default Note;
