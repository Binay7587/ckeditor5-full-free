/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { Alignment, Autoformat, AutoImage, AutoLink, Autosave, BlockQuote, Bold, ClassicEditor, CloudServices, Code, CodeBlock, Essentials, type EditorConfig, FindAndReplace, FontBackgroundColor, FontColor, FontFamily, FontSize, GeneralHtmlSupport, Heading, Highlight, HorizontalLine, HtmlComment, HtmlEmbed, Image, ImageCaption, ImageInsert, ImageResize, ImageStyle, ImageToolbar, ImageUpload, Indent, IndentBlock, Italic, Link, LinkImage, List, ListProperties, MediaEmbed, MediaEmbedToolbar, Mention, PageBreak, Paragraph, PasteFromMarkdownExperimental, PasteFromOffice, Plugin, RemoveFormat, SelectAll, ShowBlocks, SimpleUploadAdapter, SourceEditing, SpecialCharacters, SpecialCharactersArrows, SpecialCharactersCurrency, SpecialCharactersEssentials, SpecialCharactersLatin, SpecialCharactersMathematical, SpecialCharactersText, StandardEditingMode, Strikethrough, Style, Subscript, Superscript, Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, TextTransformation, Underline, WordCount } from 'ckeditor5';
import { ExportPdf, ExportWord } from 'ckeditor5-premium-features';
import 'ckeditor5/ckeditor5.css';
import 'ckeditor5-premium-features/ckeditor5-premium-features.css';
/**
 * Enrich the special characters plugin with emojis.
 */
declare class SpecialCharactersEmoji extends Plugin {
    static get pluginName(): "SpecialCharactersEmoji";
    init(): void;
}
declare class Editor extends ClassicEditor {
    static builtinPlugins: (typeof SpecialCharactersEmoji | typeof SimpleUploadAdapter | typeof Alignment | typeof TextTransformation | typeof Autoformat | typeof Autosave | typeof Superscript | typeof Subscript | typeof Bold | typeof Code | typeof Italic | typeof Strikethrough | typeof Underline | typeof BlockQuote | typeof AutoImage | typeof Image | typeof ImageCaption | typeof ImageInsert | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof AutoLink | typeof Link | typeof LinkImage | typeof CloudServices | typeof CodeBlock | typeof Mention | typeof SelectAll | typeof Essentials | typeof FindAndReplace | typeof FontBackgroundColor | typeof FontColor | typeof FontFamily | typeof FontSize | typeof Paragraph | typeof Heading | typeof Highlight | typeof HorizontalLine | typeof HtmlEmbed | typeof GeneralHtmlSupport | typeof HtmlComment | typeof Indent | typeof IndentBlock | typeof List | typeof ListProperties | typeof PasteFromMarkdownExperimental | typeof MediaEmbed | typeof MediaEmbedToolbar | typeof PageBreak | typeof PasteFromOffice | typeof RemoveFormat | typeof StandardEditingMode | typeof ShowBlocks | typeof SourceEditing | typeof SpecialCharacters | typeof SpecialCharactersText | typeof SpecialCharactersArrows | typeof SpecialCharactersEssentials | typeof SpecialCharactersLatin | typeof SpecialCharactersCurrency | typeof SpecialCharactersMathematical | typeof Style | typeof Table | typeof TableCaption | typeof TableCellProperties | typeof TableColumnResize | typeof TableProperties | typeof TableToolbar | typeof WordCount | typeof ExportPdf | typeof ExportWord)[];
    static defaultConfig: EditorConfig;
}
export default Editor;
