# Crucible Icons

## Setu’s icons package that lets designers and developers ship fast!

[![Version](https://img.shields.io/npm/v/@setu/crucible-icons?color=%2320014B)](https://www.npmjs.org/package/@setu/crucible-icons)
[![Downloads](https://img.shields.io/npm/dw/@setu/crucible-icons?color=%23FEB452)](https://www.npmjs.org/package/@setu/crucible-icons)
[![License](https://img.shields.io/npm/l/@setu/crucible-icons?color=%23FE90A0)](LICENSE.md)

## Activity

![Alt](https://repobeats.axiom.co/api/embed/f5c43cd3cf9905b1a8810e410546863a31930f84.svg "Repobeats analytics image")

### Installation

```bash
yarn add @setu/crucible-icons
# or
npm install @setu/crucible-icons
```

### Example usage

```jsx
<ArrowOverlapping />
```

### Configuration

You can configure crucible icons using props.

```jsx
<ArrowOverlapping width={50} base="red" />
```

-   Pictograms

| Key         | Default               | Note          |
| ----------- | --------------------- | ------------- |
| `width`     | `64`                  | Type : Number |
| `height`    | `64`                  | Type : Number |
| `base`      | `Icon's default fill` | Type : String |
| `primary`   | `Icon's default fill` | Type : String |
| `secondary` | `Icon's default fill` | Type : String |
| `tertiary`  | `Icon's default fill` | Type : String |

<br>

-   Line Icons

| Key      | Default | Notes         |
| -------- | ------- | ------------- |
| `width`  | `24`    | Type : Number |
| `height` | `24`    | Type : Number |
| `fill`   | `-`     | Type : String |
| `stroke` | `#000`  | Type : String |

Note: `fill` prop is only valid for icons `BadgeWithTick`, `CircleWithCross`, `CircleWithTick`.

### Contributing to the package

-   Create an issue with the icon/s that needs to be added to the package
-   The issue is reviewed and a PR with all the necessary changes is raised to `main`
-   Package is published to npm on merge of the PR

### Guidelines to add icons

-   Add svg files to respective folders of `svgLineIcons` and `svgPictograms` in `assets/icons/svgs`.
-   Try to use inline svg properties instead of using with via CSS classes and convert them to valid JSX syntax property at build time.
-   `<defs></defs>` tag should only include `<style></style>` tag in svg.
-   PICTOGRAM should only have `fill` properties, NO `stroke` property and no more than 4 **CUSTOMIZABLE** `fill` props.
-   LINEICON should only have 1 `stroke` property and default `stroke` value should be `#000`.

-   For PICTOGRAM :
    -   When names changed or new icons added update them in `iconNames` file.
    -   Update the styles of the icons if changed or of new icons added in `iconSpecificStyles` file.
-   To build, run `yarn build` and then for storybook run `yarn storybook`

### Points to note when raising PR

-   Update the version of the current package in `package.json`
-   Before pushing it to new branch, run `yarn build` to build the package
