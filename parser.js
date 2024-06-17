const input = `["Ducky Momo", "https://www.khanacademy.org/computer-programming/clone-trooper/5739353166495744", "Pyroach/Aviconazul", 0]
["Squid", "https://www.khanacademy.org/computer-programming/epic-workspace-v4/6735294476500992", "Pyroach/Aviconazul", 0]
["kiaantolia","https://www.khanacademy.org/computer-programming/working-code-editor/5023974555303936",Pyroach/Avinconzaul, 3]
["cwalsh1223","https://www.khanacademy.org/computer-programming/i/5618344975319040?height=800&width=800", "Pyroach/Aviconazul", 2]
["TheDuke","https://www.khanacademy.org/computer-programming/for-freedoms-cause-ft-vvhitetiger/6060441058590720", "Pyroach/Aviconazul", 2]
["TDJ", "https://www.khanacademy.org/computer-programming/manta-x-tdj-workspace/6401715171147776", "Pyroach/Aviconazul", 2]
["Yokiebob", "https://www.khanacademy.org/computer-programming/new-webpage/4881868247449600", "Pyroach/Aviconazul", 3]
["Chickenfarmer2009", "https://www.khanacademy.org/computer-programming/me-gustan-las-habichuelas-horneadas/5667574695772160", "Pyroach/Aviconazul", 2]
["SuperNova", "https://www.khanacademy.org/computer-programming/particle-effects-idk-lol/4915034148487168", "Pyroach/Aviconazul", 3]
["Noah H.", "https://www.khanacademy.org/computer-programming/strange-warping/5151757109477376", "Pyroach/Aviconazul", 4]
["Doglover", "https://www.khanacademy.org/computer-programming/new-program/4725272104058880", "Pyroach/Aviconazul", 1]
["Snowflake", "https://www.khanacademy.org/cs/family-line/4852610460467200", "Terratrice/Aequor", 1]
["Arden Dragon", "https://www.khanacademy.org/computer-programming/catch-game-thing/6433521241079808", "Terratrice/Aequor", 1]
["Bearkirb314", "https://www.khanacademy.org/computer-programming/asteroids-for-ka-contest/6204306864390144", "Terratrice/Aequor", 2]
["A+10333 + ~The Wolf~", https://www.khanacademy.org/computer-programming/ocean-submarine-got-no-better-name-graphic/5608159863029760, "Terratrice/Aequor", 2.5]
["Vicioustrex", https://www.khanacademy.org/computer-programming/black-and-white-fixed-unlimited-jumps-demo/6462490418003968, "Terratrice/Aequor", 3]
["panda", "https://www.khanacademy.org/computer-programming/uhhh/4568868441473024", "Terratrice/Aequor", 2]
["WalkWorthy", "https://www.khanacademy.org/computer-programming/computer/6641630060396544", "Terratrice/Aequor", 3]
["LeaferStudios", "https://www.khanacademy.org/computer-programming/khetris-v1/5003752255438848", "Terratrice/Aequor", 4]
`;

let cleaned = input.replaceAll("\n", "")
                   .replaceAll("”", "")
                   .replaceAll("“", "")
                   .replaceAll("\"", "")
                   .replaceAll("https://", "")
                   .replaceAll("]", "")
                   .split("[");

let data = [];

for (let i = 1; i < cleaned.length; i++) {
    
    let info = cleaned[i].split(",");

    let name;
    if (info[0]) {
        name = info[0].includes(":") ? info[0].split(":")[1].trim() : info[0].trim();
    } else {
        name = "[BLANK]";
    }

    let link;
    if (info[1]) {
        link = info[1].includes(":") ? info[1].split(":")[1].trim() : info[1].trim();
    } else {
        link = "[BLANK]";
    }

    let team;
    if (info[2]) {
        team = info[2].includes(":") ? info[2].split(":")[1].trim() : info[2].trim();
    } else {
        team = "[BLANK]";
    }

    data.push({name, link, team});
}

console.log(data);







