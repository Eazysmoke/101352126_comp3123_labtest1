const lowerCaseWords = (words) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(words)) {
            reject('Input must be an array.');
            return;
        }

        const result = words
            .filter(word => typeof word === 'string')
            .map(word => word.toLowerCase());

        resolve(result);
    });
};

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));
