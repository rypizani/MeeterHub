CREATE TABLE filme (
    id_filme INT NOT NULL AUTO_INCREMENT,
    nome varchar(30) NOT NULL,
    PRIMARY KEY(id_filme)
);

CREATE TABLE ator (
    id_ator INT NOT NULL AUTO_INCREMENT,
    nome varchar(30) NOT NULL,
    PRIMARY KEY(id_ator)
);

CREATE TABLE genero (
    id_genero INT NOT NULL AUTO_INCREMENT,
    nome varchar(30) NOT NULL,
    PRIMARY KEY(id_genero)
);

CREATE TABLE distribuidora (
    id_distribuidora INT NOT NULL AUTO_INCREMENT,
    nome varchar(30) NOT NULL,
    PRIMARY KEY(id_distribuidora)
);

CREATE TABLE pais (
    id_pais INT NOT NULL AUTO_INCREMENT,
    nome varchar(30) NOT NULL,
    PRIMARY KEY(id_pais)
);

CREATE TABLE alocacoes (
    id_alocacoes INT NOT NULL AUTO_INCREMENT,
    nome varchar(30) NOT NULL,
    PRIMARY KEY(id_alocacoes)
);

CREATE TABLE login (
    id_login INT NOT NULL AUTO_INCREMENT,
    nome varchar(30) NOT NULL,
    tp_login varchar(1) NOT NULL, -- (1 - Admin), (0 - Usuário)
    password varchar(64) NOT NULL
    PRIMARY KEY(id_login)
);

CREATE TABLE filme_ator (
    id_filme_ator INT NOT NULL AUTO_INCREMENT,
    id_filme INT NOT NULL,
    id_ator INT NOT NULL,
    PRIMARY KEY(id_filme_ator),
    CONSTRAINT id_filme_ator_PK FOREIGN KEY (id_filme) REFERENCES filme(id_filme) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT id_atores_PK FOREIGN KEY (id_ator) REFERENCES ator(id_ator) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE filme_genero (
    id_filme_genero INT NOT NULL AUTO_INCREMENT,
    id_filme INT NOT NULL,
    id_genero INT NOT NULL,
    PRIMARY KEY(id_filme_genero),
    CONSTRAINT id_filme_genero_PK FOREIGN KEY (id_filme) REFERENCES filme(id_filme) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT id_genero_PK FOREIGN KEY (id_genero) REFERENCES genero(id_genero) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE filme_distribuidora (
    id_filme_distribuidora INT NOT NULL AUTO_INCREMENT,
    id_filme INT NOT NULL,
    id_distribuidora INT NOT NULL,
    PRIMARY KEY(id_filme_distribuidora),
    CONSTRAINT id_filme_distribuidora_PK FOREIGN KEY (id_filme) REFERENCES filme(id_filme) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT id_distribuidora_PK FOREIGN KEY (id_distribuidora) REFERENCES distribuidora(id_distribuidora) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE filme_alocacoes ( 
    id_filme_alocacoes INT NOT NULL AUTO_INCREMENT, 
    id_filme INT NOT NULL, 
    id_alocacoes INT NOT NULL, 
    PRIMARY KEY(id_filme_alocacoes), 
    CONSTRAINT id_filme_alocacoes_PK FOREIGN KEY (id_filme) REFERENCES filme(id_filme) ON DELETE CASCADE ON UPDATE CASCADE, 
    CONSTRAINT id_alocacoes_PK FOREIGN KEY (id_alocacoes) REFERENCES alocacoes(id_alocacoes) ON DELETE CASCADE ON UPDATE CASCADE 
);

ALTER TABLE filme 
ADD COLUMN id_pais INT NOT NULL, 
ADD CONSTRAINT fk_filme_pais FOREIGN KEY (id_pais) REFERENCES pais(id_pais);

ALTER TABLE login
ADD password varchar(64);
