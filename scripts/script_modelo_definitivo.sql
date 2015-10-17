DROP DATABASE tcc;
CREATE DATABASE tcc;

USE tcc;

DROP TABLE IF EXISTS tcc.circuito;
CREATE TABLE tcc.circuito (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome CHAR(255) NOT NULL,
  PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO circuito VALUES (1, 'FASE 1');
INSERT INTO circuito VALUES (2, 'FASE 2');
INSERT INTO circuito VALUES (3, 'Banheiro');
INSERT INTO circuito VALUES (4, 'Cozinha');
INSERT INTO circuito VALUES (5, 'Chuveiro');
INSERT INTO circuito VALUES (6, 'Porao');

DROP TABLE IF EXISTS tcc.usuario;
CREATE TABLE tcc.usuario (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome CHAR(255) NOT NULL,
  email CHAR(255) NOT NULL,
  senha  CHAR(64) NOT NULL,
  PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO usuario VALUES (null, 'admin','admin@gmail.com','admin');

DROP TABLE IF EXISTS tcc.alerta;
CREATE TABLE tcc.alerta (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  id_circuito_fk INTEGER UNSIGNED NOT NULL,
  id_usuario_fk INTEGER UNSIGNED NOT NULL,
  potencia FLOAT NOT NULL,
  habilitar TINYINT NOT NULL,
  nome VARCHAR(255) NOT NULL,
  PRIMARY KEY(id),
  INDEX alerta_fl_usuario(id_usuario_fk),
  INDEX alerta_fk_circuito(id_circuito_fk)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO alerta VALUES (1, 3, 1, 1100, 1, '1100W Alerta Teste');

DROP TABLE IF EXISTS tcc.media_hora_fechada;
CREATE TABLE tcc.media_hora_fechada (
  data_hora TIMESTAMP NOT NULL,
  id_circuito_fk INTEGER UNSIGNED NOT NULL,
  potencia FLOAT NOT NULL DEFAULT 0.0,
  PRIMARY KEY(data_hora, id_circuito_fk),
  INDEX consumo_hora_fk_circuito(id_circuito_fk)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO media_hora_fechada VALUES ('2015-09-12 15:00:00', 1, 110),('2015-09-12 16:00:00', 1, 150),('2015-09-12 17:00:00', 1, 200),('2015-09-12 15:00:00', 2, 280),('2015-09-12 16:00:00', 2, 273) ,('2015-09-12 17:00:00', 2, 183),('2015-09-12 15:00:00', 3, 143),('2015-09-12 16:00:00', 3, 300),('2015-09-12 17:00:00', 3, 152),('2015-09-12 15:00:00', 4, 132),('2015-09-12 16:00:00', 4, 421),('2015-09-12 17:00:00', 4, 192),('2015-09-12 15:00:00', 5, 92),('2015-09-12 16:00:00', 5, 210),('2015-09-12 17:00:00', 5, 67),('2015-09-12 15:00:00', 6, 229),('2015-09-12 16:00:00', 6, 140),('2015-09-12 17:00:00', 6, 123);

DROP TABLE IF EXISTS tcc.media_hora_aberta;
CREATE TABLE tcc.media_hora_aberta (
  data_hora TIMESTAMP NOT NULL,
  id_circuito_fk INTEGER UNSIGNED NOT NULL,
  potencia FLOAT NOT NULL DEFAULT 0.0,
  PRIMARY KEY(id_circuito_fk),
  INDEX consumo_media_hora_fk_circuito(id_circuito_fk)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO media_hora_aberta VALUES ('2015-09-12 15:00:08',1,100),('2015-09-12 15:00:08',2,40),('2015-09-12 15:00:08',3,70),('2015-09-12 15:00:08',4,51),('2015-09-12 15:00:08',5,31),('2015-09-12 15:00:08',6,141);
  
DROP TABLE IF EXISTS tcc.instantaneo;
CREATE TABLE tcc.instantaneo (
  hora TIME NOT NULL,
  id_circuito_fk INTEGER UNSIGNED NOT NULL,
  potencia FLOAT NOT NULL DEFAULT 0.0,
  PRIMARY KEY(hora, id_circuito_fk),
  INDEX consumo_instantaneo_fk_circuito(id_circuito_fk)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO instantaneo VALUES('15:00:08',1,220),('15:00:08',2,110),('15:00:08',3, 440),('15:00:08',4, 167),('15:00:08',5, 563),('15:00:08',6,563);