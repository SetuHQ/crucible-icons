import { defaultColours } from "fictoan-react";
import { darken, lighten, transparentize } from "polished";
import { DefaultTheme as BridgeThemeType } from "styled-components";

import { setuColours } from "./SetuColours";

export const SetuDarkTheme: BridgeThemeType = {
    body: {
        bg: setuColours.murkyNight,
    },

    //  TEXT  /////////////////////////////////////////////////////////////////
    text: {
        font: {
            sans: "Matter",
            mono: "GT America Mono",
        },
        paras: {
            font: "Matter",
            color: `${lighten(0.56, setuColours.murkyNight)}`,
            lineHeight: 1.44,
            size: 0.96,
            subtext: `${lighten(0.4, setuColours.murkyNight)}`,
        },
        headings: {
            font: "Matter",
            weight: 400,
            lineHeight: 1.2,
            color: `${lighten(0.64, setuColours.murkyNight)}`,
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
                bg: `${transparentize(0.64, setuColours.salmonRouge)}`,
                text: `${lighten(0.56, setuColours.murkyNight)}`,
                scale: 80,
            },
            block: {
                bg: `${lighten(0.16, setuColours.murkyNight)}`,
            },
            prism: {
                tokens: {
                    plain: `${lighten(0.56, setuColours.murkyNight)}`,
                },
            },
        },
    },

    //  CARD  /////////////////////////////////////////////////////////////////
    card: {
        bg: `${lighten(0.08, setuColours.murkyNight)}`,
        border: `${lighten(0.16, setuColours.murkyNight)}`,
        borderRadius: "4px",
    },

    //  FORM  ////////////////////////////////////////////////////////////////
    inputField: {
        default: {
            bg: `${lighten(0.16, setuColours.murkyNight)}`,
            border: `${lighten(0.32, setuColours.murkyNight)}`,
            label: `${lighten(0.48, setuColours.murkyNight)}`,
            text: defaultColours.white,
        },
        onFocus: {
            bg: `${lighten(0.16, setuColours.murkyNight)}`,
            border: setuColours.flashTurk,
            text: defaultColours.white,
            helpText: defaultColours.slate20,
        },
        isValid: {
            bg: defaultColours.white,
            border: defaultColours.green80,
            label: setuColours.murkyNight,
        },
        isInvalid: {
            bg: defaultColours.red10,
            border: defaultColours.red80,
            label: defaultColours.red,
            helpText: defaultColours.red,
        },
        isReadOnly: {
            bg: defaultColours.grey50,
            border: defaultColours.grey50,
            label: setuColours.murkyNight,
        },
        required: {
            text: defaultColours.red,
        },
        icons: {
            default: {
                fill: defaultColours.slate30,
            },
            onFocus: {
                fill: setuColours.flashTurk,
            },
            isValid: {
                bg: defaultColours.grey50,
                border: defaultColours.red30,
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
                bg: defaultColours.slate30,
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
        font: "Matter",
        primary: {
            default: {
                bg: `${darken(0.08, setuColours.flashTurk)}`,
                border: `${darken(0.08, setuColours.flashTurk)}`,
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
            isDisabled: {
                bg: setuColours.flashTurk,
                border: setuColours.flashTurk,
                text: defaultColours.white,
            },
            isLoading: {
                bg: setuColours.flashTurk,
                spinnerBorder: defaultColours.black,
            },
        },
        secondary: {
            default: {
                bg: `${darken(0.24, setuColours.flashTurk)}`,
                border: setuColours.flashTurk,
                text: `${lighten(0.08, setuColours.flashTurk)}`,
                borderRadius: "4px",
            },
            onHover: {
                bg: `${darken(0.24, setuColours.flashTurk)}`,
                border: setuColours.flashTurk,
                text: setuColours.flashTurk,
            },
            isActive: {
                bg: `${darken(0.32, setuColours.flashTurk)}`,
                border: setuColours.flashTurk,
                text: setuColours.flashTurk,
            },
            isDisabled: {
                bg: `${darken(0.32, setuColours.flashTurk)}`,
                border: setuColours.flashTurk,
                text: setuColours.flashTurk,
            },
            isLoading: {
                bg: defaultColours.white,
                spinnerBorder: defaultColours.black,
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
        bg: `${lighten(0.16, setuColours.murkyNight)}`,
        text: defaultColours.white,
        border: `${lighten(0.32, setuColours.murkyNight)}`,
        striped: {
            header: {
                bg: `${lighten(0.4, setuColours.murkyNight)}`,
            },
            cell: {
                bg: `${lighten(0.24, setuColours.murkyNight)}`,
            },
        },
        onHover: {
            bg: defaultColours.amber20,
            text: setuColours.murkyNight,
        },
    },

    tablePagination: {
        bg: lighten(0.12, setuColours.murkyNight),
        text: lighten(0.56, setuColours.murkyNight),
        svg: {
            onHover: {
                stroke: setuColours.flashTurk,
            },
        },
    },

    //  RULE  /////////////////////////////////////////////////////////////////
    hr: {
        primary: {
            bg: `${lighten(0.48, setuColours.murkyNight)}`,
            height: "1px",
        },
        secondary: {
            bg: `${lighten(0.32, setuColours.murkyNight)}`,
            height: "1px",
        },
        tertiary: {
            bg: `${lighten(0.16, setuColours.murkyNight)}`,
            height: "1px",
        },
    },

    //  INFO PANEL  ///////////////////////////////////////////////////////////
    infoPanel: {
        bg: `${lighten(0.08, setuColours.murkyNight)}`,
        border: `${lighten(0.16, setuColours.murkyNight)}`,
        dismissButton: {
            bg: `${lighten(0.04, setuColours.murkyNight)}`,
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
                bg: `${lighten(0.16, setuColours.murkyNight)}`,
            },
            image: {
                bg: `${lighten(0.12, setuColours.murkyNight)}`,
            },
            label: {
                text: `${lighten(0.8, setuColours.murkyNight)}`,
            },
        },
        indicator: {
            default: {
                bg: `${lighten(0.24, setuColours.murkyNight)}`,
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
        bg: `${lighten(0.04, setuColours.murkyNight)}`,
        overlay: `${lighten(0.08, setuColours.murkyNight)}`,
    },

    //  PRODUCT CARD  /////////////////////////////////////////////////////////
    ProductCard: {
        icon: {
            bg: `${lighten(0.16, setuColours.murkyNight)}`,
            stroke: setuColours.flashTurk,
        },
        title: {
            onHover: {
                text: setuColours.flashTurk,
            },
        },
        meta: {
            text: `${lighten(0.4, setuColours.murkyNight)}`,
        },
        flags: {
            comingSoon: {
                text: defaultColours.sky,
                bg: `${lighten(0.16, setuColours.murkyNight)}`,
            },
            earlyPreview: {
                text: defaultColours.violet,
                bg: `${lighten(0.16, setuColours.murkyNight)}`,
            },
            deprecated: {
                text: defaultColours.orange,
                bg: `${lighten(0.16, setuColours.murkyNight)}`,
            },
        },
    },

    //  PRODUCT CARD  /////////////////////////////////////////////////////////
    ActiveProductCard: {
        meta: {
            text: `${lighten(0.4, setuColours.murkyNight)}`,
        },
        sandbox: {
            border: `${transparentize(0.56, defaultColours.orange60)}`,
            icon: {
                bg: `${lighten(0.16, setuColours.murkyNight)}`,
                stroke: defaultColours.orange60,
            },
            status: {
                text: defaultColours.orange60,
                bg: `${lighten(0.16, setuColours.murkyNight)}`,
            },
        },
        production: {
            border: `${transparentize(0.56, defaultColours.green80)}`,
            icon: {
                bg: `${lighten(0.16, setuColours.murkyNight)}`,
                stroke: defaultColours.green80,
            },
            status: {
                text: defaultColours.green80,
                bg: `${lighten(0.16, setuColours.murkyNight)}`,
            },
        },
    },

    //  PLUGIN CARD  //////////////////////////////////////////////////////////
    PluginCard: {
        icon: {
            bg: `${lighten(0.16, setuColours.murkyNight)}`,
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
                bg: `${lighten(0.16, setuColours.murkyNight)}`,
            },
        },
    },

    //  SIDEBAR  //////////////////////////////////////////////////////////////
    Sidebar: {
        collapsed: {
            bg: `${lighten(0.08, setuColours.murkyNight)}`,
            icon: {
                default: {
                    stroke: `${lighten(0.32, setuColours.murkyNight)}`,
                },
                onHover: {
                    stroke: `${lighten(0.48, setuColours.murkyNight)}`,
                },
                active: {
                    stroke: `${lighten(0.64, setuColours.murkyNight)}`,
                },
            },
            label: {
                default: {
                    bg: `${lighten(0.24, setuColours.murkyNight)}`,
                    text: `${lighten(0.64, setuColours.murkyNight)}`,
                },
                onHover: {
                    bg: `${lighten(0.48, setuColours.murkyNight)}`,
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
                    text: `${lighten(0.08, setuColours.thunderCloud)}`,
                },
                onHover: {
                    bg: defaultColours.white,
                    text: `${lighten(0.32, setuColours.thunderCloud)}`,
                },
            },
        },
    },

    //  INACTIVE OBJECTS  /////////////////////////////////////////////////////
    Inactive: {
        bg: `${darken(0.08, setuColours.murkyNight)}`,
        border: `${lighten(0.32, setuColours.murkyNight)}`,
    },

    //  EMPTY CARD  ///////////////////////////////////////////////////////////
    PlaceholderCard: {
        border: `${lighten(0.32, setuColours.murkyNight)}`,
    },

    //  TABS  ////////////////////////////////////////////////////////////////
    tabs: {
        label: {
            default: {
                text: `${lighten(0.48, setuColours.murkyNight)}`,
            },
            onHover: {
                text: `${lighten(0.16, setuColours.flashTurk)}`,
            },
            isActive: {
                border: setuColours.flashTurk,
                text: setuColours.flashTurk,
            },
            isDisabled: {
                text: `${lighten(0.16, setuColours.murkyNight)}`,
            },
            hasAlert: {
                circle: {
                    bg: defaultColours.red90,
                    border: setuColours.murkyNight,
                },
            },
        },
    },

    //  REPORTS TABLE  ////////////////////////////////////////////////////////
    ReportsTable: {
        selectedRow: {
            bg: `${transparentize(0.04, setuColours.flashTurk)}`,
        },
    },

    //  SESSION LOCK MODAL  ///////////////////////////////////////////////////
    SessionLockModal: {
        modal: {
            explanation: {
                bg: `${lighten(0.16, setuColours.murkyNight)}`,
            },
            image: {
                bg: `${lighten(0.12, setuColours.murkyNight)}`,
            },
        },
        overlay: {
            bg: `${transparentize(0.24, setuColours.murkyNight)}`,
        },
    },

    //  STICKY HEADER  ////////////////////////////////////////////////////////
    StickyHeader: {
        bg: `${lighten(0.08, setuColours.murkyNight)}`, // Must be same as Card
        border: `${lighten(0.32, setuColours.murkyNight)}`,
    },

    //  MULTI-SELECT BUTTONS  /////////////////////////////////////////////////
    MultiSelectButtons: {
        default: {
            bg: `${lighten(0.16, setuColours.murkyNight)}`,
            text: defaultColours.white,
        },
        selected: {
            bg: `${lighten(0.4, setuColours.flashTurk)}`,
            text: setuColours.flashTurk,
            border: setuColours.flashTurk,
            crossMark: setuColours.flashTurk,
        },
        unselected: {
            bg: defaultColours.red10,
            text: defaultColours.slate,
            border: defaultColours.red90,
            crossMark: defaultColours.red90,
        },
        applied: {
            bg: setuColours.flashTurk,
            text: defaultColours.white,
        },
    },

    // MULTI-SELECT DROPDOWN //////////////////////////////////////////////////
    MultiSelectDropDownTheme: {
        neutral0: `${lighten(0.16, setuColours.murkyNight)}`,
        neutral5: setuColours.flashTurk,
        neutral10: setuColours.flashTurk,
        neutral20: `${lighten(0.32, setuColours.murkyNight)}`,
        neutral30: `${lighten(0.32, setuColours.murkyNight)}`,
        neutral50: `${lighten(0.48, setuColours.murkyNight)}`,
        neutral80: defaultColours.white,
        primary: setuColours.flashTurk,
        primary25: `${lighten(0.24, setuColours.flashTurk)}`,
    },

    MultiSelectDropDown: {
        option: {
            text: defaultColours.white,
            onHover: setuColours.murkyNight,
        },
    },

    // SPLIT SETTLEMENTS //////////////////////////////////////////////////////
    SplitSettlement: {
        parent: {
            bg: `${lighten(0.08, setuColours.murkyNight)}`,
        },
        card: {
            bg: `${lighten(0.16, setuColours.murkyNight)}`,
        },
        line: {
            bg: `${lighten(0.32, setuColours.murkyNight)}`,
        },
    },

    // MOBILE PHONE COMPONENT //////////////////////////////////////////////////////
    MobilePhone: {
        border: lighten(0.16, setuColours.murkyNight),
        topBar: {
            bg: `${setuColours.fadedMing}`,
            text: `${defaultColours.white}`,
        },
        content: {
            bg: `${setuColours.murkyNight}`,
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
        bg: `${lighten(0.16, setuColours.murkyNight)}`,
        border: `${lighten(0.32, setuColours.murkyNight)}`,
        selected: {
            inRange: {
                bg: `${lighten(0.32, setuColours.flashTurk)}`,
            },
        },
    },
};
