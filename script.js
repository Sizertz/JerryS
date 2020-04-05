var environments = [];

class Environment {
    static FILE_EXTENSION = ".environment";

    /**
     * @param {File} file 
     */
    constructor(file) {
        if (!file.name.endsWith(Environment.FILE_EXTENSION)) {
            throw "Not an environment file";
        }
        this.fileName = file.name;
        this.id = this.fileName.replace(Environment.FILE_EXTENSION, "");
        this.label = Environment.generateLabel(this.id);
        this.path = "weather/battle/" + this.fileName;
    }

    /**
     * @param {String} id 
     */
    static generateLabel(id) {
        id = id.replace("wh_", "")
            .replace("khaine2", "khaine_2")
            .replace("vaulsanvil", "vaul's_anvil")
            .replace("warpshardcavern", "warpshard_cavern")
            .replace("forestpath", "forest_path")

        return id.split("_")
            .map(parseAbbreviation)
            .map(capitalize)
            .join(" ");
    }
}

class JerryS {
    static writeLine(message, componentID) {
        if (componentID === undefined)
            console.log(message);
        else
            document.getElementById(componentID).innerHTML += `${message}\n`;
    }
}

function onSubmitEnvironments() {
    for (file of document.getElementById("environmentDirInput").files) {
        try {
            environments.push(new Environment(file));
        } catch (error) {
            JerryS.writeLine(error);
        }
    }
}


function generateEnvironmentTable() {
    JerryS.writeLine(`| --- | --- |`, "environmentTable")
    environments.sort((e, f) => e.label.localeCompare(f.label))
        .forEach(env => JerryS.writeLine(`| ${env.label} | ${env.path} |`, "environmentTable"));
}


function generateEnvironmentTestBattleTextTsv(resultDiv) {
    environments.map(env => `battles_localised_name_siz_enviro_${env.id}	Env: ${env.label}	true`)
        .forEach(line => JerryS.writeLine(line, resultDiv));
}

function generateEnvironmentTestBattlesTsv(resultDiv) {
    header1 = "battles_tables	11";
    header2 = "key	type	is_naval	specification	screenshot_path	map_path	team_size_1	team_size_2	release	multiplayer	singleplayer	intro_movie	year	defender_funds_ratio	has_key_buildings	matchmaking	playable_area_width	playable_area_height	is_large_settlement	has_15m_walls	is_underground	catchment_name	tile_upgrade	battle_environment	battle_environment_audio";
    JerryS.writeLine(header1, resultDiv);
    JerryS.writeLine(header2, resultDiv);
    environments.map(env => `siz_enviro_${env.id}	classic	false	terrain/battles/siz_enviro_test/	ui/frontend ui/battle_map_images/siz_enviro_test.tga		4	4	true	true	true		0	1	false	false	0	0	false	false	false			weather/battle/${env.id}.environment	`)
        .forEach(line => JerryS.writeLine(line, resultDiv));
}

function generateEnvironmentFilesXml(resultDiv) {
    JerryS.writeLine("<xml>", resultDiv);
    environments.map(env => `\t<item key=\"${env.id}\">${env.label}</item>`)
        .forEach(line => JerryS.writeLine(line, resultDiv));
    JerryS.writeLine("</xml>", resultDiv);
}

function capitalize(string) {
    chars = Array.from(string)
    chars[0] = chars[0].toUpperCase();
    return chars.join("");
}

function parseAbbreviation(s) {
    switch (s.toLowerCase()) {
        case "rj": return "RJ";
        case "wh": return "WH";
        case "wh2": return "WH2";
        case "brt": return "Bretonnia";
        case "bst": return "Beastmen";
        case "chs": return "chaos";
        case "cst": return "Coast";
        case "def": return "Dark Elf";
        case "dwf": return "Dwarf";
        case "emp": return "Empire";
        case "est": return "Estalia";
        case "grn": return "Greenskins";
        case "hef": return "High Elf";
        case "lzd": return "Lizardmen";
        case "mnt": return "Mountain";
        case "nit": return "Night Glades";
        case "nor": return "Norsca";
        case "pet": return "Petrified"
        case "qb": return "Quest Battle";
        case "skv": return "Skaven";
        case "stl": return "Southlands";
        case "sub": return "Subterranean";
        case "tmb": return "Tomb Kings"
        case "ult": return "Ulthuan";
        case "vc": return "Vampire Coast";
        case "vmp": return "Vampire";
        case "wef": return "Wood Elf";
        case "yi": return "Bill Yi";
        default: return s;
    }
}
