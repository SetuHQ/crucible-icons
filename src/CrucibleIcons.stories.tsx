import React, { Component, ForwardRefExoticComponent, RefAttributes, useState } from "react";
import { Element, Heading, InfoPanel, InputField, Portion, Row, Text } from "fictoan-react";
import styled from "styled-components";
import { ComponentStory } from "@storybook/react";
import { PictogramIconProps } from "./types";
import * as AllPictograms from "./icons/reactPictograms/";
import * as AllLineIcons from "./icons/reactLineIcons/";
import * as AllLogos from "./logos/reactLogos/";
import { iconSpecificStyles, PictogramTypes } from "./iconSpecificStyles";
import * as AllLogoIcons from "./logos/reactLogoIcons/";
import { PictogramsNames } from "./iconsNames";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "CrucibleIcons",
    parameters: {
        theme: "setu",
    },
    argTypes: {
        width: {
            control: { type: "number" },
        },
        height: {
            control: { type: "number" },
        },
        base: {
            control: { type: "color" },
        },
        primary: {
            control: { type: "color" },
        },
        secondary: {
            control: { type: "color" },
        },
        tertiary: {
            control: { type: "color" },
        },
        stroke: {
            control: { type: "color" },
        },

        fill: {
            control: { type: "color" },
        },
    },
};

const Container = styled.div`
    .icon-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: max-content !important;
        svg {
            transition: all 0.175s ease-in-out;
        }
    }

    .icon-container :hover {
        svg {
            transform: scale(1.35);
        }
    }

    .icons-list-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .icon-name {
        text-align: center;
    }
`;

interface SelectedPictogramTypes {
    name: string;
    icon: ForwardRefExoticComponent<PictogramIconProps & RefAttributes<SVGSVGElement>>;
}

const TemplatePictograms: ComponentStory<typeof Component> = ({ ...args }) => {
    const [SelectedPictogram, setSelectedPictogram] = useState<SelectedPictogramTypes>({
        name: PictogramsNames.AA,
        icon: AllPictograms.AA,
    });

    const [pictogramStyleProps, setPictogramStyleProps] = useState<PictogramTypes>(iconSpecificStyles.AA);

    const [showIconPanel, setShowIconPanel] = useState(false);

    return (
        <>
            <Container>
                <Heading as="h4">Pictograms</Heading>

                <Row sidePadding="large" gutters="large" marginTop="micro">
                    <Portion isFullWidth className="icons-list-section">
                        {(Object.keys(AllPictograms) as Array<keyof typeof AllPictograms>).map((iconKey, index) => {
                            const IconInstance = AllPictograms[iconKey];
                            return (
                                <Element
                                    as="div"
                                    padding="nano"
                                    margin="nano"
                                    className="icon-container cursor-pointer is-clickable"
                                    onClick={() => {
                                        setShowIconPanel(true);
                                        setPictogramStyleProps({});
                                        setSelectedPictogram({ name: iconKey, icon: IconInstance });
                                    }}
                                >
                                    <IconInstance {...args} />
                                    <Text size="large" className="icon-name">
                                        {iconKey}
                                    </Text>
                                </Element>
                            );
                        })}
                    </Portion>
                </Row>

                <InfoPanel isOpen={showIconPanel} onCloseCallback={() => setShowIconPanel(false)}>
                    <Element as="div" horizontallyCenterThis>
                        {<SelectedPictogram.icon width={128} height={128} {...pictogramStyleProps} />}
                    </Element>

                    <Text align="center">{SelectedPictogram.name}</Text>

                    <Portion>
                        {Object.keys(iconSpecificStyles[SelectedPictogram.name]).map((item) => {
                            return (
                                <>
                                    <InputField
                                        value={pictogramStyleProps[item] || ""}
                                        label={item}
                                        marginBottom="micro"
                                        onChange={(e) =>
                                            setPictogramStyleProps((prev) => ({
                                                ...prev,
                                                [item]: (e?.target as HTMLInputElement).value,
                                            }))
                                        }
                                    />
                                </>
                            );
                        })}
                    </Portion>
                </InfoPanel>
            </Container>
        </>
    );
};

