const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Passthrough copy for static assets. Eleventy will copy these
  // files/folders to the output directory automatically.
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("images");
  // Passthrough for the webmanifest
  eleventyConfig.addPassthroughCopy("site.webmanifest");

  // Add a collection for blog posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("blog/posts/*.md").sort((a, b) => {
      return b.date - a.date; // Sort in reverse chronological order
    });
  });

  // Add a date filter using Luxon for consistent date formatting
  eleventyConfig.addFilter("date", (dateObj, format) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      layouts: "_includes" // Specify the layouts directory
    },
    // Set Nunjucks as the default template engine for HTML files
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};