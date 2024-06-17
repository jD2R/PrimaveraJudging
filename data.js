
/**
 *  ---------------
 *	KA Judgment 3.0
 * 	(c) DR 2024
 * 	---------------
 * 	+ User-Defined Variables
 * 		- ChallengeData (JSON)
 * 		- ValidTeams (Array)
 * 		- Judges (Multi-level Array)
 * 		- Assignments (Multi-level Array)
 * 	+ Program Functions
 * 		- convertTeams
 * 		- validateDataIntegrity
 */

// * USER-DEFINED VARIABLES *
let ValidTeams = [
	"Pyroach",
	"Aviconazul",
	"Aequor",
	"Terratrice",
	"Pyroach/Aviconazul",
	"Terratrice/Aequor"
];
const ChallengeData = {
	"C2": [
		{
			name: 'Lily',
			link: 'www.khanacademy.org/computer-programming/entry-for-primavera/4643955424280576',
			team: 'Aequor'
		},
		{
			name: 'Cyan Spirt',
			link: 'www.khanacademy.org/computer-programming/both-wip/5403243839143936',
			team: 'Aviconazul'
		},
		{
			name: 'The Duke',
			link: 'khanacademy.org/computer-programming/gray-worldgame/5358380980551680',
			team: 'Aviconazul'
		},
		{
			name: 'Theformerwizardofoz',
			link: 'www.khanacademy.org/computer-programming/i/5009698229764096',
			team: 'Pyroach'
		},
		{
			name: 'RedSus',
			link: 'www.khanacademy.org/cs/i/5301303008477184',
			team: 'Aviconazul'
		},
		{
			name: 'coliso',
			link: 'www.khanacademy.org/computer-programming/the-wayrn-lands/4953570515009536',
			team: 'Aviconazul'
		},
		{
			name: 'Super Student/Squiddy',
			link: 'www.khanacademy.org/computer-programming/epic-workspace/5740579877732352',
			team: 'Aviconazul'
		},
		{
			name: 'Arden Dragon',
			link: 'www.khanacademy.org/computer-programming/heh/5419349538684928',
			team: 'Aequor'
		},
		{
			name: 'cwalsh1223',
			link: 'www.khanacademy.org/computer-programming/dodge-jump-game/5151677878026240',
			team: 'Aviconazul'
		},
		{
			name: 'Lightning',
			link: 'www.khanacademy.org/computer-programming/sisao-primavera-challenge-2/5899190109126656',
			team: 'Aequor'
		},
		{
			name: 'arn5891',
			link: 'www.khanacademy.org/computer-programming/janky-rle/4923748988403712',
			team: 'Aequor'
		},
		{
			name: 'Futbol Guy',
			link: 'www.khanacademy.org/computer-programming/eye-tricks/4577857041383424',
			team: 'Aequor'
		},
		{
			name: 'LeaferStudios',
			link: 'www.khanacademy.org/computer-programming/smg-graphics-v10/6115301052301312',
			team: 'Terratrice'
		},
		{
			name: 'Jadie',
			link: 'www.khanacademy.org/computer-programming/the-vocab-quiz/6286191761211392',
			team: 'Aequor'
		},
		{
			name: 'Dipper98',
			link: 'www.khanacademy.org/computer-programming/corrosio-game/6443872996212736',
			team: 'Aviconazul'
		},
		{
			name: 'TDJ',
			link: 'www.khanacademy.org/computer-programming/dodge-td-game/4901508917936128',
			team: 'Pyroach'
		},
		{
			name: 'YokieBob',
			link: 'www.khanacademy.org/computer-programming/post-processing-ft-mr-pink/4676887673225216',
			team: 'Aviconazul'
		},
		{
			name: 'Fireball',
			link: 'www.khanacademy.org/computer-programming/yin-and-yang-a-game/5913765307138048',
			team: 'Aviconazul'
		},
		{
			name: 'IZH1',
			link: 'www.khanacademy.org/computer-programming/primavera-2024-challenge-one/5812123102527488',
			team: 'Aequor'
		},
		{
			name: 'sgh07',
			link: 'www.khanacademy.org/computer-programming/new-program/5534328317198336',
			team: 'aequor'
		},
		{
			name: 'A+10333',
			link: 'www.khanacademy.org/computer-programming/block-sim/5773041014063104',
			team: 'Terratrice'
		},
		{
			name: 'Bearkirb',
			link: 'www.khanacademy.org/computer-programming/off-planet-contrast-challenge-entry/4554177458651136',
			team: 'Terratrice'
		},
		{
			name: 'Jake K.',
			link: 'www.khanacademy.org/computer-programming/ant-game/5239258158383104',
			team: 'Terratrice'
		},
		{
			name: 'Coder2098',
			link: 'www.khanacademy.org/computer-programming/grave-departure/4753308143763456',
			team: 'Pyroach'
		},
		{
			name: 'Samwise',
			link: 'www.khanacademy.org/computer-programming/wip/5874922763763712',
			team: 'Terratrice'
		},
		{
			name: 'panda',
			link: 'www.khanacademy.org/computer-programming/rose/5546109353771008',
			team: 'Terratrice'
		},
		{
			name: 'Godgirl',
			link: 'www.khanacademy.org/computer-programming/subpage-30/6086711896096768',
			team: 'Pyroach'
		},
		{
			name: 'AsclepiusorAce',
			link: 'www.khanacademy.org/computer-programming/primavera-challenge-2-_ pairs _/5788610882879488',
			team: 'Aequor'
		},
		{
			name: 'Brikraeb',
			link: 'www.khanacademy.org/computer-programming/spin-off-of-major-team-w/5748743109001216',
			team: 'Terratrice'
		},
		{
			name: 'Cookie',
			link: 'www.khanacademy.org/computer-programming/split-pusheen/4602871892590592',
			team: 'Terratrice'
		},
		{
			name: 'Ducky Momo',
			link: 'www.khanacademy.org/computer-programming/sunset-primavera/6370586241187840',
			team: 'Pyroach'
		},
		{
			name: 'VVhiteTiger',
			link: 'www.khanacademy.org/computer-programming/i/4936104983314432',
			team: 'Pyroach'
		},
		{
			name: 'SuperNova',
			link: 'www.khanacademy.org/computer-programming/steam-animation/4588276315504640',
			team: 'Pyroach'
		},
		{
			name: 'Electric Dolphin',
			link: 'www.khanacademy.org/computer-programming/otherside-demo/4676868706582528',
			team: 'Pyroach'
		},
		{
			name: 'Canada Goose',
			link: 'www.khanacademy.org/computer-programming/dusk-dreams/6381494283714560',
			team: 'Terratrice'
		},
		{
			name: 'WalkWorthy',
			link: 'www.khanacademy.org/computer-programming/new-program/5574315376558080',
			team: 'Terratrice'
		}
	],
	"C3": [
		{
			name: 'Lightning',
			link: 'www.khanacademy.org/computer-programming/flat-art-castle-parallax-scroller/4999198203887616',
			team: 'Aequor'
		},
		{
			name: 'Arden Dragon',
			link: 'www.khanacademy.org/computer-programming/println/6394612523122688',
			team: 'Aequor'
		},
		{
			name: 'TD Overlord',
			link: 'www.khanacademy.org/computer-programming/13-years-of-portal-2-primavera-2024/4626218001022976',
			team: 'Aequor'
		},
		{
			name: 'AsclepiusorAce',
			link: 'www.khanacademy.org/computer-programming/sun-is-a-deadly-lazer-primavera-interactivity/4955712119422976',
			team: 'Aequor'
		},
		{
			name: 'Futbol Guy',
			link: 'www.khanacademy.org/computer-programming/platforming-playground-primavera-interactivity/5628888329404416',
			team: 'Aequor'
		},
		{
			name: 'sgh07',
			link: 'www.khanacademy.org/computer-programming/office/6443130360086528',
			team: 'Aequor'
		},
		{
			name: 'IZH1',
			link: 'www.khanacademy.org/computer-programming/primavera-2024-challenge-3/5577618604343296',
			team: 'Aequor'
		},
		{
			name: 'VVhiteTiger',
			link: 'www.khanacademy.org/computer-programming/i/4701186973941760',
			team: 'Pyroach'
		},
		{
			name: 'TDJ',
			link: 'www.khanacademy.org/cs/i/6538691436265472',
			team: 'Pyroach'
		},
		{
			name: 'Chickenfarmer2009',
			link: 'www.khanacademy.org/computer-programming/i-still-see-a-child/5950151883145216',
			team: 'Pyroach'
		},
		{
			name: 'Coder2098',
			link: 'www.khanacademy.org/computer-programming/growth-of-a-flower/4758590046519296',
			team: 'Pyroach'
		},
		{
			name: 'Theformerwizardofoz',
			link: 'www.khanacademy.org/computer-programming/new-webpage/5160587024318464',
			team: 'Pyroach'
		},
		{
			name: 'Duke',
			link: 'www.khanacademy.org/computer-programming/i-thought-it-was-the-27th-next-month-o-mostly-finished/6602359515561984',
			team: 'Aviconazul'
		},
		{
			name: 'coliso',
			link: 'www.khanacademy.org/computer-programming/inputs/5782336454705152',
			team: 'aviconazul'
		},
		{
			name: 'Dipper98',
			link: 'www.khanacademy.org/computer-programming/gravity-game/6276861694492672',
			team: 'Aviconazul'
		},
		{
			name: 'Squid/Super Student',
			link: 'www.khanacademy.org/computer-programming/epic-workspace-v2/5786849152516096',
			team: 'Aviconazul'
		},
		{
			name: 'cwalsh1223',
			link: 'www.khanacademy.org/computer-programming/primavera-typing-exam-updated/5001395201294336',
			team: 'Aviconazul'
		},
		{
			name: 'RomanStarCoder',
			link: 'www.khanacademy.org/computer-programming/are-you-like-romanstarcoder/5105160927494144',
			team: 'Aviconazul'
		},
		{
			name: 'Doglover',
			link: 'www.khanacademy.org/computer-programming/testing-testing-123/4829689794969600',
			team: 'Aviconazul'
		},
		{
			name: 'RedSus',
			link: 'www.khanacademy.org/computer-programming/fiiiiiiish/5919069113597952',
			team: 'Aviconazul'
		},
		{
			name: 'LeaferStudios',
			link: 'www.khanacademy.org/computer-programming/rogue-run-game/5436065676181504',
			team: 'Terratrice'
		},
		{
			name: '~The Wolf~',
			link: 'www.khanacademy.org/computer-programming/speed-primavera-interactivity-entry/5931621234163712',
			team: 'Terratrice'
		},
		{
			name: 'A+10333',
			link: 'www.khanacademy.org/computer-programming/go-build-wip/6503364218765312',
			team: 'Terratrice'
		},
		{
			name: 'panda',
			link: 'khanacademy.org/computer-programming/hummingbird/5698362696974336',
			team: 'Terratrice'
		},
		{
			name: 'TTyper',
			link: 'www.khanacademy.org/computer-programming/fighting-robot/6110153310650368',
			team: 'Terratrice'
		},
		{
			name: 'Bearkirb',
			link: 'www.khanacademy.org/computer-programming/friendly-reminder-to-touch-grass-2-geometric-boogaloo/6472395868782592',
			team: 'Terratrice'
		}
	],
	"C4": [
		{
			name: 'Arden',
			link: 'www.khanacademy.org/python-program/dino-python-game-primavera-hour-of-code-team-aeqour/4606874655309824',
			team: 'Aequor'
		},
		{
			name: 'sugar',
			link: 'www.khanacademy.org/computer-programming/leafi-live-one-hour-challenge/6604291617505280',
			team: 'Aequor'
		},
		{
			name: 'IZH1',
			link: 'www.khanacademy.org/profile/kaid_797773915164293752310801',
			team: 'Aequor'
		},
		{
			name: 'Lightning',
			link: 'www.khanacademy.org/computer-programming/new-program/6700037259837440',
			team: 'Aequor'
		},
		{
			name: 'Theformerwizardofoz',
			link: 'www.khanacademy.org/computer-programming/new-program/5243887307898880',
			team: 'pyroach'
		},
		{
			name: 'CodingChamp01',
			link: 'khanacademy.org/computer-programming/-/4674084532830208',
			team: 'Pyroach'
		},
		{
			name: 'Electric Dolphin',
			link: 'www.khanacademy.org/computer-programming/some-loading-screens/6085211204534272',
			team: 'Pyroach'
		},
		{
			name: 'Chickenfarmer2009',
			link: 'www.khanacademy.org/computer-programming/dorito-dodge-primavera-hour-of-code-entry-for-pyroach/4845074623676416',
			team: 'Pyroach'
		},
		{
			name: 'VVhiteTiger',
			link: 'www.khanacademy.org/computer-programming/i/4800195442950144',
			team: 'Pyroach'
		},
		{
			name: 'Ducky Momo',
			link: 'www.khanacademy.org/computer-programming/neon-duck-primavera/6057506008383488',
			team: 'Pyroach'
		},
		{
			name: 'SuperNova',
			link: 'www.khanacademy.org/computer-programming/bouncy-circles/5365043654475776',
			team: 'Pyroach'
		},
		{
			name: 'TDJ',
			link: 'www.khanacademy.org/cs/i/5618350071398400',
			team: 'Pyroach'
		},
		{
			name: 'kiaantolia',
			link: 'www.khanacademy.org/cs/i/6321512447131648',
			team: 'Pyroach'
		},
		{
			name: 'Squid/Super Student',
			link: 'www.khanacademy.org/computer-programming/epic-hour-of-code-project/6062732471877632',
			team: 'Aviconazul'
		},
		{
			name: 'Duke',
			link: 'www.khanacademy.org/computer-programming/through-the-ages-coming-soon/5400022522445824',
			team: 'Aviconazul'
		},
		{
			name: 'cwalsh1223',
			link: 'www.khanacademy.org/computer-programming/red-balls-last-stand/5094337251295232',
			team: 'Aviconazul'
		},
		{
			name: 'Dipper98',
			link: 'www.khanacademy.org/computer-programming/slide-dodge-game/4604883409485824',
			team: 'Aviconazul'
		},
		{
			name: 'RomanStarCoder',
			link: 'www.khanacademy.org/computer-programming/bluey-the-circle-2-poster/5297878100262912?',
			team: 'Aviconazul'
		},
		{
			name: 'coliso',
			link: 'www.khanacademy.org/computer-programming/battle-primavera-hour-challenge/6604607968690176',
			team: 'Aviconazul'
		},
		{
			name: 'Cyan Spirit',
			link: 'www.khanacademy.org/computer-programming/clock-in-1-hour/5499648332185600',
			team: 'Aviconazul'
		},
		{
			name: 'Cookie',
			link: 'www.khanacademy.org/computer-programming/cookie-monster/6558968153030656',
			team: 'Terratrice'
		},
		{
			name: 'Snowflake',
			link: 'www.khanacademy.org/cs/celestial-serenity/5438715440316416',
			team: 'Terratrice'
		},
		{
			name: 'A+10333',
			link: 'www.khanacademy.org/computer-programming/click-the-circle/6615115539070976',
			team: 'Terratrice'
		},
		{
			name: 'Samwise #JesusuIsKing',
			link: 'www.khanacademy.org/computer-programming/globe/5545808426090496',
			team: 'Terratrice'
		},
		{
			name: 'panda',
			link: 'www.khanacademy.org/computer-programming/primavera-hour-of-code/5604052276264960',
			team: 'Terratrice'
		},
		{
			name: 'LeaferStudios',
			link: 'www.khanacademy.org/computer-programming/exerjournal-v1-by-leaferstudios/4829416582201344',
			team: 'Terratrice'
		},
		{
			name: '~The Wolf~',
			link: 'www.khanacademy.org/computer-programming/survive-really-easy-in-the-beginning-primavera-2024/5206590281662464',
			team: 'Terratrice'
		}
	],
	"C5": [
		{
			name: 'Ducky Momo',
			link: 'www.khanacademy.org/computer-programming/clone-trooper/5739353166495744',
			team: 'Pyroach/Aviconazul'
		},
		{
			name: 'Squid',
			link: 'www.khanacademy.org/computer-programming/epic-workspace-v4/6735294476500992',
			team: 'Pyroach/Aviconazul'
		},
		{
			name: 'kiaantolia',
			link: 'www.khanacademy.org/computer-programming/working-code-editor/5023974555303936',
			team: 'Pyroach/Aviconazul'
		},
		{
			name: 'cwalsh1223',
			link: 'www.khanacademy.org/computer-programming/i/5618344975319040?height=800&width=800',
			team: 'Pyroach/Aviconazul'
		},
		{
			name: 'TheDuke',
			link: 'www.khanacademy.org/computer-programming/for-freedoms-cause-ft-vvhitetiger/6060441058590720',
			team: 'Pyroach/Aviconazul'
		},
		{
			name: 'TDJ',
			link: 'www.khanacademy.org/computer-programming/manta-x-tdj-workspace/6401715171147776',
			team: 'Pyroach/Aviconazul'
		},
		{
			name: 'Yokiebob',
			link: 'www.khanacademy.org/computer-programming/new-webpage/4881868247449600',
			team: 'Pyroach/Aviconazul'
		},
		{
			name: 'Chickenfarmer2009',
			link: 'www.khanacademy.org/computer-programming/me-gustan-las-habichuelas-horneadas/5667574695772160',
			team: 'Pyroach/Aviconazul'
		},
		{
			name: 'SuperNova',
			link: 'www.khanacademy.org/computer-programming/particle-effects-idk-lol/4915034148487168',
			team: 'Pyroach/Aviconazul'
		},
		{
			name: 'Noah H.',
			link: 'www.khanacademy.org/computer-programming/strange-warping/5151757109477376',
			team: 'Pyroach/Aviconazul'
		},
		{
			name: 'Doglover',
			link: 'www.khanacademy.org/computer-programming/new-program/4725272104058880',
			team: 'Pyroach/Aviconazul'
		},
		{
			name: 'Snowflake',
			link: 'www.khanacademy.org/cs/family-line/4852610460467200',
			team: 'Terratrice/Aequor'
		},
		{
			name: 'Arden Dragon',
			link: 'www.khanacademy.org/computer-programming/catch-game-thing/6433521241079808',
			team: 'Terratrice/Aequor'
		},
		{
			name: 'Bearkirb314',
			link: 'www.khanacademy.org/computer-programming/asteroids-for-ka-contest/6204306864390144',
			team: 'Terratrice/Aequor'
		},
		{
			name: 'A+10333 + ~The Wolf~',
			link: 'www.khanacademy.org/computer-programming/ocean-submarine-got-no-better-name-graphic/5608159863029760',
			team: 'Terratrice/Aequor'
		},
		{
			name: 'Vicioustrex',
			link: 'www.khanacademy.org/computer-programming/black-and-white-fixed-unlimited-jumps-demo/6462490418003968',
			team: 'Terratrice/Aequor'
		},
		{
			name: 'panda',
			link: 'www.khanacademy.org/computer-programming/uhhh/4568868441473024',
			team: 'Terratrice/Aequor'
		},
		{
			name: 'WalkWorthy',
			link: 'www.khanacademy.org/computer-programming/computer/6641630060396544',
			team: 'Terratrice/Aequor'
		},
		{
			name: 'LeaferStudios',
			link: 'www.khanacademy.org/computer-programming/khetris-v1/5003752255438848',
			team: 'Terratrice/Aequor'
		}
	],
	"C6": []
};
const Judges = [
	["Dominic R.", "DR"],
	["Liam K.", "LK"],
	["ski", "SJ"],
	["Astro", "AT"],
	["F4stB01", "F1"],
	["SMV", "SV"]
];
const Assignments = {
	"DR": [
		["Aequor", "Pyroach"],
		["Pyroach", "Terratrice"],
		["Aviconazul", "Terratrice"],
		["Pyroach/Aviconazul"],
		["Pyroach/Aviconazul"]
	],
	"LK": [
		["Pyroach"],
		["Aviconazul"],
		["Aequor"],
		["Pyroach/Aviconazul"],
		["Terratrice/Aequor"]
	],
	"SJ": [
		["Aequor"],
		["Aviconazul", "Terratrice"],
		["Aequor"],
		["Terratrice/Aequor"],
		["Pyroach/Aviconazul"]
	],
	"AT": [
		["Aviconazul", "Terratrice"],
		["Aequor"],
		["Terratrice"],
		["Terratrice/Aequor"],
		["Terratrice/Aequor"]
	],
	"F1": [
		["Terratrice"],
		["Pyroach"],
		["Pyroach"],
		["Terratrice/Aequor"],
		["Pyroach/Aviconazul"]
	],
	"SV": [
		["Aviconazul"],
		["Aequor"],
		["Pyroach", "Aviconazul"],
		["Pyroach/Aviconazul"],
		["Terratrice/Aequor"]
	]
};

// * PROGRAM FUNCTIONS *
(function convertTeams() {
	ValidTeams = ValidTeams.map(t => t.toLowerCase())
})();
(function validateDataIntegrity() {
	Object.keys(ChallengeData).forEach(challengeValue => {

		ChallengeData[challengeValue].forEach(project => {
			if (!ValidTeams.includes(project.team.toLowerCase())) {
				console.error(`Invalid Data: ${project.name}
				Team Name: ${project.team}
				Challenge: ${challengeValue}`);
			}
		});

	});
})();

export { ChallengeData, Judges, Assignments };