const TemplateLineIcons: ComponentStory<typeof Component> = ({ ...args }) => {
    const [SelectedLineIcon, setSelectedLineIcon] = useState({
        name: Object.keys(AllLineIcons)[0],
        icon: AllLineIcons.Alphabets,
    });

    const [lineIconStyles, setLineIconStyles] = useState<{ stroke?: string }>({ stroke: "#000" });

    const [showIconPanel, setShowIconPanel] = useState(false);

    return (
        <>
            <Container>
                <Heading as="h4">Line Icons</Heading>

                <Row sidePadding="large" gutters="large" marginTop="micro">
                    <Portion isFullWidth className="icons-list-section">
                        {(Object.keys(AllLineIcons) as Array<keyof typeof AllLineIcons>).map((iconKey, index) => {
                            const IconInstance = AllLineIcons[iconKey];
                            return (
                                <Element
                                    as="div"
                                    padding="nano"
                                    margin="nano"
                                    className="icon-container is-clickable"
                                    onClick={() => {
                                        setShowIconPanel(true);
                                        setLineIconStyles({});
                                        setSelectedLineIcon({ name: iconKey, icon: IconInstance });
                                    }}
                                >
                                    <IconInstance {...args} />
                                    <Text size="large" className="icon-name">
                                        {iconKey}
                                    </Text>
                                </Element>
                            );
                        })}
                    </Portion>
                </Row>

                <InfoPanel isOpen={showIconPanel} onCloseCallback={() => setShowIconPanel(false)}>
                    <Element as="div" horizontallyCenterThis>
                        {<SelectedLineIcon.icon width={128} height={128} {...lineIconStyles} />}
                    </Element>

                    <Text align="center">{SelectedLineIcon.name}</Text>

                    <Portion>
                        <InputField
                            value={lineIconStyles.stroke || ""}
                            label="stroke"
                            marginBottom="micro"
                            onChange={(e) =>
                                setLineIconStyles({
                                    stroke: (e?.target as HTMLInputElement).value,
                                })
                            }
                        />
                    </Portion>
                </InfoPanel>
            </Container>
        </>
    );
};

const TemplateLogos: ComponentStory<JSX.Element> = ({ ...args }) => {
    return (
        <>
            <Container>
                <Heading as="h4">Logos</Heading>

                <Row sidePadding="large" gutters="large" marginTop="micro">
                    <Portion isFullWidth className="icons-list-section">
                        {(Object.keys(AllLogos) as Array<keyof typeof AllLogos>).map((iconKey, index) => {
                            const IconInstance = AllLogos[iconKey];
                            return (
                                <Element
                                    as="div"
                                    padding="nano"
                                    margin="nano"
                                    className="icon-container cursor-pointer"
                                >
                                    <IconInstance {...args} />
                                    <Text size="large" className="icon-name">
                                        {iconKey}
                                    </Text>
                                </Element>
                            );
                        })}
                    </Portion>
                </Row>
            </Container>
        </>
    );
};

const TemplateLogoIcons: ComponentStory<typeof Component> = ({ ...args }) => {
    return (
        <>
            <Container>
                <Heading as="h4">Logo Icons</Heading>

                <Row sidePadding="large" gutters="large" marginTop="micro">
                    <Portion isFullWidth className="icons-list-section">
                        {(Object.keys(AllLogoIcons) as Array<keyof typeof AllLogoIcons>).map((iconKey, index) => {
                            const IconInstance = AllLogoIcons[iconKey];
                            return (
                                <Element
                                    as="div"
                                    padding="nano"
                                    margin="nano"
                                    className="icon-container cursor-pointer"
                                >
                                    <IconInstance {...args} />
                                    <Text size="large" className="icon-name">
                                        {iconKey}
                                    </Text>
                                </Element>
                            );
                        })}
                    </Portion>
                </Row>
            </Container>
        </>
    );
};

export const Pictograms = TemplatePictograms.bind({});
export const LineIcons = TemplateLineIcons.bind({});
export const Logos = TemplateLogos.bind({});
export const LogoIcons = TemplateLogoIcons.bind({});

Pictograms.args = {
    width: 64,
    height: 64,
    // base      : 'hsl(181,  58%,  53%)',
    // primary   : 'hsl(181,  58%,  53%)',
    // secondary : 'hsl(181,  58%,  53%)',
    // tertiary  : 'hsl(181,  58%,  53%)',
};

LineIcons.args = {
    width: 64,
    height: 64,
    stroke: "#000",
};

Logos.args = {
    width: 64,
    height: 64,
};

LogoIcons.args = {
    width: 64,
    height: 64,
};
