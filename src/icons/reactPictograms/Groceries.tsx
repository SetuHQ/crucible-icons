// GENERATED BY /script/build.js
// DO NOT EDIT MANUALLY

import * as React from "react";
import { PictogramIconProps } from "../../types";
import { SVGPictogramWrapper } from "../../styles";
import { PictogramsNames } from "../../iconsNames";

export const Groceries = React.forwardRef<SVGSVGElement, PictogramIconProps>(
    ({ width = 64, height = 64, ...props }, forwardedRef) => {
        return (
            <SVGPictogramWrapper icon={PictogramsNames.Groceries} {...props}>
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
                        d="M4 12.7638C4 12.2839 4.22963 11.833 4.61774 11.5507L7.24274 9.64164C7.76872 9.25911 8.48128 9.25911 9.00726 9.64164L11.3677 11.3584C11.8937 11.7409 12.6063 11.7409 13.1323 11.3584L15.4927 9.64164C16.0187 9.25911 16.7313 9.25911 17.2573 9.64164L19.6177 11.3584C20.1437 11.7409 20.8563 11.7409 21.3823 11.3584L23.7427 9.64164C24.2687 9.25911 24.9813 9.25911 25.5073 9.64164L27.8677 11.3584C28.3937 11.7409 29.1063 11.7409 29.6323 11.3584L31.9927 9.64164C32.5187 9.25911 33.2313 9.25911 33.7573 9.64164L36.3823 11.5507C36.7704 11.833 37 12.2839 37 12.7638V58.5C37 59.3284 36.3284 60 35.5 60H5.5C4.67157 60 4 59.3284 4 58.5V12.7638Z"
                        className="base"
                    />
                    <path
                        d="M31 30.9556C31 30.3435 31.2431 29.7566 31.6759 29.3238L36.0933 24.9064C36.5261 24.4736 37.1131 24.2305 37.7251 24.2305H38.5H39.2749C39.8869 24.2305 40.4739 24.4736 40.9067 24.9064L45.3241 29.3238C45.7569 29.7566 46 30.3435 46 30.9556V57.692C46 58.9665 44.9668 59.9997 43.6923 59.9997H33.3077C32.0332 59.9997 31 58.9665 31 57.692V30.9556Z"
                        className="primary"
                    />
                    <path
                        d="M34.4615 20.7696C34.4615 19.4951 35.4947 18.4619 36.7692 18.4619H40.2308C41.5053 18.4619 42.5385 19.4951 42.5385 20.7696V25.385H34.4615V20.7696Z"
                        className="secondary"
                    />
                    <g className="mix-blend-multiply">
                        <path
                            d="M34.4615 20.7696C34.4615 19.4951 35.4947 18.4619 36.7692 18.4619H40.2308C41.5053 18.4619 42.5385 19.4951 42.5385 20.7696V25.385H34.4615V20.7696Z"
                            className="base"
                        />
                    </g>
                    <circle cx="50" cy="52" r="8" fill="white" />
                    <g className="mix-blend-multiply">
                        <circle cx="50" cy="52" r="8" fill="#F8F8F8" />
                    </g>
                    <g className="mix-blend-multiply">
                        <circle cx="50" cy="52" r="8" className="tertiary" />
                    </g>
                    <circle cx="47" cy="48" r="1" fill="white" />
                    <g className="mix-blend-multiply">
                        <rect x="31" y="32.3076" width="15" height="6.92308" fill="#B7CDE1" />
                    </g>
                </svg>
            </SVGPictogramWrapper>
        );
    }
);

Groceries.displayName = "Groceries";

export default Groceries;