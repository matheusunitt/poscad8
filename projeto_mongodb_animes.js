// adicionando collection de estudios
db.estudio.insertMany([
{
    nome: "JC.Staff",
    animes: []
},
{
    nome: "WIT Studio",
    animes: []
},
{
    nome: "Bones",
    animes: []
},
{
    nome: "Silver Link",
    animes: []
},
{
    nome: "Pierrot",
    animes: []
}
]);

// adicionando o collection de dubladores
db.dublador.insertMany([
{
    nome_romanizado: "Yuuki Kaji",
    data_nascimento: new Date("1985-09-03"),
    sexo: "M",
    animes_dublados: [] // shingeki
},
{
    nome_romanizado: "Setsuo Itou",
    data_nascimento: new Date("1991-03-18"),
    sexo: "M",
    animes_dublados: [] // mob psycho
},
{
    nome_romanizado: "Yoshitsugu Matsuoka",
    data_nascimento: new Date("1986-09-17"),
    sexo: "M",
    animes_dublados: [] // shokugeki
},
{
    nome_romanizado: "Sora Amamiya",
    data_nascimento: new Date("1993-08-28"),
    sexo: "F",
    animes_dublados: [] // divine gate
},
{
    nome_romanizado: "Ayane Sakura",
    data_nascimento: new Date("1994-01-29"),
    sexo: "F",
    animes_dublados: [] // boku no hero
},
{
    nome_romanizado: "Yuusuke Kobayashi",
    data_nascimento: new Date("1985-04-25"),
    sexo: "M",
    animes_dublados: [] // kenja no mago
}
]);

// adicionando o collection de animes
db.anime.insertMany([
{
    titulo_original: "My Hero Academia",
    titulo_romanizado: "Boku no Hero Academia",
    genero: ["acao", "comedia"],
    total_episodios: 88,
    sinopse: "Since he was a child, the ambitious middle schooler has wanted nothing more than to be a hero. Izuku's unfair fate leaves him admiring heroes and taking notes on them whenever he can. But it seems that his persistence has borne some fruit: Izuku meets the number one hero and his personal idol, All Might. All Might's quirk is a unique ability that can be inherited, and he has chosen Izuku to be his successor!",
    pontuacao: 8.20,
    estudio_produtor: "", // BONES
    dubladores: [],
    url_trailer: "youtube.com",
    tags: ["super poderes", "shounen", "super heroi"]
},
{
    titulo_original: "Mob Psycho 100",
    titulo_romanizado: "Mob Psycho 100",
    genero: ["acao", "comedia", "slice of life", "supernatural"],
    total_episodios: 25,
    sinopse: "In order to effectuate control on his skills, Mob enlists himself under the wing of Arataka Reigen, a con artist claiming to be a psychic, who exploits Mob's powers for pocket change. Now, exorcising evil spirits on command has become a part of Mob's daily, monotonous life. However, the psychic energy he exerts is barely the tip of the iceberg; if his vast potential and unrestrained emotions run berserk, a cataclysmic event that would render him completely unrecognizable will be triggered. The progression toward Mob's explosion is rising and attempting to stop it is futile.",
    pontuacao: 8.50,
    estudio_produtor: "", // BONES
    dubladores: [],
    url_trailer: "youtube.com",
    tags: ["super poderes", "supernatural", "fantasia", "satira"]
},
{
    titulo_original: "Food Wars!",
    titulo_romanizado: "Shokugeki no Souma",
    genero: ["culinaria", "comedia", "escola"],
    total_episodios: 84,
    sinopse: "Yet when his father suddenly decides to close the restaurant to test his cooking abilities in restaurants around the world, he sends Souma to Tootsuki Culinary Academy, an elite cooking school where only 10 percent of the students graduate. The institution is famous for its Shokugeki or food wars, where students face off in intense, high-stakes cooking showdowns.",
    pontuacao: 8.36,
    estudio_produtor: "", // JC.Staff
    dubladores: [],
    url_trailer: "youtube.com",
    tags: ["protagonista", "cozinha", "ecchi"]
},
{
    titulo_original: "Wise Mans Grandchild",
    titulo_romanizado: "Kenja no Mago",
    genero: ["acao", "comedia", "fantasia", "romance"],
    total_episodios: 12,
    sinopse: "A young man is reborn in another world where he is adopted as a baby by the hero Merlin Wolford and named Shin. By his 15th birthday, Shin has accumulated all kinds of power by studying under Merlin, but one thing his adoptive grandfather didn't give him was a lick of common sense.",
    pontuacao: 6.56,
    estudio_produtor: "", // SILVER LINK
    dubladores: [],
    url_trailer: "youtube.com",
    tags: ["magia", "isekai", "demonios", "reincarnacao"]
},
{
    titulo_original: "Attack on Titan",
    titulo_romanizado: "Shingeki no Kyojin",
    genero: ["acao", "drama", "revolucao", "psicologico"],
    total_episodios: 59,
    sinopse: "In this post-apocalyptic sci-fi story, humanity has been devastated by the bizarre, giant humanoids known as the Titans. Little is known about where they came from or why they are bent on consuming mankind. Seemingly unintelligent, they have roamed the world for years, killing everyone they see. For the past century, what's left of man has hidden in a giant, three-walled city. People believe their 50-meter-high walls will protect them from the Titans, but the sudden appearance of an immense Titan is about to change everything.",
    pontuacao: 10.0,
    estudio_produtor: "", // WIT Studio
    dubladores: [],
    url_trailer: "youtube.com",
    tags: ["distopia", "militar", "filosofia", "politica", "tragedia", "romance"]
},
{
    titulo_original: "Divine Gate",
    titulo_romanizado: "Divine Gate",
    genero: ["acao", "fantasia", "scifi"],
    total_episodios: 12,
    sinopse: "In that world, boys and girls deemed fit by the World Council are gathered. They are ones who aim to reach the gate for their personal objectives. Those who reach the gate can remake the world.",
    pontuacao: 4.8,
    estudio_produtor: "", // Pierrot
    dubladores: [],
    url_trailer: "youtube.com",
    tags: ["shounen", "deuses", "tragedia", "cgi"]
}
]);

