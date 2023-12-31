// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { PictogramIconProps } from "../../types";
import { SVGPictogramWrapper } from "../../styles";
import { PictogramsNames } from "../../iconsNames";

export const Necklace = React.forwardRef<SVGSVGElement, PictogramIconProps>(
    ({ width = 64, height = 64, ...props }, forwardedRef) => {
        return (
            <SVGPictogramWrapper icon={PictogramsNames.Necklace} {...props}>
                <svg
                    width={width}
                    height={height}
                    ref={forwardedRef}
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs></defs>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M57.8686 23.7151C59.2758 20.318 60 16.677 60 13H56C56 16.1517 55.3792 19.2726 54.1731 22.1844C52.967 25.0962 51.1992 27.742 48.9706 29.9706C46.742 32.1992 44.0962 33.967 41.1844 35.1731C38.2726 36.3792 35.1517 37 32 37C28.8483 37 25.7274 36.3792 22.8156 35.1731C19.9038 33.967 17.258 32.1992 15.0294 29.9706C12.8008 27.742 11.033 25.0962 9.82689 22.1844C8.62078 19.2726 8 16.1517 8 13H4C4 16.677 4.72424 20.318 6.13137 23.7151C7.5385 27.1123 9.60097 30.1989 12.201 32.799C14.801 35.399 17.8877 37.4615 21.2849 38.8686C24.682 40.2758 28.323 41 32 41C35.677 41 39.318 40.2758 42.7151 38.8686C46.1123 37.4615 49.1989 35.399 51.799 32.799C54.399 30.199 56.4615 27.1123 57.8686 23.7151Z"
                        className="base"
                    />
                    <rect x="31" y="39" width="2" height="6" className="base" />
                    <circle cx="32" cy="52" r="8" className="primary" />
                    <path
                        d="M32 47.2002L36.1569 49.6002V54.4002L32 56.8002L27.8431 54.4002V49.6002L32 47.2002Z"
                        className="tertiary"
                    />
                    <g className="mix-blend-multiply">
                        <path d="M32 47.2002L36 49.6002V54.4002L32 56.8002V47.2002Z" className="secondary" />
                    </g>
                    <rect x="4" y="4" width="4" height="9" className="base" />
                    <rect x="56" y="4" width="4" height="9" className="base" />
                </svg>
            </SVGPictogramWrapper>
        );
    }
);

Necklace.displayName = "Necklace";

export default Necklace;
