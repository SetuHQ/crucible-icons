import React from "react";
import { render } from "@testing-library/react";
import * as Pictograms from "../icons/reactPictograms/";
import * as LineIcons from "../icons/reactLineIcons/";

import { iconSpecificStyles } from "../iconSpecificStyles";

jest.mock("styled-components", () => jest.requireActual("styled-components/dist/styled-components.browser.cjs.js"));

describe(`Pictograms`, () => {
    it("all Pictograms", () => {
        (Object.keys(Pictograms) as Array<keyof typeof Pictograms>).forEach((iconKey) => {
            const Instance = Pictograms[iconKey];
            // Elements with Props given
            {
                const { container } = render(
                    <Instance width={60} height={60} base="red" primary="orange" secondary="yellow" tertiary="green" />
                );
                const elementWithBaseProp = container.getElementsByClassName("base")[0];
                const elementWithPrimaryProp = container.getElementsByClassName("primary")[0];
                const elementWithSecondaryProp = container.getElementsByClassName("secondary")[0];
                const elementWithTertiaryProp = container.getElementsByClassName("tertiary")[0];
                const elementWithWidthPropHeightProp = container.getElementsByTagName("svg")[0];

                elementWithWidthPropHeightProp && expect(elementWithWidthPropHeightProp).toHaveStyle("height: 60");
                elementWithWidthPropHeightProp && expect(elementWithWidthPropHeightProp).toHaveStyle("width: 60");
                elementWithBaseProp && expect(elementWithBaseProp).toHaveStyle(`fill: red}`);
                elementWithPrimaryProp && expect(elementWithPrimaryProp).toHaveStyle(`fill: orange}`);
                elementWithSecondaryProp && expect(elementWithSecondaryProp).toHaveStyle("fill: yellow");
                elementWithTertiaryProp && expect(elementWithTertiaryProp).toHaveStyle("fill: green");
            }

            // Elements with no Props given
            {
                const { container } = render(<Instance />);
                const elementWithoutBaseProp = container.getElementsByClassName("base")[0];
                const elementWithoutPrimary = container.getElementsByClassName("primary")[0];
                const elementWithoutSecondary = container.getElementsByClassName("secondary")[0];
                const elementWithoutTertiary = container.getElementsByClassName("tertiary")[0];
                const elementWithoutWidthPropHeightProp = container.getElementsByTagName("svg")[0];

                elementWithoutWidthPropHeightProp && expect(elementWithoutWidthPropHeightProp).toHaveStyle("width: 64");
                elementWithoutWidthPropHeightProp &&
                    expect(elementWithoutWidthPropHeightProp).toHaveStyle("height: 64");
                elementWithoutBaseProp &&
                    expect(elementWithoutBaseProp).toHaveStyle(`fill: ${iconSpecificStyles[iconKey]?.base}`);
                elementWithoutPrimary &&
                    expect(elementWithoutPrimary).toHaveStyle(`fill: ${iconSpecificStyles[iconKey]?.primary}`);
                elementWithoutSecondary &&
                    expect(elementWithoutSecondary).toHaveStyle(`fill: ${iconSpecificStyles[iconKey]?.secondary}`);
                elementWithoutTertiary &&
                    expect(elementWithoutTertiary).toHaveStyle(`fill: ${iconSpecificStyles[iconKey]?.tertiary}`);
            }
        });
    });

    it("all LineIcons", () => {
        (Object.keys(LineIcons) as Array<keyof typeof LineIcons>).forEach((iconKey) => {
            const Instance = LineIcons[iconKey];
            {
                const { container } = render(<Instance width={60} height={60} stroke="red" />);
                const elementWithWidthPropHeightProp = container.getElementsByTagName("svg")[0];
                const elementWithStrokeProp = container.getElementsByClassName("stroke")[0];

                elementWithWidthPropHeightProp && expect(elementWithWidthPropHeightProp).toHaveStyle("width: 60");
                elementWithWidthPropHeightProp && expect(elementWithWidthPropHeightProp).toHaveStyle("height: 60");
                elementWithStrokeProp && expect(elementWithStrokeProp).toHaveStyle("stroke: red");
            }

            {
                const { container } = render(<Instance />);
                const elementWithoutWidthPropHeightProp = container.getElementsByTagName("svg")[0];
                const elementWithoutStrokeProp = container.getElementsByClassName("stroke")[0];

                elementWithoutWidthPropHeightProp && expect(elementWithoutWidthPropHeightProp).toHaveStyle("width: 24");
                elementWithoutWidthPropHeightProp &&
                    expect(elementWithoutWidthPropHeightProp).toHaveStyle("height: 24");
                elementWithoutStrokeProp && expect(elementWithoutStrokeProp).toHaveStyle("stroke: #000");
            }
        });
    });
});