// adicionando o collection de usuarios
db.usuario.insertMany([
{
    nome: "Jeffrey Matheus",
    nickname: "jeffrey123",
    data_nascimento: new Date("1996-10-09"),
    animes_assistidos: [],
    email: "jeffrey@gmail.com",
    senha: "jeffrey12345"
},
{
    nome: "Rafael Carneiro",
    nickname: "rlcarneiro",
    data_nascimento: new Date("1997-02-28"),
    animes_assistidos: [],
    email: "rafael@gmail.com",
    senha: "rc123456"
},
{
    nome: "Fall Guys merece ser comprado. GOTY. 10/10. Would've play it again.",
    nickname: "especial"
},
{
    nome: "Israel Barbalho",
    nickname: "raedionisio",
    data_nascimento: new Date("1995-01-15"),
    animes_assistidos: [],
    email: "israel@gmail.com",
    senha: "raedionisio123"
}
]);

// atualizando os dubladores (referencias)
db.dublador.updateOne(
    {
        nome_romanizado: "Yuuki Kaji"
    },
    { 
        $set: {
            animes_dublados: [ObjectId("5f5cf8a74a3e53d774a3075a")]
        } // shingeki
    }
);
    
db.dublador.updateOne(
    {
        nome_romanizado: "Setsuo Itou"
    },
    {
        $set: {
            animes_dublados: [ObjectId("5f5cf8a74a3e53d774a30757")]
        } // mob psycho
    }
);
    
db.dublador.updateOne(
    {
        nome_romanizado: "Yoshitsugu Matsuoka"
    },
    {
        $set: {
            animes_dublados: [ObjectId("5f5cf8a74a3e53d774a30758")]
        } // shokugeki
    }
);

db.dublador.updateOne(
    {
        nome_romanizado: "Sora Amamiya"
    },
    {
        $set: {
            animes_dublados: [ObjectId("5f5cf8a74a3e53d774a3075b")]
        } // divine gate
    }
);

db.dublador.updateOne(
    {
        nome_romanizado: "Ayane Sakura"
    },
    {
        $set: {
            animes_dublados: [ObjectId("5f5cf8a74a3e53d774a30756")]
        } // boku no hero
    }
);

db.dublador.updateOne(
    {
        nome_romanizado: "Yuusuke Kobayashi"
    },
    {
        $set: {
            animes_dublados: [ObjectId("5f5cf8a74a3e53d774a30759")]
        } // kenja no mago
    }
);

// atualizando os estudios (referencias)
db.estudio.updateOne(
    {
        nome: "JC.Staff"
    },
    {
        $set: {
            animes: [ObjectId("5f5cf8a74a3e53d774a30758")] // shokugeki no soma
        }
    }
);
    
db.estudio.updateOne(
    {
        nome: "WIT Studio"
    },
    {
        $set: {
            animes: [ObjectId("5f5cf8a74a3e53d774a3075a")] // shingeki no kyojin
        }
    }
);
  
db.estudio.updateOne(
    {
        nome: "Bones"
    },
    {
        $set: {
            animes: [ObjectId("5f5cf8a74a3e53d774a30756"), ObjectId("5f5cf8a74a3e53d774a30757")] // my hero academia, mob pyscho 100
        }
    }
);
    
