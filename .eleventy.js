	module.exports = function(eleventyConfig) {

	// Aliases are in relation to the _includes folder
		eleventyConfig.addLayoutAlias('default', 'layouts/default.html');

		eleventyConfig.addPassthroughCopy("./src/assets/style.css");

	return {
		dir: { 
			input: 'src', 
			output: '_site', 
		}

	};

};