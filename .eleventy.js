	module.exports = function(eleventyConfig) {

	// Aliases are in relation to the _includes folder
	eleventyConfig.addLayoutAlias('default', 'layouts/default.html');
		
	// ignore source assets (processing and watching)
	eleventyConfig.ignores.add("src/assets/**/*");
  eleventyConfig.watchIgnores.add("src/assets/**/*");

  // server config (watch generated assets in _site folder)
  eleventyConfig.setServerOptions({
    watch: ["./_site/assets/css/**/*.css"],
    port: 3000,
  });

	return {
		dir: { 
			input: 'src', 
			output: '_site', 
		}

	};

};