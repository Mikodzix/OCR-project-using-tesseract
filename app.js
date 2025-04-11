 //Tesseract image to text conversion code
 document.getElementById('btn').addEventListener('click', () => {
    console.log('clicked');
    console.log(document.getElementById('imgfile').files[0]);

Tesseract.recognize(
    document.getElementById('imgfile').files[0],
    'eng',
    { logger: m => console.log(m) }
).then(({ data: { text } }) => {
    document.getElementById('text-content').innerText = text;
    console.log(text);

})
})

// Function to save text as .doc file
function saveAsDoc() {
var content = document.getElementById("text-content").innerHTML;
var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
           "xmlns:w='urn:schemas-microsoft-com:office:word' " +
           "xmlns='http://www.w3.org/TR/REC-html40'>" +
           "<head><meta charset='utf-8'></head><body>";
var footer = "</body></html>";
var sourceHTML = header + content + footer;
var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
var fileDownload = document.createElement("a");
document.body.appendChild(fileDownload);
fileDownload.href = source;
fileDownload.download = 'document.doc';
fileDownload.click();
document.body.removeChild(fileDownload);
};