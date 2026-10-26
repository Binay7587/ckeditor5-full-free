CKEditor&nbsp;5 Classic Editor Full Free Build
========================================

The classic editor build for CKEditor&nbsp;5. See the [demo](https://binay7587.github.io/ckeditor5-full-free).

![CKEditor&nbsp;5 Classic Editor Full Free Build Screenshot](https://raw.githubusercontent.com/Binay7587/ckeditor5-full-free/master/docs/ckeditor-full-free-demo.jpg)

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
		.create( {
			attachTo: document.querySelector( '#editor' )
		} )
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
	.create( {
		attachTo: document.querySelector( '#editor' )
	} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( error => {
		console.error( 'There was a problem initializing the editor.', error );
	} );
```

The build defaults to `licenseKey: 'GPL'`. Applications distributed under the GPL can use that default. For another license, pass your self-hosted commercial key when creating the editor:

```js
ClassicEditor.create( {
	attachTo: document.querySelector( '#editor' ),
	licenseKey: '<YOUR_LICENSE_KEY>'
} );
```

The `exportPdf` and `exportWord` toolbar buttons are free, browser-only replacements for CKEditor's premium export features, so they need no license key or converter token:

- **Export to PDF** opens the browser's print dialog; choose "Save as PDF" as the destination.
- **Export to Word** downloads the content as `document.doc`, an HTML-based file that Microsoft Word, LibreOffice and Google Docs open.

The `exportPdf` and `exportWord` config options of the premium plugins (converter URL, options, file name) are no longer used.

**Note:** For deep integrations, CKEditor recommends installing the framework and importing the required plugins directly. See the [customized installation guide](https://ckeditor.com/docs/ckeditor5/latest/getting-started/installation/self-hosted/quick-start.html).

## License

Licensed under the terms of [GNU General Public License Version 2 or later](https://www.gnu.org/licenses/gpl.html). For full details about the license, see `LICENSE.md` and the [CKEditor open-source license page](https://ckeditor.com/legal/ckeditor-oss-license).
