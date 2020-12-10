// Set the file name and open blob word type

const blob = new Blob([data], { type: 'application/octet-stream' });
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
// give name tothe file
link.download = "customfilename.ext";
// trigger click to download file
link.click();
