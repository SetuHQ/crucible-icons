import { defaultColours } from "fictoan-react";
import { darken, lighten, transparentize } from "polished";
import { DefaultTheme as BridgeThemeType } from "styled-components";

import { setuColours } from "./SetuColours";

export const customColours = {
    hue: defaultColours.blue90,
    tint: defaultColours.amber,
    shade: defaultColours.grey,
    analogue: defaultColours.indigo50,
    accent: defaultColours.green80,
} as const;

export const SetuLightTheme: BridgeThemeType = {
    body: {
        bg: setuColours.pearlyCoke,
    },

    globals: {
        borderWidth: "1px",
    },

    //  TEXT  /////////////////////////////////////////////////////////////////
    text: {
        font: {
            sans: "Matter",
            mono: "GT America Mono",
        },
        paras: {
            font: "Matter",
            color: `${lighten(0.16, setuColours.murkyNight)}`,
            lineHeight: 1.44,
            size: 0.96,
            subtext: defaultColours.slate80,
        },
        headings: {
            font: "Matter",
            weight: 400,
            lineHeight: 1.2,
            color: setuColours.murkyNight,
            multiplier: 1.16,
        },
        links: {
            font: "Matter",
            default: {
                color: defaultColours.blue90,
            },
            onHover: {
                color: defaultColours.blue60,
            },
        },
        selection: {
            bg: setuColours.flashTurk,
            text: setuColours.murkyNight,
        },
        code: {
            inline: {
                bg: `${lighten(0.16, setuColours.salmonRouge)}`,
                text: setuColours.deepPurple,
                scale: 80,
            },
            block: {
                bg: defaultColours.slate10,
            },
            prism: {
                tokens: {
                    plain: defaultColours.grey,
                },
            },
        },
    },

    //  CARD  /////////////////////////////////////////////////////////////////
    card: {
        bg: defaultColours.white,
        border: defaultColours.slate20,
        borderRadius: "4px",
    },

    //  FORM  ////////////////////////////////////////////////////////////////
    inputField: {
        default: {
            bg: String(defaultColours.white),
            border: String(defaultColours.slate40),
            label: String(customColours.shade),
            text: String(customColours.shade),
            borderRadius: "4px",
            helpText: {
                text: String(defaultColours.slate60),
                scale: "92%",
            },
        },
        onFocus: {
            bg: String(defaultColours.white),
            border: String(customColours.hue),
            text: String(customColours.shade),
        },
        isValid: {
            bg: String(defaultColours.white),
            border: String(defaultColours.green80),
            label: String(customColours.shade),
        },
        isInvalid: {
            bg: String(defaultColours.red10),
            border: String(defaultColours.red80),
            text: String(defaultColours.red),
            label: String(defaultColours.red),
            errorText: String(defaultColours.red),
        },
        isDisabled: {
            bg: String(defaultColours.slate20),
            border: String(defaultColours.slate40),
            text: String(defaultColours.slate80),
            label: String(defaultColours.slate80),
        },
        isReadOnly: {
            bg: String(defaultColours.slate10),
            border: String(defaultColours.slate20),
            text: String(defaultColours.slate80),
            label: String(customColours.shade),
        },
        required: {
            text: String(defaultColours.red),
        },
        icons: {
            default: {
                fill: String(defaultColours.slate30),
            },
            onFocus: {
                fill: String(customColours.hue),
            },
            isValid: {
                bg: String(defaultColours.grey50),
                border: String(defaultColours.red30),
            },
        },
    },

    select: {
        chevron: setuColours.flashTurk,
    },

    radioButton: {
        inset: {
            default: {
                bg: defaultColours.slate20,
            },
            onHover: {
                bg: defaultColours.slate40,
            },
            isSelected: {
                bg: setuColours.flashTurk,
            },
            isDisabled: {
                bg: defaultColours.slate10,
            },
        },
        circle: {
            default: {
                bg: defaultColours.white,
            },
        },
    },

    checkBox: {
        square: {
            default: {
                bg: defaultColours.slate20,
            },
            onHover: {
                bg: defaultColours.slate40,
            },
            isChecked: {
                bg: setuColours.flashTurk,
            },
            isDisabled: {
                bg: defaultColours.slate10,
            },
        },
        check: {
            default: {
                border: defaultColours.white,
            },
        },
    },

    //  BUTTON  ///////////////////////////////////////////////////////////////
    button: {
        font: "sans-serif",
        isLoading: {
            spinnerBorder: String(customColours.hue),
        },
        primary: {
            default: {
                bg: setuColours.flashTurk,
                border: setuColours.flashTurk,
                text: defaultColours.white,
                borderRadius: "4px",
            },
            onHover: {
                bg: `${lighten(0.08, setuColours.flashTurk)}`,
                border: `${lighten(0.08, setuColours.flashTurk)}`,
                text: defaultColours.white,
            },
            isActive: {
                bg: setuColours.flashTurk,
                border: setuColours.flashTurk,
                text: defaultColours.white,
            },
            isLoading: {
                bg: setuColours.flashTurk,
                spinnerBorder: defaultColours.white,
            },
        },
        secondary: {
            default: {
                bg: `${lighten(0.4, setuColours.flashTurk)}`,
                border: setuColours.flashTurk,
                text: setuColours.flashTurk,
                borderRadius: "4px",
            },
            onHover: {
                bg: `${lighten(0.4, setuColours.flashTurk)}`,
                border: setuColours.flashTurk,
                text: setuColours.flashTurk,
            },
            isActive: {
                bg: `${lighten(0.2, setuColours.flashTurk)}`,
                border: setuColours.flashTurk,
                text: setuColours.flashTurk,
            },
            isLoading: {
                bg: defaultColours.white,
                spinnerBorder: defaultColours.black,
            },
        },
        tertiary: {
            default: {
                bg: String(defaultColours.transparent),
                border: String(customColours.hue),
                text: String(customColours.hue),
                borderRadius: "4px",
            },
            onHover: {
                bg: `${lighten(0.4, String(customColours.hue))}`,
                border: String(defaultColours.transparent),
                text: String(customColours.hue),
            },
            isActive: {
                bg: `${lighten(0.32, String(customColours.hue))}`,
                border: String(defaultColours.transparent),
                text: String(customColours.hue),
            },
            isLoading: {
                spinnerBorder: String(customColours.hue),
            },
            isDisabled: {
                bg: String(defaultColours.transparent),
                border: String(customColours.hue),
                text: String(customColours.hue),
            },
        },
    },

    //  PROGRESS BAR  /////////////////////////////////////////////////////////
    progressBar: {
        height: 8,
        bg: defaultColours.slate20,
        fill: defaultColours.green80,
    },

    //  TABLE  ////////////////////////////////////////////////////////////////
    table: {
        bg: defaultColours.white,
        text: setuColours.murkyNight,
        border: defaultColours.slate20,
        striped: {
            header: {
                bg: defaultColours.teal40,
            },
            cell: {
                bg: setuColours.pearlyCoke,
            },
        },
        onHover: {
            bg: defaultColours.amber20,
            text: setuColours.murkyNight,
        },
    },

    tablePagination: {
        bg: defaultColours.white,
        text: setuColours.murkyNight,
        svg: {
            onHover: {
                stroke: lighten(0.16, setuColours.flashTurk),
            },
        },
    },

    //  RULE  /////////////////////////////////////////////////////////////////
    hr: {
        default: {
            bg: String(defaultColours.blue80),
            height: "1px",
        },
        primary: {
            bg: String(defaultColours.blue80),
            height: "1px",
        },
        secondary: {
            bg: String(defaultColours.slate40),
            height: "1px",
        },
        tertiary: {
            bg: String(defaultColours.slate20),
            height: "1px",
        },
    },

    //  INFO PANEL  ///////////////////////////////////////////////////////////
    infoPanel: {
        bg: defaultColours.white,
        border: defaultColours.slate20,
        dismissButton: {
            bg: `${transparentize(0.32, defaultColours.slate10)}`,
            color: defaultColours.slate90,
            content: "×",
        },
    },

    ///////////////////////////////////////////////////////////////////////////
    //  CUSTOM COMPONENTS
    ///////////////////////////////////////////////////////////////////////////

    //  BRIDGE INTRO  /////////////////////////////////////////////////////////
    BridgeIntro: {
        modal: {
            explanation: {
                bg: defaultColours.white,
            },
            image: {
                bg: defaultColours.slate10,
            },
            label: {
                text: `${lighten(0.16, setuColours.murkyNight)}`,
            },
        },
        indicator: {
            default: {
                bg: defaultColours.slate20,
            },
            selected: {
                bg: setuColours.flashTurk,
            },
        },
        overlay: {
            bg: `${transparentize(0.24, setuColours.murkyNight)}`,
        },
    },

    //  LOADER CARD  /////////////////////////////////////////////////////
    LoaderCard: {
        bg: `${darken(0.02, setuColours.pearlyCoke)}`,
        overlay: `${darken(0.04, setuColours.pearlyCoke)}`,
    },

    //  PRODUCT CARD  /////////////////////////////////////////////////////////
    ProductCard: {
        icon: {
            bg: defaultColours.teal20,
            stroke: setuColours.flashTurk,
        },
        title: {
            onHover: {
                text: setuColours.flashTurk,
            },
        },
        meta: {
            text: defaultColours.slate80,
        },
        flags: {
            comingSoon: {
                text: defaultColours.blue,
                bg: defaultColours.sky60,
            },
            earlyPreview: {
                text: defaultColours.violet,
                bg: defaultColours.violet20,
            },
            deprecated: {
                text: defaultColours.orange,
                bg: defaultColours.amber40,
            },
        },
    },

    //  PRODUCT CARD  /////////////////////////////////////////////////////////
    ActiveProductCard: {
        meta: {
            text: defaultColours.slate80,
        },
        sandbox: {
            border: `${transparentize(0.56, defaultColours.orange80)}`,
            icon: {
                bg: defaultColours.orange10,
                stroke: defaultColours.orange80,
            },
            status: {
                text: defaultColours.orange,
                bg: defaultColours.orange10,
            },
        },
        production: {
            border: `${transparentize(0.56, defaultColours.green80)}`,
            icon: {
                bg: defaultColours.green20,
                stroke: defaultColours.green80,
            },
            status: {
                text: defaultColours.green80,
                bg: defaultColours.green20,
            },
        },
    },

    //  PLUGIN CARD  //////////////////////////////////////////////////////////
    PluginCard: {
        icon: {
            bg: defaultColours.teal10,
            stroke: setuColours.fadedMing,
        },
        title: {
            onHover: {
                text: setuColours.flashTurk,
            },
        },
        flags: {
            comingSoon: {
                text: defaultColours.blue,
                bg: defaultColours.sky60,
            },
            earlyPreview: {
                text: defaultColours.violet,
                bg: defaultColours.violet20,
            },
            deprecated: {
                text: defaultColours.orange,
                bg: defaultColours.amber40,
            },
        },
    },

    //  SIDEBAR  //////////////////////////////////////////////////////////////
    Sidebar: {
        collapsed: {
            bg: `${lighten(0.32, setuColours.flashTurk)}`,
            icon: {
                default: {
                    stroke: `${darken(0.08, setuColours.flashTurk)}`,
                },
                onHover: {
                    stroke: `${darken(0.16, setuColours.flashTurk)}`,
                },
                active: {
                    stroke: `${darken(0.24, setuColours.flashTurk)}`,
                },
            },
            label: {
                default: {
                    bg: `${lighten(0.4, setuColours.flashTurk)}`,
                    text: `${darken(0.08, setuColours.flashTurk)}`,
                },
                onHover: {
                    bg: setuColours.flashTurk,
                    text: defaultColours.white,
                },
            },
        },
        expanded: {
            bg: `${darken(0.04, setuColours.pearlyCoke)}`,
            icon: {
                default: {
                    stroke: `${darken(0.32, setuColours.thunderCloud)}`,
                },
                onHover: {
                    stroke: `${lighten(0.08, setuColours.thunderCloud)}`,
                },
                active: {
                    stroke: `${lighten(0.24, setuColours.thunderCloud)}`,
                },
            },
            label: {
                default: {
                    bg: `${transparentize(1, setuColours.pearlyCoke)}`,
                    text: `${darken(0.4, setuColours.thunderCloud)}`,
                },
                onHover: {
                    bg: defaultColours.white,
                    text: setuColours.murkyNight,
                },
            },
        },
    },

    //  INACTIVE OBJECTS  /////////////////////////////////////////////////////
    Inactive: {
        bg: `${darken(0.08, setuColours.pearlyCoke)}`,
        border: defaultColours.slate30,
    },

    //  EMPTY CARD  ///////////////////////////////////////////////////////////
    PlaceholderCard: {
        border: defaultColours.slate20,
    },

    //  TABS  ////////////////////////////////////////////////////////////////
    tabs: {
        label: {
            default: {
                text: `${lighten(0.16, setuColours.murkyNight)}`,
            },
            onHover: {
                text: `${lighten(0.16, setuColours.flashTurk)}`,
            },
            isActive: {
                border: setuColours.flashTurk,
                text: setuColours.flashTurk,
            },
            isDisabled: {
                text: `${darken(0.24, setuColours.pearlyCoke)}`,
            },
            hasAlert: {
                circle: {
                    bg: defaultColours.red90,
                    border: setuColours.pearlyCoke,
                },
            },
        },
    },

    //  STICKY HEADER  ////////////////////////////////////////////////////////
    StickyHeader: {
        bg: defaultColours.white,
        border: defaultColours.slate20,
    },

    //  REPORTS TABLE  ////////////////////////////////////////////////////////
    ReportsTable: {
        selectedRow: {
            bg: setuColours.flashTurk,
        },
    },

    //  SESSION LOCK MODAL  ///////////////////////////////////////////////////
    SessionLockModal: {
        modal: {
            explanation: {
                bg: defaultColours.white,
            },
            image: {
                bg: defaultColours.slate10,
            },
        },
        overlay: {
            bg: `${transparentize(0.24, setuColours.murkyNight)}`,
        },
    },

    //  MULTI-SELECT BUTTONS  /////////////////////////////////////////////////
    MultiSelectButtons: {
        default: {
            bg: defaultColours.slate10,
            text: defaultColours.slate,
        },
        selected: {
            bg: defaultColours.slate10,
            text: defaultColours.slate,
            border: defaultColours.teal,
            crossMark: defaultColours.teal,
        },
        unselected: {
            bg: defaultColours.red10,
            text: defaultColours.slate,
            border: defaultColours.red90,
            crossMark: defaultColours.red90,
        },
        applied: {
            bg: defaultColours.teal20,
            text: defaultColours.teal,
        },
    },

    // MULTI-SELECT DROPDOWN //////////////////////////////////////////////////
    MultiSelectDropDownTheme: {
        neutral5: defaultColours.teal20,
        neutral0: defaultColours.white,
        neutral10: defaultColours.teal20,
        neutral20: defaultColours.slate40,
        neutral30: defaultColours.slate40,
        neutral50: defaultColours.slate60,
        neutral80: defaultColours.teal,
        primary: setuColours.flashTurk,
        primary25: `${lighten(0.24, setuColours.flashTurk)}`,
    },

    MultiSelectDropDown: {
        option: {
            text: setuColours.murkyNight,
            onHover: setuColours.murkyNight,
        },
    },

    // SPLIT SETTLEMENTS //////////////////////////////////////////////////////
    SplitSettlement: {
        parent: {
            bg: `${darken(0.04, setuColours.pearlyCoke)}`,
        },
        card: {
            bg: `${darken(0.01, setuColours.pearlyCoke)}`,
        },
        line: {
            bg: `${darken(0.24, setuColours.pearlyCoke)}`,
        },
    },

    // MOBILE PHONE COMPONENT //////////////////////////////////////////////////////
    MobilePhone: {
        border: "#f6f6f6",
        topBar: {
            bg: `${setuColours.fadedMing}`,
            text: `${defaultColours.white}`,
        },
        content: {
            bg: `${defaultColours.white}`,
            text: `${defaultColours.slate}`,
        },
    },

    //  TOP NAV  //////////////////////////////////////////////////////////////
    TopNav: {
        bg: defaultColours.white,
        border: defaultColours.slate20,

        Link: {
            default: {
                bg: defaultColours.white,
                text: setuColours.azureBlue,
            },
            onHover: {
                bg: `${lighten(0.32, setuColours.crackedYolk)}`,
                text: setuColours.azureBlue,
            },
        },
    },

    // DATE PICKER
    DatePicker: {
        bg: defaultColours.white,
        border: defaultColours.slate40,
        selected: {
            inRange: {
                bg: `${lighten(0.12, setuColours.flashTurk)}`,
            },
        },
    },
};
