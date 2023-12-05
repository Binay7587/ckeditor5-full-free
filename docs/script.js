// createDialog().then(config => {
//     return ClassicEditor
//         .create(document.querySelector('.editor'), {
//             licenseKey: config.licenseKey
//         })
//         .then(editor => {
//             window.editor = editor;
//         })
//         .catch(error => {
//             console.error('There was a problem initializing the editor.', error);
//         });
// });

ClassicEditor
    .create(document.querySelector('.editor'))
    .then(editor => {
        window.editor = editor;
    })
    .catch(error => {
        console.error('There was a problem initializing the editor.', error);
    });
