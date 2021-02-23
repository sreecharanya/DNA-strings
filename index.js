let dna = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//a) Replace the gene "GCT" with "AGG", and then print the altered strand.
console.log("Original DNA",dna)
console.log("------------------------")
console.log("replace GCT to AGG")
dna=dna.replace("GCT","AGG");
console.log(dna)
console.log("------------------------")
//b) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".
if(dna.indexOf("CAT")){
  console.log("CAT gene found")
}else{
  console.log("CAT gene NOT found");
}
console.log("------------------------")

//c) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
console.log(dna.slice(16,19))
console.log("------------------------")

//d) Use a template literal to print, "The DNA strand is ___ characters long."
let lengthOfDna=dna.length;
console.log(lengthOfDna)
console.log(`The DNA strand is ${lengthOfDna} characters long.`)
console.log("------------------------")
//e) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
if(dna.includes("TAC")&& dna.indexOf("CAT")){
  let tc= "taco cat"
  console.log(`Printing ${tc}`)
}else{
  console.log(`Print ${dna}`)
}