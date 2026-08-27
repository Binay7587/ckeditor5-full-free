/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

'use strict';

/* eslint-env node */

const path = require( 'path' );
const TerserWebpackPlugin = require( 'terser-webpack-plugin' );

module.exports = {
	devtool: 'source-map',
	performance: { hints: false },

	entry: path.resolve( __dirname, 'src', 'ckeditor.ts' ),

	output: {
		// The name under which the editor will be exported.
		library: {
			name: 'ClassicEditor',
			type: 'umd',
			export: 'default'
		},

		path: path.resolve( __dirname, 'build' ),
		filename: 'ckeditor.js',
		globalObject: 'this'
	},

	optimization: {
		minimizer: [
			new TerserWebpackPlugin( {
				terserOptions: {
					// CKEditor premium packages contain protected code that cannot be
					// processed safely by Terser's compression transforms.
					compress: false,
					format: {
						// Preserve CKEditor 5 license comments.
						comments: /^!/
					}
				},
				extractComments: false
			} )
		]
	},

	resolve: {
		extensions: [ '.ts', '.js', '.json' ]
	},

	module: {
		rules: [ {
			test: /\.ts$/,
			use: 'ts-loader'
		}, {
			test: /\.css$/,
			use: [ {
				loader: 'style-loader',
				options: {
					injectType: 'singletonStyleTag',
					attributes: {
						'data-cke': true
					}
				}
			}, 'css-loader' ]
		} ]
	}
};
