/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Autosave } from '@ckeditor/ckeditor5-autosave';
import {
    Bold,
    Code,
    Italic,
    Strikethrough,
    Subscript,
    Superscript,
    Underline
} from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { HtmlEmbed } from '@ckeditor/ckeditor5-html-embed';
import { GeneralHtmlSupport, HtmlComment } from '@ckeditor/ckeditor5-html-support';
import {
    AutoImage,
    Image,
    ImageCaption,
    ImageInsert,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload
} from '@ckeditor/ckeditor5-image';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { AutoLink, Link, LinkImage } from '@ckeditor/ckeditor5-link';
import { List, ListProperties } from '@ckeditor/ckeditor5-list';
import { MediaEmbed, MediaEmbedToolbar } from '@ckeditor/ckeditor5-media-embed';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { PageBreak } from '@ckeditor/ckeditor5-page-break';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromMarkdownExperimental } from '@ckeditor/ckeditor5-markdown-gfm';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { StandardEditingMode } from '@ckeditor/ckeditor5-restricted-editing';
import { SelectAll } from '@ckeditor/ckeditor5-select-all';
import { ShowBlocks } from '@ckeditor/ckeditor5-show-blocks';
import {
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText
} from '@ckeditor/ckeditor5-special-characters';
import { Style } from '@ckeditor/ckeditor5-style';
import {
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar
} from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { WordCount } from '@ckeditor/ckeditor5-word-count';
import { ExportPdf } from '@ckeditor/ckeditor5-export-pdf';
import { ExportWord } from '@ckeditor/ckeditor5-export-word';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.


