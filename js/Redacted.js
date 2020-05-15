"use strict";

function redacted(doc1, doc2) {    
    if(doc1.length !== doc2.length) return false;
    for(let i = 0; i < doc1.length; i++)
      if(doc1[i] !== doc2[i] && (doc1[i] === '\n' || doc2[i] === '\n' || doc1[i] !== 'X')) return false;
    return true;
  }