function isPangram(string){
    const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for (let x = 0; x < letters.length; x++) {
        if (string.toLowerCase().includes(letters[x]) == false) {
            return false;
        }
    }
    return true;
  }

const string = "The quick brown fox jumps over the lazy dog.";
isPangram(string);