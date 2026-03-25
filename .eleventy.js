module.exports = function(eleventyConfig) {
  // Passthrough copy for static assets. Eleventy will copy these
  // files/folders to the output directory automatically.
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("images");

  // Passthrough for favicon files in the root
  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("*.ico");
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