db.estudio.updateOne(
    {
        nome: "Silver Link"
    },
    {
        $set: {
            animes: [ObjectId("5f5cf8a74a3e53d774a30759")] // kenja no mago
        }
    }
);
    
db.estudio.updateOne(
    {
        nome: "Pierrot"
    },
    {
        $set: {
            animes: [ObjectId("5f5cf8a74a3e53d774a3075b")] // divine gate
        }
    }
);

// atualizando os animes (referencias)
db.anime.updateOne(
    {
        titulo_original: "My Hero Academia",
    },
    {
        $set: {
            estudio_produtor: ObjectId("5f5cf84d4a3e53d774a3074d"), // BONES
            dubladores: [ObjectId("5f5cf8574a3e53d774a30754")],
        }
    }
);
    
db.anime.updateOne(
    {
        titulo_original: "Mob Psycho 100"
    },
    {
        $set: {
            estudio_produtor: ObjectId("5f5cf84d4a3e53d774a3074d"), // BONES
            dubladores: [ObjectId("5f5cf8574a3e53d774a30751")],
        }
    }
);

db.anime.updateOne(
    {
        titulo_original: "Food Wars!"
    },
    {
        $set: {
            estudio_produtor: ObjectId("5f5cf84d4a3e53d774a3074b"), // JC.Staff
            dubladores: [ObjectId("5f5cf8574a3e53d774a30752")],
        }
    }
);
    
db.anime.updateOne(
    {
        titulo_original: "Wise Mans Grandchild"
    },
    {
        $set: {
            estudio_produtor: ObjectId("5f5cf84d4a3e53d774a3074e"), // Silver Link
            dubladores: [ObjectId("5f5cf8574a3e53d774a30755")],
        }
    }
);
    
db.anime.updateOne(
    {
        titulo_original: "Attack on Titan"
    },
    {
        $set: {
            estudio_produtor: ObjectId("5f5cf84d4a3e53d774a3074c"), // WIT Studio
            dubladores: [ObjectId("5f5cf8574a3e53d774a30750")],
        }
    }
);

db.anime.updateOne(
    {
        titulo_original: "Divine Gate"
    },
    {
        $set: {
            estudio_produtor: ObjectId("5f5cf84d4a3e53d774a3074f"), // Pierrot
            dubladores: [ObjectId("5f5cf8574a3e53d774a30753")],
        }
    }
);
    
// remocao de um anime aleatorio
db.anime.remove(
    {
        pontuacao: {$lt: 5} // remove o que tiver pontuacao menor que 5: divine gate
    }
);
    
// consultas diversas
// coleçao inteira
db.anime.find({});

// contagem de documentos
db.anime.count();

// 3 consultas com filtros diversos (in, gt) sem projeçao
db.anime.find(
    {titulo_original: "Attack on Titan"}
);
    
db.anime.find(
    {pontuacao: {$gt: 9}}
);
    
db.anime.find(
    {titulo_original: {$in: [/^A/, ["A"]]}}
);

// 3 consultas com filtros diversos com projeçao
db.anime.find(
    {titulo_original: "Attack on Titan"},
    {_id: 0, titulo_romanizado: 1, pontuacao: 1}
);
    
db.anime.find(
    {pontuacao: {$gt: 9}},
    {_id: 0, titulo_romanizado: 1, pontuacao: 1}
);
    
db.anime.find(
    {titulo_original: {$in: [/^A/, ["A"]]}},
    {_id: 0, titulo_original: 1, pontuacao: 1}
);

// 1 consulta com filtro, projeçao e uso de expressao regular
db.dublador.find(
    {nome_romanizado: {$in: [/^Y/, ["Y"]]}},
    {_id: 0, nome_romanizado: 1, animes_dublados: 1}
);

// 2 consultas com acesso a array de elementos
db.anime.find({tags: {$all: ["tragedia"]}});

// 2 consultas com acesso a estrutura embutida


// 2 consultas diferentes com aggregate
db.anime.aggregate([
   { $match: { pontuacao: {$gt: 5} } },
   { $group: { _id: "$titulo_original", count: {$sum: "$pontuacao"} } },
]);

db.usuario.aggregate([
   { $match: { nickname: "especial" } },
   { $group: { _id: "$nome" } }
]);

// 1 consulta com lookup
db.anime.aggregate([
    {
        $lookup: {
            from: "estudio",
            localField: "estudio_produtor",
            foreignField: "_id",
            as: "Estudio produtor do anime"
        }
    }
]);

// 1 consulta a seu criterio explicando o porque dela
// organizar uma lista com os três animes (limit) com as melhores pontuações em ordem crescente (sort)
db.anime.find().sort({pontuacao:1}).limit(3);