const REDUCED_MATERIAL_COLORS = [
    { label: 'Red 50', color: '#ffebee' },
    { label: 'Purple 50', color: '#f3e5f5' },
    { label: 'Indigo 50', color: '#e8eaf6' },
    { label: 'Blue 50', color: '#e3f2fd' },
    { label: 'Cyan 50', color: '#e0f7fa' },
    { label: 'Teal 50', color: '#e0f2f1' },
    { label: 'Light green 50', color: '#f1f8e9' },
    { label: 'Lime 50', color: '#f9fbe7' },
    { label: 'Amber 50', color: '#fff8e1' },
    { label: 'Orange 50', color: '#fff3e0' },
    { label: 'Grey 50', color: '#fafafa' },
    { label: 'Blue grey 50', color: '#eceff1' },
    { label: 'Red 100', color: '#ffcdd2' },
    { label: 'Purple 100', color: '#e1bee7' },
    { label: 'Indigo 100', color: '#c5cae9' },
    { label: 'Blue 100', color: '#bbdefb' },
    { label: 'Cyan 100', color: '#b2ebf2' },
    { label: 'Teal 100', color: '#b2dfdb' },
    { label: 'Light green 100', color: '#dcedc8' },
    { label: 'Lime 100', color: '#f0f4c3' },
    { label: 'Amber 100', color: '#ffecb3' },
    { label: 'Orange 100', color: '#ffe0b2' },
    { label: 'Grey 100', color: '#f5f5f5' },
    { label: 'Blue grey 100', color: '#cfd8dc' },
    { label: 'Red 200', color: '#ef9a9a' },
    { label: 'Purple 200', color: '#ce93d8' },
    { label: 'Indigo 200', color: '#9fa8da' },
    { label: 'Blue 200', color: '#90caf9' },
    { label: 'Cyan 200', color: '#80deea' },
    { label: 'Teal 200', color: '#80cbc4' },
    { label: 'Light green 200', color: '#c5e1a5' },
    { label: 'Lime 200', color: '#e6ee9c' },
    { label: 'Amber 200', color: '#ffe082' },
    { label: 'Orange 200', color: '#ffcc80' },
    { label: 'Grey 200', color: '#eeeeee' },
    { label: 'Blue grey 200', color: '#b0bec5' },
    { label: 'Red 300', color: '#e57373' },
    { label: 'Purple 300', color: '#ba68c8' },
    { label: 'Indigo 300', color: '#7986cb' },
    { label: 'Blue 300', color: '#64b5f6' },
    { label: 'Cyan 300', color: '#4dd0e1' },
    { label: 'Teal 300', color: '#4db6ac' },
    { label: 'Light green 300', color: '#aed581' },
    { label: 'Lime 300', color: '#dce775' },
    { label: 'Amber 300', color: '#ffd54f' },
    { label: 'Orange 300', color: '#ffb74d' },
    { label: 'Grey 300', color: '#e0e0e0' },
    { label: 'Blue grey 300', color: '#90a4ae' },
    { label: 'Red 400', color: '#ef5350' },
    { label: 'Purple 400', color: '#ab47bc' },
    { label: 'Indigo 400', color: '#5c6bc0' },
    { label: 'Blue 400', color: '#42a5f5' },
    { label: 'Cyan 400', color: '#26c6da' },
    { label: 'Teal 400', color: '#26a69a' },
    { label: 'Light green 400', color: '#9ccc65' },
    { label: 'Lime 400', color: '#d4e157' },
    { label: 'Amber 400', color: '#ffca28' },
    { label: 'Orange 400', color: '#ffa726' },
    { label: 'Grey 400', color: '#bdbdbd' },
    { label: 'Blue grey 400', color: '#78909c' },
    { label: 'Red 500', color: '#f44336' },
    { label: 'Purple 500', color: '#9c27b0' },
    { label: 'Indigo 500', color: '#3f51b5' },
    { label: 'Blue 500', color: '#2196f3' },
    { label: 'Cyan 500', color: '#00bcd4' },
    { label: 'Teal 500', color: '#009688' },
    { label: 'Light green 500', color: '#8bc34a' },
    { label: 'Lime 500', color: '#cddc39' },
    { label: 'Amber 500', color: '#ffc107' },
    { label: 'Orange 500', color: '#ff9800' },
    { label: 'Grey 500', color: '#9e9e9e' },
    { label: 'Blue grey 500', color: '#607d8b' },
    { label: 'Red 600', color: '#e53935' },
    { label: 'Purple 600', color: '#8e24aa' },
    { label: 'Indigo 600', color: '#3949ab' },
    { label: 'Blue 600', color: '#1e88e5' },
    { label: 'Cyan 600', color: '#00acc1' },
    { label: 'Teal 600', color: '#00897b' },
    { label: 'Light green 600', color: '#7cb342' },
    { label: 'Lime 600', color: '#c0ca33' },
    { label: 'Amber 600', color: '#ffb300' },
    { label: 'Orange 600', color: '#fb8c00' },
    { label: 'Grey 600', color: '#757575' },
    { label: 'Blue grey 600', color: '#546e7a' },
    { label: 'Red 700', color: '#d32f2f' },
    { label: 'Purple 700', color: '#7b1fa2' },
    { label: 'Indigo 700', color: '#303f9f' },
    { label: 'Blue 700', color: '#1976d2' },
    { label: 'Cyan 700', color: '#0097a7' },
    { label: 'Teal 700', color: '#00796b' },
    { label: 'Light green 700', color: '#689f38' },
    { label: 'Lime 700', color: '#afb42b' },
    { label: 'Amber 700', color: '#ffa000' },
    { label: 'Orange 700', color: '#f57c00' },
    { label: 'Grey 700', color: '#616161' },
    { label: 'Blue grey 700', color: '#455a64' },
    { label: 'Red 800', color: '#c62828' },
    { label: 'Purple 800', color: '#6a1b9a' },
    { label: 'Indigo 800', color: '#283593' },
    { label: 'Blue 800', color: '#1565c0' },
    { label: 'Cyan 800', color: '#00838f' },
    { label: 'Teal 800', color: '#00695c' },
    { label: 'Light green 800', color: '#558b2f' },
    { label: 'Lime 800', color: '#9e9d24' },
    { label: 'Amber 800', color: '#ff8f00' },
    { label: 'Orange 800', color: '#ef6c00' },
    { label: 'Grey 800', color: '#424242' },
    { label: 'Blue grey 800', color: '#37474f' },
    { label: 'Red 900', color: '#b71c1c' },
    { label: 'Purple 900', color: '#4a148c' },
    { label: 'Indigo 900', color: '#1a237e' },
    { label: 'Blue 900', color: '#0d47a1' },
    { label: 'Cyan 900', color: '#006064' },
    { label: 'Teal 900', color: '#004d40' },
    { label: 'Light green 900', color: '#33691e' },
    { label: 'Lime 900', color: '#827717' },
    { label: 'Amber 900', color: '#ff6f00' },
    { label: 'Orange 900', color: '#e65100' },
    { label: 'Grey 900', color: '#212121' },
    { label: 'Blue grey 900', color: '#263238' }
];

