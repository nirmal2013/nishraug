module.exports = {

	modules: {
		autoRequire: {
			'app.js': ['main']
		},
		nameCleaner: path => path.replace(/^src\//, '')
	},

	npm: {
		globals: {$: 'jquery'}
	},

	files: {
		javascripts: {
			joinTo: {
				'vendor.js': /^node_modules/,
				'app.js': /^src/
			}
		},
		stylesheets: {
			joinTo: {
				'vendor.css' : /^node_modules/,
				'app.css': /^src/
			}
		}
	},

	plugins: {
		babel: {presets: ['es2015', 'react']},
		postcss: {processors: [require('autoprefixer')]},
		autoReload: {enabled: true},
		eslint: {
			pattern: /^src\/.*\.js?$/
		}
	},

	paths: {
		watched: ['src']
	},

	hooks: {
		onCompile(generatedFiles) {
			console.log(generatedFiles.map(f => f.path));
		}
	}
};
