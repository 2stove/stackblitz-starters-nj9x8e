const words = [
  'JAVASCRIPT',
  'HTML',
  'CSS',
  'NODE',
  'REACT',
  'ANGULAR',
  'JQUERY',
  'VUE'
];

function selectRandomWord()  {
  return words[Math.floor(Math .random() * words.length)]; 
} 
