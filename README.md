# Crucible Icons

## Setu’s icons package that lets designers and developers ship fast!

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
