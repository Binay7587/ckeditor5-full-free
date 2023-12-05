CKEditor&nbsp;5 Classic Editor Full Free Build
========================================

[![npm version](https://badge.fury.io/js/%40ckeditor%2Fckeditor5-build-classic.svg)](https://www.npmjs.com/package/@binay7587/ckeditor5-full-free)
[![Coverage Status](https://coveralls.io/repos/github/binay7587/ckeditor5-full-free/badge.svg?branch=master)](https://coveralls.io/github/binay7587/ckeditor5-full-free?branch=master)
[![Build Status](https://travis-ci.com/binay7587/ckeditor5-full-free.svg?branch=master)](https://app.travis-ci.com/github/binay7587/ckeditor5-full-free)

The classic editor build for CKEditor&nbsp;5. Read more about the [classic editor build](https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/predefined-builds.html#classic-editor) and see the [demo](https://ckeditor.com/docs/ckeditor5/latest/examples/builds/classic-editor.html).

![CKEditor&nbsp;5 classic editor build screenshot](https://c.cksource.com/a/1/img/npm/ckeditor5-build-classic.png)

## Documentation

See:

* [Installation](https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/quick-start.html) for how to install this package and what it contains.
* [Editor lifecycle](https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/editor-lifecycle.html) for how to create an editor and interact with it.
* [Configuration](https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/configuration.html) for how to configure the editor.
* [Creating custom builds](https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/quick-start.html#building-the-editor-from-source) for how to customize the build (configure and rebuild the editor bundle).

## Quick start

First, install the build from npm:

```bash
npm install --save @binay7587/ckeditor5-full-free
```

And use it in your website:

```html
<div id="editor">
	<p>This is the editor content.</p>
</div>
<script src="./node_modules/@binay7587/ckeditor5-full-free/build/ckeditor.js"></script>
<script>
	ClassicEditor
		.create( document.querySelector( '#editor' ) )
		.then( editor => {
			window.editor = editor;
		} )
		.catch( error => {
			console.error( 'There was a problem initializing the editor.', error );
		} );
</script>
```

Or in your JavaScript application:

```js
import ClassicEditor from '@binay7587/ckeditor5-full-free';

// Or using the CommonJS version:
// const ClassicEditor = require( '@binay7587/ckeditor5-full-free' );

ClassicEditor
	.create( document.querySelector( '#editor' ) )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( error => {
		console.error( 'There was a problem initializing the editor.', error );
	} );
```

**Note:** If you are planning to integrate CKEditor&nbsp;5 deep into your application, it is actually more convenient and recommended to install and import the source modules directly (like it happens in `ckeditor.js`). Read more in the [Advanced setup guide](https://ckeditor.com/docs/ckeditor5/latest/installation/advanced/alternative-setups/integrating-from-source-webpack.html).

## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). For full details about the license, please check the `LICENSE.md` file or [https://ckeditor.com/legal/ckeditor-oss-license](https://ckeditor.com/legal/ckeditor-oss-license).