/**
 * Enrich the special characters plugin with emojis.
 */
function SpecialCharactersEmoji(editor: any) {
    editor.plugins.get('SpecialCharacters').addItems('Emoji', EMOJIS_ARRAY);
}

const EMOJIS_ARRAY = [
    { character: '🙈', title: 'See-No-Evil Monkey' },
    { character: '🙄', title: 'Face With Rolling Eyes' },
    { character: '🙃', title: 'Upside Down Face' },
    { character: '🙂', title: 'Slightly Smiling Face' },
    { character: '😴', title: 'Sleeping Face' },
    { character: '😳', title: 'Flushed Face' },
    { character: '😱', title: 'Face Screaming in Fear' },
    { character: '😭', title: 'Loudly Crying Face' },
    { character: '😬', title: 'Grimacing Face' },
    { character: '😩', title: 'Weary Face' },
    { character: '😢', title: 'Crying Face' },
    { character: '😡', title: 'Pouting Face' },
    { character: '😞', title: 'Disappointed Face' },
    { character: '😜', title: 'Face with Stuck-Out Tongue and Winking Eye' },
    { character: '😚', title: 'Kissing Face With Closed Eyes' },
    { character: '😘', title: 'Face Throwing a Kiss' },
    { character: '😔', title: 'Pensive Face' },
    { character: '😒', title: 'Unamused Face' },
    { character: '😑', title: 'Expressionless Face' },
    { character: '😐', title: 'Neutral Face' },
    { character: '😏', title: 'Smirking Face' },
    { character: '😎', title: 'Smiling Face with Sunglasses' },
    { character: '😍', title: 'Smiling Face with Heart-Eyes' },
    { character: '😌', title: 'Relieved Face' },
    { character: '😋', title: 'Face Savoring Delicious Food' },
    { character: '😊', title: 'Smiling Face with Smiling Eyes' },
    { character: '😉', title: 'Winking Face' },
    { character: '😈', title: 'Smiling Face With Horns' },
    { character: '😇', title: 'Smiling Face with Halo' },
    { character: '😆', title: 'Smiling Face with Open Mouth and Tightly-Closed Eyes' },
    { character: '😅', title: 'Smiling Face with Open Mouth and Cold Sweat' },
    { character: '😄', title: 'Smiling Face with Open Mouth and Smiling Eyes' },
    { character: '😃', title: 'Smiling Face with Open Mouth' },
    { character: '😂', title: 'Face with Tears of Joy' },
    { character: '😁', title: 'Grinning Face with Smiling Eyes' },
    { character: '😀', title: 'Grinning Face' },
    { character: '🥺', title: 'Pleading Face' },
    { character: '🥵', title: 'Hot Face' },
    { character: '🥴', title: 'Woozy Face' },
    { character: '🥳', title: 'Partying Face' },
    { character: '🥰', title: 'Smiling Face with Hearts' },
    { character: '🤭', title: 'Face with Hand Over Mouth' },
    { character: '🤪', title: 'Zany Face' },
    { character: '🤩', title: 'Grinning Face with Star Eyes' },
    { character: '🤦', title: 'Face Palm' },
    { character: '🤤', title: 'Drooling Face' },
    { character: '🤣', title: 'Rolling on the Floor Laughing' },
    { character: '🤔', title: 'Thinking Face' },
    { character: '🤞', title: 'Crossed Fingers' },
    { character: '🙏', title: 'Person with Folded Hands' },
    { character: '🙌', title: 'Person Raising Both Hands in Celebration' },
    { character: '🙋', title: 'Happy Person Raising One Hand' },
    { character: '🤷', title: 'Shrug' },
    { character: '🤗', title: 'Hugging Face' },
    { character: '🖤', title: 'Black Heart' },
    { character: '🔥', title: 'Fire' },
    { character: '💰', title: 'Money Bag' },
    { character: '💯', title: 'Hundred Points Symbol' },
    { character: '💪', title: 'Flexed Biceps' },
    { character: '💩', title: 'Pile of Poo' },
    { character: '💥', title: 'Collision' },
    { character: '💞', title: 'Revolving Hearts' },
    { character: '💜', title: 'Purple Heart' },
    { character: '💚', title: 'Green Heart' },
    { character: '💙', title: 'Blue Heart' },
    { character: '💗', title: 'Growing Heart' },
    { character: '💖', title: 'Sparkling Heart' },
    { character: '💕', title: 'Two Hearts' },
    { character: '💔', title: 'Broken Heart' },
    { character: '💓', title: 'Beating Heart' },
    { character: '💐', title: 'Bouquet' },
    { character: '💋', title: 'Kiss Mark' },
    { character: '💀', title: 'Skull' },
    { character: '👑', title: 'Crown' },
    { character: '👏', title: 'Clapping Hands Sign' },
    { character: '👍', title: 'Thumbs Up Sign' },
    { character: '👌', title: 'OK Hand Sign' },
    { character: '👉', title: 'Backhand Index Pointing Right' },
    { character: '👈', title: 'Backhand Index Pointing Left' },
    { character: '👇', title: 'Backhand Index Pointing Down' },
    { character: '👀', title: 'Eyes' },
    { character: '🎶', title: 'Multiple Musical Notes' },
    { character: '🎊', title: 'Confetti Ball' },
    { character: '🎉', title: 'Party Popper' },
    { character: '🎈', title: 'Balloon' },
    { character: '🎂', title: 'Birthday Cake' },
    { character: '🎁', title: 'Wrapped Gift' },
    { character: '🌹', title: 'Rose' },
    { character: '🌸', title: 'Cherry Blossom' },
    { character: '🌞', title: 'Sun with Face' },
    { character: '❤️', title: 'Red Heart' },
    { character: '❣️', title: 'Heavy Heart Exclamation Mark Ornament' },
    { character: '✨', title: 'Sparkles' },
    { character: '✌️', title: 'Victory Hand' },
    { character: '✅', title: 'Check Mark Button' },
    { character: '♥️', title: 'Heart Suit' },
    { character: '☺️', title: 'Smiling Face' },
    { character: '☹️', title: 'Frowning Face' },
    { character: '☀️', title: 'Sun' }
];

