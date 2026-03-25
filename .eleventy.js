module.exports = function(eleventyConfig) {
  // Passthrough copy for static assets. Eleventy will copy these
  // files/folders to the output directory automatically.
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("images");

  // Passthrough for the webmanifest
  eleventyConfig.addPassthroughCopy("site.webmanifest");

  return {
    dir: {
      input: ".",
      output: "_site"
    },
    // Set Nunjucks as the default template engine for HTML files
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};