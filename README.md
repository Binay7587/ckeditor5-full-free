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

Export to Word and Export to PDF are retained for backward compatibility, but they are premium CKEditor features. Using them requires an eligible commercial license and converter authentication. See the [CKEditor licensing guide](https://ckeditor.com/docs/ckeditor5/latest/getting-started/licensing/license-key-and-activation.html) and the feature documentation for [Export to Word](https://ckeditor.com/docs/ckeditor5/latest/features/converters/export-word/export-word.html) and [Export to PDF](https://ckeditor.com/docs/ckeditor5/latest/features/converters/export-pdf/export-pdf.html).

**Note:** For deep integrations, CKEditor recommends installing the framework and importing the required plugins directly. See the [customized installation guide](https://ckeditor.com/docs/ckeditor5/latest/getting-started/installation/self-hosted/quick-start.html).

## License

Licensed under the terms of [GNU General Public License Version 2 or later](https://www.gnu.org/licenses/gpl.html). For full details about the license, see `LICENSE.md` and the [CKEditor open-source license page](https://ckeditor.com/legal/ckeditor-oss-license).
