const fs = require("fs").promises;
const path = require("path");
const { getReactPictogramTemplate, getReactLineIconTemplate, getReactLogoTemplate } = require("./templates");
const { convertToPascalCase } = require("./utils");

const inputLineIconsFolder = path.resolve("./assets/icons/svgs/svgLineIcons");
const inputPictogramsFolder = path.resolve("./assets/icons/svgs/svgPictograms");
const outputPictogramsFolder = path.resolve("./src/icons/reactPictograms");
const outputLineIconsFolder = path.resolve("./src/icons/reactLineIcons");
const inputLogoFolder = path.resolve("./assets/logos/svgLogos");
const inputLogoIconFolder = path.resolve("./assets/logos/svgLogoIcons");
const outputLogoFolder = path.resolve("./src/logos/reactLogos");
const outputLogoIconFolder = path.resolve("./src/logos/reactLogoIcons");
const singleIndexFile = path.resolve("./src/iconsIndex.tsx");

async function buildIcons(inputSVGFolder, outputReactIconFolder, getReactIconTemplate) {
    try {
        const icons = await fs.readdir(inputSVGFolder);
        const iconNames = [];

        const outputDirectory = await fs.readdir(outputReactIconFolder);

        outputDirectory.map((file) =>
            fs.unlink(`${outputReactIconFolder}/${file}`, (err) => {
                if (err) throw err;
            })
        );

        for (const icon of icons) {
            const iconPath = path.join(inputSVGFolder, icon);

            const iconFileName = icon.replace(".svg", "");

            iconNames.push(iconFileName);

            const svgContent = await fs.readFile(iconPath, "utf8");

            let reactIconTemplate = getReactIconTemplate(iconFileName, svgContent);
            if (!reactIconTemplate.includes(`xmlns="http://www.w3.org/2000/svg"`)) {
                reactIconTemplate = reactIconTemplate.replace("<svg", `<svg xmlns="http://www.w3.org/2000/svg"`);
            }

            const reactIconFileContent = reactIconTemplate
                .replace(/class/gi, "className")
                .replace(/<svg width="64" height="64"/, "<svg")
                .replace(/<svg width="24" height="24"/, "<svg")
                .replace(/<svg /, "<svg width={width} height={height} ref={forwardedRef} ")
                .replace(/style="mix-blend-mode:multiply"/gi, `class="mix-blend-multiply"`)
                .replace(/stroke-miterlimit/gi, "strokeMiterlimit")
                .replace(/stroke-dasharray/gi, "strokeDasharray")
                .replace(/stroke-linejoin=/gi, "strokeLinejoin=")
                .replace(/stroke-linecap=/gi, "strokeLinecap=")
                .replace(/stroke-width/gi, "strokeWidth")
                .replace(/fill-opacity/gi, "fillOpacity")
                .replace(/<style>[\s\S]*?<\/style>/g, "")
                .replace(/xmlns:xlink/gi, "xmlnsXlink")
                .replace(/fill-rule/gi, "fillRule")
                .replace(/clip-path/gi, "clipPath")
                .replace(/clip-rule/gi, "clipRule");
            const reactIconFile = path.resolve(outputReactIconFolder, `${iconFileName}.tsx`);

            await fs.writeFile(reactIconFile, reactIconFileContent);
        }

        const iconsIndexFile = path.resolve(outputReactIconFolder, "index.ts");

        await fs.writeFile(
            iconsIndexFile,
            `${iconNames.map((icon) => `export { default as ${icon} } from "./${icon}";`).join("\n")}\n`
        );
    } catch (error) {
        console.error(error);
    }
}

async function generateIndexForLogos(inputFolder, outputFolder, inputPath) {
    const logoNames = [];
    const oldLogoNames = [];
    try {
        const logos = await fs.readdir(inputFolder);

        for (const logo of logos) {
            const logoFileName = logo.replace(".png", "");
            oldLogoNames.push(logoFileName);
            logoNames.push(logoFileName);
        }

        const logosIndexFile = path.resolve(outputFolder, "index.ts");

        await fs.writeFile(
            logosIndexFile,
            `${logoNames
                .map((logo, index) => `export { default as ${logo} } from "${inputPath}/${oldLogoNames[index]}.png";`)
                .join("\n")}\n`
        );
    } catch (error) {
        console.log(error);
    }
}

async function generateSingleIndexForAll(inputFolder, outputFolder, filePath) {
    try {
        const indexPath = path.join(inputFolder, "index.ts");
        const fileContent = await fs.readFile(indexPath, "utf8");
        const updatedFileContent = fileContent.replace(/from "./gi, `from ${filePath}`);

        const groupName = convertToPascalCase(filePath.split("/")[2]);
        await fs.appendFile(outputFolder, `\n// ${groupName}\n`, { flag: "a" }, (err) => console.log(err));
        await fs.appendFile(outputFolder, updatedFileContent, { flag: "a" }, (err) => console.log(err));
    } catch (error) {
        console.log(error);
    }
}

async function build() {
    await Promise.all([
        buildIcons(inputPictogramsFolder, outputPictogramsFolder, getReactPictogramTemplate),
        buildIcons(inputLineIconsFolder, outputLineIconsFolder, getReactLineIconTemplate),
        buildIcons(inputLogoFolder, outputLogoFolder, getReactLogoTemplate),
        buildIcons(inputLogoIconFolder, outputLogoIconFolder, getReactLogoTemplate),
    ]);

    await fs.writeFile(singleIndexFile, "// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.\n");

    await generateSingleIndexForAll(outputPictogramsFolder, singleIndexFile, `"./icons/reactPictograms`);
    await generateSingleIndexForAll(outputLineIconsFolder, singleIndexFile, `"./icons/reactLineIcons`);
    await generateSingleIndexForAll(outputLogoFolder, singleIndexFile, `"./logos/reactLogos`);
    await generateSingleIndexForAll(outputLogoIconFolder, singleIndexFile, `"./logos/reactLogoIcons`);
}

build();
