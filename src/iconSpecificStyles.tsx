import { PictogramsNames } from "./iconsNames";
export interface PictogramTypes {
    base?: string;
    primary?: string;
    secondary?: string;
    tertiary?: string;
}

type IconStylesTypes = Record<keyof typeof PictogramsNames, PictogramTypes>;

// prettier-ignore
export const iconSpecificStyles: IconStylesTypes = {
    [PictogramsNames.AA]: {
        base        : "#ffe9cc",
        primary     : "#feb452",
        secondary   : "#6d67ce",
    },

    [PictogramsNames.ArrowsOverlapping]: {
        base        : "#b7cde1",
        primary     : "#ffb036",
    },

    [PictogramsNames.BadgeWithRibbon]: {
        base        : "#feb452",
        primary     : "#b7cde1",
    },

    [PictogramsNames.BadgeWithTick]: {
        base        : "#36A168",
        primary     : "#ffffff",
    },

    [PictogramsNames.BankWithPerson]: {
        base        : "#b7cde1",
        primary     : "#36a168",
        secondary   : "#ffffff",
    },

    [PictogramsNames.BankWithShield]: {
        base        : "#b7cde1",
        primary     : "#b7cde1",
        secondary   : "#36a168",
        tertiary    : "#ffffff",
    },

    [PictogramsNames.BarsWithExcalamationMark]: {
        base        : "#b7cde1",
        primary     : "#F05656",
        secondary   : "#ffffff",
    },

    [PictogramsNames.Bank]: {
        base        : "#b7cde1",
    },

    [PictogramsNames.Banking]: {
        base        : "#cce4ff",
        primary     : "#fea442",
        secondary   : "#1482ff",
        tertiary    : "#6d67ce",
    },

    [PictogramsNames.BankWithBraces]: {
        base        : "#b7cde1",
        primary     : "#b7cde1",
        secondary   : "#feb452",
    },

    [PictogramsNames.BankWithCross]: {
        base        : "#b7cde1",
        primary     : "#F05656",
        secondary   : "#ffffff",
    },

    [PictogramsNames.BankWithCoin]: {
        base        : "#b7cde1",
        primary     : "#feb452",
        secondary   : "#ffffff",
        tertiary    : "#42CACD",
    },

    [PictogramsNames.BankWithExclamation]: {
        base        : "#b7cde1",
        primary     : "#F05656",
        secondary   : "#ffffff",
    },

    [PictogramsNames.BankWithMagnifyingGlassAndStars]: {
        base        : "#b7cde1",
        primary     : "#42CACD",
        secondary   : "#FEB452",
    },

    [PictogramsNames.BeerMug]: {
        base        : "#ff930e",
        primary     : "#a9cde3",
        secondary   : "#8fb2d1",
        tertiary    : "#f7993b",
    },

    [PictogramsNames.BOU]: {
        base        : "#cde7d9",
        primary     : "#1275e5",
        secondary   : "#ffffff",
        tertiary    : "#36a168",
    },

    [PictogramsNames.Bird]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
    },

    [PictogramsNames.BillWithTax]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#ffffff",
    },

    [PictogramsNames.BookWithKarmaSymbol]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#f7993b",
        tertiary    : "#36a168",
    },

    [PictogramsNames.Book]: {
        base        : "#a9cde3",
        primary     : "#42cacd",
        secondary   : "#feb452",
    },

    [PictogramsNames.BoxWithBraces]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
    },

    [PictogramsNames.BoxWithCash]: {
        base        : "#b7cde1",
        primary     : "#36A168",
        secondary   : "#42CACD",
    },

    [PictogramsNames.BoxWithCoin]: {
        base        : "#B7CDE1",
        primary     : "#FEB452"
    },

    [PictogramsNames.BoxWithMobile]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#feb452",
    },

    [PictogramsNames.BoxWithShapes]: {
        base        : "#b7cde1",
        primary     : "#fe90a0",
        secondary   : "#feb452",
        tertiary    : "#42cacd",
    },

    [PictogramsNames.BoxWithStar]: {
        base        : "#b7cde1",
        primary     : "#feb452",
        secondary   : "#42cacd",
    },

    [PictogramsNames.BoxWithLeftArrow]: {
        base        : "#b7cde1",
        primary     : "#42CACD",
    },

     [PictogramsNames.BoxWithRightArrow]: {
        base        : "#b7cde1",
        primary     : "#42CACD",
    },

    [PictogramsNames.Brain]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
    },

    [PictogramsNames.Briefcase]: {
        base        : "#b7cde1",
        primary     : "#85b2d3",
        secondary   : "#ffb036",
    },

    [PictogramsNames.BSA]: {
        base        : "#FFE9CC",
        primary     : "#FEB452",
        secondary   : "#ffffff",
        tertiary    : "#6D67CE",
    },

    [PictogramsNames.BuildingPictogram]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
    },

    [PictogramsNames.Buildings]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
    },

    [PictogramsNames.BuildingWithFlagPictogram]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
    },

    [PictogramsNames.Bulb]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#feb452",
    },

    [PictogramsNames.CableTV]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#feb452",
    },

    [PictogramsNames.COU]: {
        base        : "#cde7d9",
        primary     : "#1482FF",
        secondary   : "#D0E6FF",
        tertiary    : "#36a168",
    },

    [PictogramsNames.Clock]: {
        base        : "#b7cde1",
        primary     : "#FEB452",
    },

    [PictogramsNames.Calendar]: {
        base        : "#b7cde1",
        primary     : "#f05656",
    },

    [PictogramsNames.CalloutsWithMultipleScripts]: {
        base        : "#ffffff",
        primary     : "#b7cde1",
        secondary   : "#00cfcf",
    },

    [PictogramsNames.CarPictogram]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#feb452",
    },

    [PictogramsNames.CashWithUpArrow]: {
        base        : "#36A168",
        primary     : "#fda902",
        secondary   : "#ffffff",
        tertiary    : "#83b0d1",
    },

    [PictogramsNames.Cash]: {
        base        : "#00a362",
        primary     : "#ffffff",
        secondary   : "#ffffff",
    },

    [PictogramsNames.Cat]: {
        base        : "#b7cde1",
        primary     : "#fe90a0",
    },

    [PictogramsNames.ChatBubbles]: {
        base        : "#b7cde1",
        primary     : "#42CACD",
    },
    [PictogramsNames.ChatBot]: {
        base        : "#42CACD",
        primary     : "#FEB452",
    },

    [PictogramsNames.Checklist]: {
        base        : "#b7cde1",
        primary     : "#42CACD",
        secondary   : "#FEB452",
    },

    [PictogramsNames.Chord]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
    },

    [PictogramsNames.CircleWithCross]: {
        base        : "#b92828",
        primary     : "#ffffff",
    },

    [PictogramsNames.CircleWithPlus]: {
        base        : "#36A168",
        primary     : "#ffffff",
    },

    [PictogramsNames.CircleWithTick]: {
        base        : "#36A168",
        primary     : "#ffffff",
    },

    [PictogramsNames.CircleWithStarAndLines]: {
        base        : "#feb452",
        primary     : "#b7cde1",
    },

    [PictogramsNames.CoinWithDownArrow]: {
        base        : "#b7cde1",
        primary     : "#ffffff",
        secondary   : "#feb452",
    },

    [PictogramsNames.Courage]: {
        base        : "#FEB452",
        primary     : "#b7cde1",
    },

    [PictogramsNames.Craftsmanship]: {
        base        : "#42CACD",
        primary     : "#F05656",
        secondary   : "#FE90A0",
        tertiary    : "#FEB452",
    },

    [PictogramsNames.CreditCardPictogram]: {
        base        : "#B7CDE1",
        primary     : "#42CACD",
    },

    [PictogramsNames.CylinderPictogram]: {
        base        : "#b7cde1",
        primary     : "#F05656",
    },

    [PictogramsNames.Data]: {
        base        : "#ffe9cc",
        primary     : "#feb452",
        secondary   : "#6d67ce",
    },

    [PictogramsNames.Deposits]: {
        base        : "#cce4ff",
        primary     : "#575cce",
        secondary   : "#1074ff",
    },

    [PictogramsNames.DocumentWithArrow]: {
        base        : "#b7cde1",
        primary     : "#857EF6",
    },

    [PictogramsNames.DocumentWithBadgeAndTick]: {
        base        : "#b7cde1",
        primary     : "#FEB452",
        secondary   : "#ffffff",
    },

    [PictogramsNames.DocumentWithCommas]: {
        base        : "#b7cde1",
        primary     : "#0081ff",
    },

    [PictogramsNames.DocumentWithCoin]: {
        base        : "#b7cde1",
        primary     : "#feb452",
        secondary   : "#ffffff",
    },

    [PictogramsNames.DocumentWithCode]: {
        base        : "#B7CDE1",
        primary     : "#42CACD",
        secondary   : "#FEB452",
        tertiary    : "#1482FF"
    },

    [PictogramsNames.DocumentWithDetails]: {
        base        : "#b7cde1",
        primary     : "#36a168",
        secondary   : "#ffffff",
    },

    [PictogramsNames.DocumentWithGreenTick]: {
        base        : "#b7cde1",
        primary     : "#36a168",
        secondary   : "#ffffff",
    },

    [PictogramsNames.DocumentWithKey]: {
        base        : "#b7cde1",
        primary     : "#00ccce",
    },

    [PictogramsNames.DocumentWithLock]: {
        base        : "#b7cde1",
        primary     : "#ffab00",
    },

    [PictogramsNames.DocumentWithRedBadge]: {
        base        : "#b7cde1",
        primary     : "#f05656",
    },

    [PictogramsNames.DownArrowWithCoin]: {
        base        : "#b7cde1",
        primary     : "#ffb036",
        secondary   : "#ffffff",
    },

    [PictogramsNames.Droplets]: {
        base        : "#b7cde1",
        primary     : "#42CACD",
    },

    [PictogramsNames.Empathy]: {
        base        : "#ff464f",
        primary     : "#ffab00",
    },

    [PictogramsNames.Envelope]: {
        base        : "#b7cde1",
        primary     : "#00ccce",
    },

    [PictogramsNames.eSign]: {
        base        : "#ffe9cc",
        primary     : "#feb452",
        secondary   : "#6d67ce",
    },

    [PictogramsNames.Fastag]: {
        base        : "#cde7d9",
        primary     : "#1275e5",
        secondary   : "#36a168",
    },

    [PictogramsNames.Flag]: {
        base        : "#42cacd",
        primary     : "#b7cde1",
        secondary   : "#36a168",
        tertiary    : "#009b99",
    },

    [PictogramsNames.FlaskWithBraces]: {
        base        : "#B7CDE1",
        primary     : "#42CACD",
    },

    [PictogramsNames.FlaskWithCode]: {
        base        : "#B7CDE1",
        primary     : "#42CACD",
        secondary   : "#FEB452",
        tertiary    : "#1482FF"
    },

    [PictogramsNames.FolderWithArrows]: {
        base        : "#b7cde1",
        primary     : "#FEB452",
    },

    [PictogramsNames.FolderWithArrowsAndPaper]: {
        base        : "#b7cde1",
        primary     : "#FEB452",
        secondary   : "#42CACD",
    },

    [PictogramsNames.FolderWithMagnifyingGlass]: {
        base        : "#b7cde1",
        primary     : "#D7E4EE",
        secondary   : "#42CACD",
        tertiary    : "#ffffff",
    },

    [PictogramsNames.FolderWithShield]: {
        base        : "#b7cde1",
        primary     : "#00a362",
        secondary   : "#ffffff",
    },

    [PictogramsNames.FunnelWithPlusSymbol]: {
        base        : "#b7cde1",
        primary     : "#36a168",
    },

    [PictogramsNames.GasPipe]: {
        base        : "#b7cde1",
        primary     : "#F7993B",
    },

    [PictogramsNames.GraphBar]: {
        base        : "#b7cde1",
        primary     : "#00cfcf",
    },

    [PictogramsNames.Groceries]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#1482ff",
        tertiary    : "#f7993b"
    },

    [PictogramsNames.GrowthMindset]: {
        base        : "#ffab00",
        primary     : "#00ccce",
    },

    [PictogramsNames.GuyFawkesMask]: {
        base        : "#b7cde1",
        primary     : "#557895",
        secondary   : "#42cacd",
    },

    [PictogramsNames.Hat]: {
        base        : "#b7cde1",
        primary     : "#42CACD",
    },

    [PictogramsNames.Headphones]: {
        base        : "#b7cde1",
        primary     : "#1482FF",
    },

    [PictogramsNames.HeartWithCross]: {
        base        : "#b7cde1",
        primary     : "#F05656",
    },

    [PictogramsNames.HomeWithBraces]: {
        base        : "#b7cde1",
        primary     : "#FEB452",
    },

    [PictogramsNames.HomeWithDoor]: {
        base        : "#b7cde1",
    },

    [PictogramsNames.Hourglass]: {
        base        : "#b7cde1",
        primary     : "#00cfcf",
        secondary   : "#a9cde3",
    },

    [PictogramsNames.IdCard]: {
        base        : "#b7cde1",
        primary     : "#f05656",
    },

    [PictogramsNames.KYC]: {
        base        : "#feb452",
        primary     : "#6d67ce",
        secondary   : "#ffe9cc",
    },

    [PictogramsNames.Integrity]: {
        base        : "#00ccce",
        primary     : "#fff",
        secondary   : "#ffab00",
    },

    [PictogramsNames.Jigsaw]: {
        base        : "#00cfcf",
        primary     : "#b7cde1",
    },

    [PictogramsNames.LandlinePictogram]: {
        base        : "#b7cde1",
        primary     : "#42CACD",
    },

    [PictogramsNames.Lending]: {
        base        : "#cce4ff",
        primary     : "#fea442",
        secondary   : "#4652CE",
        tertiary    : "#0D68FF",
    },

    [PictogramsNames.Link]: {
        base        : "#feb452",
        primary     : "#b7cde1",
    },

    [PictogramsNames.Lock]: {
        base        : "#b7cde1",
        primary     : "#ffb036",
    },

    [PictogramsNames.MagnifyingGlassWithRupee]: {
        base        : "#b7cde1",
        primary     : "#36A168",
    },

    [PictogramsNames.Map]: {
        base        : "#b7cde1",
        primary     : "#36A168",
        secondary   : "#FEB452",
        tertiary    : "#79b2d6",
    },

    [PictogramsNames.Medal]: {
        base        : "#b7cde1",
        primary     : "#FEB452",
    },

    [PictogramsNames.MessageCallout]: {
        base        : "#b7cde1",
        primary     : "#42CACD",
    },
    [PictogramsNames.Metro]: {
        base        : "#b7cde1",
        primary     : "#42CACD",
        secondary   : "#FEB452",
    },

    [PictogramsNames.Mic]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
    },

    [PictogramsNames.MobilePlainWithCoin]: {
        base        : "#b7cde1",
        primary     : "#FEB452",
        secondary   : "#ffffff",
    },

    [PictogramsNames.MobileWithAsync]: {
        base        : "#b7cde1",
        primary     : "#fe90a0",
        secondary   : "#feb452",
        tertiary    : "#42cacd",
    },

    [PictogramsNames.MobileWithCash]: {
        base        : "#b7cde1",
        primary     : "#04a162",
        secondary   : "#85b2d3",
        tertiary    : "#ffffff",
    },

    [PictogramsNames.MobileWithCircularArrows]: {
        base        : "#b7cde1",
        primary     : "#36A168",
    },

    [PictogramsNames.MobileWithCoin]: {
        base        : "#b7cde1",
        primary     : "#ffb036",
        secondary   : "#ffffff",
    },

    [PictogramsNames.MobileWithCursor]: {
        base        : "#b7cde1",
        primary     : "#feb452",
    },

    [PictogramsNames.MobileWithGreenTick]: {
        base        : "#b7cde1",
        primary     : "#36A168",
        secondary   : "#ffffff",
    },

    [PictogramsNames.MobileWithLightning]: {
        base        : "#b7cde1",
        primary     : "#42CACD",
    },

    [PictogramsNames.MobileWithNotification]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#feb452",
    },

    [PictogramsNames.MobileWithOffer]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#feb452",
        tertiary    : "#ffffff",
    },

    [PictogramsNames.MobileWithRupee]: {
        base        : "#b7cde1",
        primary     : "#36A168",
    },

    [PictogramsNames.MobileWithTag]: {
        base        : "#b7cde1",
        primary     : "#0081ff",
    },

    [PictogramsNames.MobileWithUpi]: {
        base        : "#42cacd",
        primary     : "#b7cde1",
        secondary   : "#2b8B4b",
        tertiary    : "#d9782d",
    },

    [PictogramsNames.MobilityCard]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#FEB452",
        tertiary    : "#36A168",
    },

    [PictogramsNames.ModemPictogram]: {
        base        : "#b7cde1",
        primary     : "#42CACD",
    },

    [PictogramsNames.Newspaper]: {
        base        : "#afcbe0",
        primary     : "#f2ad3d",
        secondary   : "#b7cde1",
    },

    [PictogramsNames.Note]: {
        base        : "#b7cde1",
        primary     : "#00ccce",
    },

    [PictogramsNames.Notepad]: {
        base        : "#b7cde1",
        primary     : "#00cfcf",
    },

    [PictogramsNames.Necklace]: {
        base        : "#f2ad3d",
        primary     : "#b7cde1",
        secondary   : "#F05656",
        tertiary    : "#F26767",
    },

    [PictogramsNames.ONDC]: {
        base        : "#FE90A0",
        primary     : "#625db9",
        secondary   : "#ffffff",
    },

    [PictogramsNames.OpenBoxWithBraces]: {
        base        : "#b7cde1",
        primary     : "#42CACD",
    },

    [PictogramsNames.PaintRoller]: {
        base        : "#85b2d3",
        primary     : "#00ccce",
    },
    [PictogramsNames.PanWithExclamation]: {
        base        : "#B7CDE1",
        primary     : "#F05656",
    },

    [PictogramsNames.PaperWithCoin]: {
        base        : "#b7cde1",
        primary     : "#FEB452",
        secondary   : "#ffffff",
    },

    [PictogramsNames.Parchment]: {
        base        : "#b7cde1",
        primary     : "#36a168",
        secondary   : "#ffffff",
        tertiary    : "#f2ad3d",
    },

    [PictogramsNames.PassbookWithBalance]: {
        base        : "#b7cde1",
        primary     : "#B3EAEB"
    },

    [PictogramsNames.Payments]: {
        base        : "#36a168",
        primary     : "#1275e5",
        secondary   : "#C3E3D2",
    },

    [PictogramsNames.People]: {
        base        : "#b7cde1",
        primary     : "#42CACD",
    },

    [PictogramsNames.PeopleWithCoin]: {
        base        : "#b7cde1",
        primary     : "#feb452",
        secondary   : "#ffffff",
    },

    [PictogramsNames.PeopleWithColouredHeads]: {
        base        : "#b7cde1",
        primary     : "#00ccce",
        secondary   : "#ffb036",
        tertiary    : "#f05656",
    },

    [PictogramsNames.PeopleWithLeader]: {
        base        : "#5bc8cb",
        primary     : "#b7cde1",
        secondary   : "#f2ad3d",
        tertiary    : "#ffffff",
    },

    [PictogramsNames.Person]: {
        base        : "#b7cde1",
    },

    [PictogramsNames.PersonScan]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#1482ff",
    },

    [PictogramsNames.PersonWithCape]: {
        base        : "#b7cde1",
        primary     : "#b5cbdf",
        secondary   : "#f2ad3d",
        tertiary    : "#5dcbcc",
    },

    [PictogramsNames.PersonWithCoin]: {
        base        : "#b7cde1",
        primary     : "#FEB452",
        secondary   : "#ffffff",
        tertiary    : "#42CACD",
    },

    [PictogramsNames.PersonWithCircularBackground]: {
        base        : "#D7E3EE",
        primary     : "#42CACD",
    },

    [PictogramsNames.PersonCardWithSettings]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
    },

    [PictogramsNames.PersonWithCard]: {
        base        : "#b7cde1",
        primary     : "#00ccce",
    },

    [PictogramsNames.PersonWithGear]: {
        base        : "#B7CDE1",
        primary     : "#FEB452",
        secondary   : "#42CACD",
    },

    [PictogramsNames.PersonWithHeart]: {
        base        : "#b7cde1",
        primary     : "#f05656",
    },

    [PictogramsNames.PersonWithMagnifyingGlass]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
    },
    [PictogramsNames.PersonWithPuzzlePiece]: {
        base        : "#b7cde1",
        primary     : "#feb452",
    },

    [PictogramsNames.PersonWithSettings]: {
        base        : "#b7cde1",
        primary     : "#feb452",
        secondary   : "#42cacd",
    },

    [PictogramsNames.PersonWithTools]: {
        base        : "#B7CDE1",
        primary     : "#FEB452",
        secondary   : "#B7CDE1",
        tertiary    : "#F05656"
    },

    [PictogramsNames.PersonWithQuestionMark]: {
        base        : "#B7CDE1",
        primary     : "#42cacd",
    },

    [PictogramsNames.PlantWithLeaves]: {
        base        : "#b7cde1",
        primary     : "#36a168",
    },

    [PictogramsNames.Plant]: {
        base        : "#feb452",
        primary     : "#36a168",
        secondary   : "#b7cde1",
        tertiary    : "#ffffff",
    },

    [PictogramsNames.Receipt]: {
        base        : "#b7cde1",
        primary     : "#09cdcd",
    },

    [PictogramsNames.RingWithDiamond]: {
        base        : "#FEB452",
        primary     : "#42CACD",
    },

    [PictogramsNames.ReceiptWithBell]: {
        base        : "#b7cde1",
        primary     : "#FEB452",
    },

    [PictogramsNames.ReceiptWithCoin]: {
        base        : "#b7cde1",
        primary     : "#FEB452",
        secondary   : "#ffffff",
    },

    [PictogramsNames.Rocket]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#f7993b",
        tertiary    : "#f05656",
    },

    [PictogramsNames.ScreenWithPlayButton]: {
        base        : "#B7CDE1",
        primary     : "#42CACD",
    },

    [PictogramsNames.Servers]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#f05656",
        tertiary    : "#36a168",
    },

    [PictogramsNames.ShieldWithTickPictogram]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
    },

    [PictogramsNames.Shield]: {
        base        : "#b7cde1",
        primary     : "#00a362",
        secondary   : "#ffffff",
    },

    [PictogramsNames.ShoppingBags]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#feb452",
    },

    [PictogramsNames.Signpost]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#36a168",
    },

    [PictogramsNames.SIM]: {
        base        : "#b7cde1",
        primary     : "#ffffff",
        secondary   : "#FEB452",
    },

    [PictogramsNames.StampWithTick]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#ffffff",
    },

    [PictogramsNames.Stopwatch]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#feb452",
    },

    [PictogramsNames.SunsetWithCoin]: {
        base        : "#feb452",
        primary     : "#b7cde1",
        secondary   : "#ffffff",
    },

    [PictogramsNames.TabletWithPen]: {
        base        : "#b7cde1",
        primary     : "#1482ff",
    },

    [PictogramsNames.Team]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
    },

    [PictogramsNames.Tenacity]: {
        base        : "#00ccce",
        primary     : "#25004e",
        secondary   : "#ff464f",
    },

    [PictogramsNames.ThoughtCloud]: {
        base        : "#b7cde1",
        primary     : "#f2ad3d",
        secondary   : "#5bc8cb",
    },

    [PictogramsNames.Ticket]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
    },

    [PictogramsNames.Tools]: {
        base        : "#b7cde1",
        primary     : "#3480f6",
        secondary   : "#f2ad3d",
        tertiary    : "#ef8d9e",
    },

    [PictogramsNames.Transactions]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
    },

    [PictogramsNames.TV]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
    },

    [PictogramsNames.UmbrellaWithCoinAndCash]: {
        base        : "#b7cde1",
        primary     : "#36a168",
        secondary   : "#FEB452",
        tertiary    : "#ffffff",

    },

    [PictogramsNames.UPI]: {
        base        : "#C3E3D2",
        primary     : "#1482FF",
        secondary   : "#ffffff",
        tertiary    : "#36a168",
    },

    [PictogramsNames.Wave]: {
        base        : "#b7cde1",
        primary     : "#feb452",
        secondary   : "#42cacd",
    },

    [PictogramsNames.WebSettings]: {
        base        : "#b7cde1",
        primary     : "#f2ad3d",
    },

    [PictogramsNames.WindowEmpty]: {
        base        : "#b7cde1",
    },

    [PictogramsNames.WindowPlainWithPlant]: {
        base        : "#b7cde1",
        primary     : "#00a65b",
        secondary   : "#a9cde3",
    },

    [PictogramsNames.WindowWithBarGraph]: {
        base        : "#b7cde1",
        primary     : "#00a362",
        secondary   : "#a9cde3",
    },

    [PictogramsNames.WindowWithBlocks]: {
        base        : "#B7CDE1",
        primary     : "#42CACD",
        secondary   : "#FE90A0",
        tertiary    : "#FEB452"
    },

    [PictogramsNames.WindowWithBracesAndCog]: {
        base        : "#b7cde1",
        primary     : "#00ccce",
        secondary   : "#ffb036",
    },

    [PictogramsNames.WindowWithBugAndMagnifyingGlass]: {
        base        : "#B7CDE1",
        primary     : "#42CACD",
        secondary   : "#F05656",
        tertiary    : "#22282D",
    },

    [PictogramsNames.WindowWithBraces]: {
        base        : "#b7cde1",
        primary     : "#feb452",
    },

    [PictogramsNames.WindowWithCodeAndBraces]: {
        base        : "#b7cde1",
        primary     : "#00cfcf",
        secondary   : "#ffb036",
        tertiary    : "#0081ff",
    },

    [PictogramsNames.WindowWithGreenTick]: {
        base        : "#b7cde1",
        primary     : "#00a362",
        secondary   : "#ffffff",
    },

    [PictogramsNames.WindowWithInfinity]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#feb452",
    },

    [PictogramsNames.WindowWithLightning]: {
        base        : "#b7cde1",
        primary     : "#0081ff",
        secondary   : "#ffb036",
        tertiary    : "#00ccce",
    },

    [PictogramsNames.WindowWithMagnifyingGlass]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
    },

    [PictogramsNames.WindowWithMobile]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#ff464f",
        tertiary    : "#8fb2d1",
    },

    [PictogramsNames.WindowWithPlayButton]: {
        base        : "#b7cde1",
        primary     : "#1482ff",
    },

    [PictogramsNames.WindowWithSettings]: {
        base        : "#b1cde2",
        primary     : "#0081ff",
        secondary   : "#ffb036",
        tertiary    : "#00ccce",
    },

    [PictogramsNames.WindowWithUpArrow]: {
        base        : "#b7cde1",
        primary     : "#42cacd",
        secondary   : "#cfdce5",
    },

    [PictogramsNames.Window]: {
        base        : "#a9cde3",
        primary     : "#00cfcf",
    },

    [PictogramsNames.WrenchAndScrewDriver]: {
        base        : "#B7CDE1",
        primary     : "#F05656",
    },
} as const;
