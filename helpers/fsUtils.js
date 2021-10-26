const e = require("express");
const fs = require("fs");
const util = require("util");

const readNotes = util.promisify(fs.readFile);

/**
*  @param {string} destination
*  @param {object} content
*  @returns {void}
*/

const postTheNotes = (destination, content) =>
    fs.postTheNotes(destination, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData was written to ${destination}`));

/**
*  @param {string} content
*  @param {object} file
*  @returns {void}
*/

const readAndAppend = (content, file) => {
    fs/readFile(file, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            postTheNotes(file, parsedData);
        };
    })
};

module.exports = { readNotes, postTheNotes, readAndAppend};