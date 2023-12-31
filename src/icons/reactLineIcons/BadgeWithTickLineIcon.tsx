// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { LineIconProps } from "../../types";
import { SVGLineIconWrapper } from "../../styles";

export const BadgeWithTickLineIcon = React.forwardRef<SVGSVGElement, LineIconProps>(
    ({ width = 24, height = 24, ...props }, forwardedRef) => {
        return (
            <SVGLineIconWrapper {...props}>
                <svg
                    width={width}
                    height={height}
                    ref={forwardedRef}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs></defs>
                    <path
                        d="M20.28 12.0001C20.28 10.7801 21.42 9.34014 20.98 8.28014C20.54 7.22014 18.68 7.00015 17.85 6.15015C17.02 5.30015 16.85 3.47015 15.72 3.02015C14.59 2.57015 13.22 3.72015 12 3.72015C10.78 3.72015 9.34002 2.58015 8.28002 3.00015C7.22002 3.42015 7.00002 5.32015 6.15002 6.15015C5.30002 6.98015 3.47002 7.18014 3.00002 8.28014C2.53002 9.38014 3.70002 10.7801 3.70002 12.0001C3.70002 13.2201 2.58002 14.6601 3.00002 15.7201C3.42002 16.7801 5.32002 17.0001 6.15002 17.8501C6.98002 18.7001 7.15002 20.5301 8.28002 20.9801C9.41002 21.4301 10.78 20.2801 12 20.2801C13.22 20.2801 14.66 21.4201 15.72 20.9801C16.78 20.5401 17.03 18.6801 17.85 17.8501C18.67 17.0201 20.53 16.8501 20.98 15.7201C21.43 14.5901 20.28 13.2201 20.28 12.0001Z"
                        className="stroke"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8 13L10.5 15.5L15.5 10.5"
                        className="stroke"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </SVGLineIconWrapper>
        );
    }
);

BadgeWithTickLineIcon.displayName = "BadgeWithTickLineIcon";

export default BadgeWithTickLineIcon;
