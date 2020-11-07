const googleDatabase = [
    'cat.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'againcats.com',
    'alotofcats.com'
];

const googleSearch = (searchInput, db) => {
    const matches = db.filter(website=> {
        return website.includes(searchInput);
    });
    return matches.length > 3 ? matches.slice(0,3) : matches
}

module.exports = googleSearch;