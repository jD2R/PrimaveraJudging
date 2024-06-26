/** Editable variables **/
const dataFolder = "2024";
const challengeID = "C2";
/* -------------------- */

// Required imports (deals with file system reading)
import * as fs from 'fs';
import * as path from 'path';

import { JudgeQuantity, ChallengeData } from './data.js';
import { jsmin } from 'jsmin';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Direct path to the data folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rawFolderPath = path.join(__dirname, `${dataFolder}/rawScoreJSON`);
const newFolderPath = path.join(__dirname, `${dataFolder}/newScoreJSON`);

const files = fs.readdirSync(rawFolderPath); // Read files from the folder

const getChallengeData = (challengeID) => {
    return files.filter(file => {
        return fs.statSync(path.join(rawFolderPath, file)).isFile() &&
               file.endsWith(`${challengeID}.txt`);
    });
};

const getOutputArray = (challengeID) => {
    let outputArray = [];
    getChallengeData(challengeID).forEach(file => {
        const filePath = path.join(rawFolderPath, file);
        const fileContent = fs.readFileSync(filePath, 'UTF8');
    
        let scoreDataArray = jsmin(fileContent, 3).replaceAll(/[\{\}"]/g, "").split(":").slice(1)
            .map(str => str.split(',')[0]);
    
        for (let i = 0; i < scoreDataArray.length; i += 2) {
            outputArray.push([scoreDataArray[i].toString(), +scoreDataArray[i + 1]]);
        };
    });
    return outputArray;
};

const createScoreJSON = (challengeArray) => {
    challengeArray.forEach(challengeID => {
        const output = {}; // Stores the completed summation of scores for the given challenge

        const outputArray = getOutputArray(challengeID);
        outputArray.forEach(info => {
            output[info[0]] = !output[info[0]] ? info[1] : output[info[0]] + info[1];
        });
        
        let judgeNum = JudgeQuantity[challengeID];
        Object.keys(output).forEach(key => {
            output[key] = +(output[key] / judgeNum).toFixed(2);
        });
        
        const newFileName = `${challengeID}.json`;
        const newFilePath = path.join(newFolderPath, newFileName);
        
        const outputJSON = JSON.stringify(output, null, 2);
        
        fs.writeFileSync(newFilePath, outputJSON);
    })
};

const createTeamJSON = (challengeArray) => {
    challengeArray.forEach(challengeID => {
        const filePath = path.join(newFolderPath, `${challengeID}.json`);
        const data = fs.readFileSync(filePath, 'utf8');
        const JSONdata = JSON.parse(data); // JSON of the individual scores
    
        let output = {};
        const challengeData = ChallengeData[challengeID].map(project => {
            return [project.name, project.team];
        });
        challengeData.forEach(project => {
            let team = project[1].toLowerCase();
            let score = JSONdata[project[0]]; // Grab the related individual score
            
            output[team] = !output[team] ? +score : +(output[team] + score).toFixed(2);
        });

        const newFileName = `TeamScores${challengeID}.json`;
        const newFilePath = path.join(newFolderPath, newFileName);
        
        const outputJSON = JSON.stringify(output, null, 2);
        
        fs.writeFileSync(newFilePath, outputJSON);
    });
};

let challengeArray = ["C2", "C3", "C4", "C5", "C6"];
createScoreJSON(challengeArray);
createTeamJSON(challengeArray);