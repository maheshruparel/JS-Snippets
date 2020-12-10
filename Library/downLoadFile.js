// needs to be tested again
downLoadFile(data: any, type: string) {
  const blob = new Blob([data], { type: type });
  const url = window.URL.createObjectURL(blob);
  const pwa = window.open(url);
  if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
    alert('Please disable your Pop-up blocker and try again.');
  }
}
