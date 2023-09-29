const codeString1 = 
`const escapeHTML = str => str.replace(/[&<>'"]/g, tag => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;'
}[tag] || tag));

console.log(escapeHTML('<div>&</div>'));
`;

export default codeString1;