class Editor extends ClassicEditor {
    public static override builtinPlugins = [
        Alignment,
        AutoImage,
        AutoLink,
        Autoformat,
        Autosave,
        BlockQuote,
        Bold,
        CloudServices,
        Code,
        CodeBlock,
        Essentials,
        FindAndReplace,
        FontBackgroundColor,
        FontColor,
        FontFamily,
        FontSize,
        GeneralHtmlSupport,
        Heading,
        Highlight,
        HorizontalLine,
        HtmlComment,
        HtmlEmbed,
        Image,
        ImageCaption,
        ImageInsert,
        ImageResize,
        ImageStyle,
        ImageToolbar,
        ImageUpload,
        Indent,
        IndentBlock,
        Italic,
        Link,
        LinkImage,
        List,
        ListProperties,
        MediaEmbed,
        MediaEmbedToolbar,
        Mention,
        PageBreak,
        Paragraph,
        PasteFromMarkdownExperimental,
        PasteFromOffice,
        RemoveFormat,
        SelectAll,
        ShowBlocks,
        SimpleUploadAdapter,
        SpecialCharacters,
        SpecialCharactersArrows,
        SpecialCharactersCurrency,
        SpecialCharactersEssentials,
        SpecialCharactersLatin,
        SpecialCharactersMathematical,
        SpecialCharactersText,
        SpecialCharactersEmoji,
        StandardEditingMode,
        Strikethrough,
        Style,
        Subscript,
        Superscript,
        Table,
        TableCaption,
        TableCellProperties,
        TableColumnResize,
        TableProperties,
        TableToolbar,
        TextTransformation,
        // Title,
        Underline,
        WordCount,
        ExportPdf,
        ExportWord,
        // ImportWord,
        SourceEditing,
    ];

