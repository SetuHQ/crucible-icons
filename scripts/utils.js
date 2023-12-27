const convertToPascalCase = (string) => {
    return string.replace(/^(.)|(-([a-z0-9]))+/g, (g) => (g.length > 1 ? g[1].toUpperCase() : g.toUpperCase()));
};

module.exports = {
    convertToPascalCase,
};
