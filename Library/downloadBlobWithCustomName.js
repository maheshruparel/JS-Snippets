Set the file name and open blob word type

var blob = new Blob([data], { type: 'application/octet-stream' });
var link = document.createElement('a');
link.href = URL.createObjectURL(blob);
// set the name of the file
link.download = "createdocument.docx";
// clicking the anchor element will download the file
link.click();
