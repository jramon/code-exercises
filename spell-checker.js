/**
 * This challenge is to implement a basic spell checker. Some of the
 * code has already been written. Implement the printCorrections
 * function below to complete the challenge.
 */
 const writingSample = "The race to " +
 "dominaet the electric-vehicle industry may be getting tighter as " +
 "Volkswagen, the German automobile giant and looming Tesla rival, " +
 "reveeled plans on Monday to reduce the cost of batterees and operate " +
 "a wide-ranging charging network. In its first-ever “Power Day,” " +
 "remeniscent of electric-car maker Tesla much-hyped “Battery Day,” " +
 "the German group that owns the Volkswagen, Audi and Porshe brands " +
 "said it would rely on six gigafactories in Europe to secure " +
 "supllies as the industry faces a looming shortage.";

const wordList = "a and as Audi " +
 "automobile batteries Battery be brands car charging cost Day " +
 "dominate electric Europe ever faces first German getting giant " +
 "gigafactories group hyped in industry it its looming maker may " +
 "Monday much network of on operate owns plans Porsche Power race " +
 "ranging reduce rely reminiscent revealed rival said secure " +
 "shortage six supplies Tesla that the tighter to vehicle Volkswagen " +
 "wide would";

/**
* @param text is a writing sample
* @return a list of the words parsed from the text.
* The words are forced to lower case.
*/
function parseWords(text) {
 const words = [...text.match(/\w+/g)]
 return words.map(word => word.toLowerCase())
}

/**
* @param word1 is any word
* @param word2 is any other word to compare with word1
* @return a number between 0 and 1 where 1 is a perfect match
* and 0 is not a match at all.
*/
function fuzzyCompare(word1, word2) {
 const w1 = word1.toLowerCase();
 const w2 = word2.toLowerCase();
 let matchingChars = 0;
 const totalChars = Math.max(w1.length, w2.length);
 const minChars = Math.min(w1.length, w2.length);
 for(let i = 0; i< minChars; i++) {
   if(w1.charAt(i) === w2.charAt(i)) {
     matchingChars++;
   }
 }
 return matchingChars/ totalChars; 
}

/**
* Needs to be implemented
* @param writingSample is text that contains spelling errors
* @param wordList contains the words in writingSample, but spelled correctly
*/
function printCorrections(writingSample, wordList) {
 /*
  * TODO:
  * Use wordList to determine which words in writingSample
  * are misspelled. Use parseWords() and fuzzyCompare()
  * to solve the problem. Output the misspelled words and
  * the correct spelling as shown below. The output should
  * be as follows:
  *
  * Replace "dominaet" with "dominate"
  * Replace "reveeled" with "revealed"
  * Replace "batterees" with "batteries"
  * Replace "remeniscent" with "reminiscent"
  * Replace "Porshe" with "Porsche"
  * Replace "supllies" with "supplies"
  */

    const parsedSample = parseWords(writingSample);
    const parsedWordList = parseWords(wordList);

    const dictionary = new Set();

    parsedWordList.forEach((word, i) => {
        dictionary.add(word);
    });

    const notInDict = parsedSample.filter((word, i) => {
        return !dictionary.has(word);
    });

    for(let i = 0; i < notInDict.length; i++) {
        let score = 0;
        for(let j = 0; j < parsedWordList.length; j++) {
            let candidate = fuzzyCompare(notInDict[i], parsedWordList[j]);
            if(candidate > score) {
                score = candidate;
                dictionaryIndex = j;
            }
        }
        
        console.log(`Correction of ${notInDict[i]}  => ${parsedWordList[dictionaryIndex]}`)
    }
}

printCorrections(writingSample, wordList)
