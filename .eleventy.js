	module.exports = function(eleventyConfig) {

	// Aliases are in relation to the _includes folder
		eleventyConfig.addLayoutAlias('default', 'layouts/default.html');
		// eleventyConfig.addLayoutAlias('footer', 'partials/footer.html');
		// eleventyConfig.addLayoutAlias('header', 'partials/header.html');


	return {
		dir: { 
			input: 'src', 
			output: '_site', 
		}

	};

};