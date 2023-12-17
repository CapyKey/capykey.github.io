module.exports = config => {

    const postcssFilter = require('./src/filters/postcssFilter.js');

    config.addNunjucksAsyncFilter('postcss', postcssFilter);
    config.addWatchTarget('styles/**/*.css');

    config.addPassthroughCopy('./src/image/');

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',

        dir: {
            input: 'src',
            output: 'dist'
        }
    };
}