    public static override defaultConfig: EditorConfig = {
        toolbar: {
            shouldNotGroupWhenFull: true,
            items: [
                // --- Document-wide tools ----------------------------------------------------------------------
                'undo',
                'redo',
                '|',
                // 'importWord',
                'exportWord',
                'exportPdf',
                'sourceEditing',
                '|',
                'findAndReplace',
                'selectAll',
                '|',
                // 'insertTemplate',
                // 'tableOfContents',
                // '|',
                // 'formatPainter',
                // '|',

                // --- "Insertables" ----------------------------------------------------------------------------

                'link',
                'insertImage',
                // 'ckbox',
                'insertTable',
                'blockQuote',
                // 'mediaEmbed',
                'codeBlock',
                'pageBreak',
                'horizontalLine',
                'specialCharacters',
                '-',

                // --- Block-level formatting -------------------------------------------------------------------
                'heading',
                'style',
                '|',

                // --- Basic styles, font and inline formatting -------------------------------------------------------
                'bold',
                'italic',
                'underline',
                'strikethrough',
                {
                    label: 'Basic styles',
                    icon: 'text',
                    items: [
                        'fontSize',
                        'fontFamily',
                        'fontColor',
                        'fontBackgroundColor',
                        'highlight',
                        'superscript',
                        'subscript',
                        'code',
                        // '|',
                        // 'textPartLanguage',
                        // '|',
                    ],
                },
                'removeFormat',
                '|',

                // --- Text alignment ---------------------------------------------------------------------------
                'alignment',
                '|',

                // --- Lists and indentation --------------------------------------------------------------------
                'bulletedList',
                'numberedList',
                // 'todoList',
                '|',
                'outdent',
                'indent',
            ],
        },
        fontFamily: {
            supportAllValues: true,
        },
        fontSize: {
            options: [10, 12, 14, 'default', 18, 20, 22],
            supportAllValues: true,
        },
        fontColor: {
            columns: 12,
            colors: REDUCED_MATERIAL_COLORS,
        },
        fontBackgroundColor: {
            columns: 12,
            colors: REDUCED_MATERIAL_COLORS,
        },
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                {
                    model: 'heading1',
                    view: 'h1',
                    title: 'Heading 1',
                    class: 'ck-heading_heading1',
                },
                {
                    model: 'heading2',
                    view: 'h2',
                    title: 'Heading 2',
                    class: 'ck-heading_heading2',
                },
                {
                    model: 'heading3',
                    view: 'h3',
                    title: 'Heading 3',
                    class: 'ck-heading_heading3',
                },
                {
                    model: 'heading4',
                    view: 'h4',
                    title: 'Heading 4',
                    class: 'ck-heading_heading4',
                },
                {
                    model: 'heading5',
                    view: 'h5',
                    title: 'Heading 5',
                    class: 'ck-heading_heading5',
                },
                {
                    model: 'heading6',
                    view: 'h6',
                    title: 'Heading 6',
                    class: 'ck-heading_heading6',
                },
            ],
        },
        htmlSupport: {
            allow: [
                {
                    name: /.*/,
                    attributes: true,
                    classes: true,
                    styles: true
                }
            ]
        },        
        image: {
            styles: {
                options: [
                    'inline', 'alignLeft', 'alignRight',
                    'alignCenter', 'alignBlockLeft', 'alignBlockRight',
                    'block', 'side'
                ]
            },
            resizeOptions: [
                {
                    name: 'resizeImage:original',
                    label: 'Default image width',
                    value: null,
                },
                {
                    name: 'resizeImage:50',
                    label: '50% page width',
                    value: '50',
                },
                {
                    name: 'resizeImage:75',
                    label: '75% page width',
                    value: '75',
                },
            ],
            toolbar: [
                'imageTextAlternative',
                'toggleImageCaption',
                '|',
                'imageStyle:inline',
                'imageStyle:wrapText',
                'imageStyle:breakText',
                'imageStyle:side',
                '|',
                'resizeImage',
            ],
            insert: {
                integrations: ['insertImageViaUrl'],
            },
        },     
        list: {
            properties: {
                styles: true,
                startIndex: true,
                reversed: true,
            },
        },
        link: {
            decorators: {
                toggleDownloadable: {
                    mode: 'manual',
                    label: 'Downloadable',
                    attributes: {
                        download: 'file',
                    },
                },
            },
            addTargetToExternalLinks: true,
            defaultProtocol: 'https://',
        },
        placeholder: 'Type or paste your content here!',
        style: {
            definitions: [
                {
                    name: 'Title',
                    element: 'h1',
                    classes: ['document-title'],
                },
                {
                    name: 'Subtitle',
                    element: 'h2',
                    classes: ['document-subtitle'],
                },
                {
                    name: 'Callout',
                    element: 'p',
                    classes: ['callout'],
                },
                {
                    name: 'Side quote',
                    element: 'blockquote',
                    classes: ['side-quote'],
                },
                {
                    name: 'Needs clarification',
                    element: 'span',
                    classes: ['needs-clarification'],
                },
                {
                    name: 'Wide spacing',
                    element: 'span',
                    classes: ['wide-spacing'],
                },
                {
                    name: 'Small caps',
                    element: 'span',
                    classes: ['small-caps'],
                },
                {
                    name: 'Code (dark)',
                    element: 'pre',
                    classes: ['stylish-code', 'stylish-code-dark'],
                },
                {
                    name: 'Code (bright)',
                    element: 'pre',
                    classes: ['stylish-code', 'stylish-code-bright'],
                },
            ],
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells',
                'tableProperties',
                'tableCellProperties',
                'toggleTableCaption',
            ],
        },
        exportPdf: {
            stylesheets: [
                'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500&display=swap',
                'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap',
            ],
            fileName: 'document.pdf',
            converterOptions: {
                format: 'A4',
                margin_top: '20mm',
                margin_bottom: '20mm',
                margin_right: '12mm',
                margin_left: '12mm',
                page_orientation: 'portrait'
            },
            converterUrl: 'https://pdf-converter.cke-cs.com/v1/convert',
        },
        exportWord: {
            converterUrl: 'https://docx-converter.cke-cs.com/v1/convert',
            fileName: 'document.docx',
            converterOptions: {
                format: 'A4', // Default value, you don't need to specify it explicitly for A4.
                margin_top: '20mm',
                margin_bottom: '20mm',
                margin_right: '12mm',
                margin_left: '12mm'
            }
        },
        // This value must be kept in sync with the language defined in webpack.config.js.
        language: 'en',
    };
}

export default Editor;
