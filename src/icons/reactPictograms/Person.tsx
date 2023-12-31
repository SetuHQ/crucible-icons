// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { PictogramIconProps } from "../../types";
import { SVGPictogramWrapper } from "../../styles";
import { PictogramsNames } from "../../iconsNames";

export const Person = React.forwardRef<SVGSVGElement, PictogramIconProps>(
    ({ width = 64, height = 64, ...props }, forwardedRef) => {
        return (
            <SVGPictogramWrapper icon={PictogramsNames.Person} {...props}>
                <svg
                    width={width}
                    height={height}
                    ref={forwardedRef}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                >
                    <defs></defs>
                    <g className="isolate">
                        <path
                            className="base"
                            d="M31.46,21.61h1.13A16.71,16.71,0,0,1,49,38.55v22.8a2.25,2.25,0,0,1-2.2,2.26H17.2a2.21,2.21,0,0,1-1.56-.69A2.24,2.24,0,0,1,15,61.35V38.55A16.71,16.71,0,0,1,31.46,21.61Z"
                        />
                        <path
                            className="base"
                            d="M31.94,20.32A10.16,10.16,0,0,0,39.12,3a10.16,10.16,0,1,0-7.18,17.34Z"
                        />
                        <g className="mix-blend-multiply">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M37.8402 8.65869C38.6686 8.65869 39.3402 9.33026 39.3402 10.1587C39.3402 12.1222 38.5602 14.0053 37.1717 15.3937C35.7833 16.7821 33.9003 17.5621 31.9368 17.5621C31.1083 17.5621 30.4368 16.8905 30.4368 16.0621C30.4368 15.2336 31.1083 14.5621 31.9368 14.5621C33.1046 14.5621 34.2246 14.0982 35.0504 13.2724C35.8762 12.4466 36.3402 11.3265 36.3402 10.1587C36.3402 9.33026 37.0117 8.65869 37.8402 8.65869Z"
                                className="base"
                            />
                        </g>
                        <g className="mix-blend-multiply">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M19.5 6.6123C19.5 5.78388 20.1716 5.1123 21 5.1123H32C32.8284 5.1123 33.5 5.78388 33.5 6.6123C33.5 7.44073 32.8284 8.1123 32 8.1123H21C20.1716 8.1123 19.5 7.44073 19.5 6.6123Z"
                                className="base"
                            />
                        </g>
                    </g>
                </svg>
            </SVGPictogramWrapper>
        );
    }
);

Person.displayName = "Person";

export default Person;
