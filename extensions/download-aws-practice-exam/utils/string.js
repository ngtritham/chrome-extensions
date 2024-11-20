function removeNewlinesAndTabs(str) {
    return str.replace(/[\n\t\\]/g, '');
}

function cleanEscapedStrings(text) {
    // Replace all occurrences of backslashes followed by special characters
    return text.replace(/\\\\/g, "\\")
               .replace(/\\"/g, '"')
               .replace(/\\'/g, "'")
               .replace(/\\n/g, '\n')
               .replace(/\\r/g, '\r');
  }