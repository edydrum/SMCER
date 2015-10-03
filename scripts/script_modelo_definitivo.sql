CREATE TABLE IF NOT EXISTS tcc.circuito (
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

CREATE TABLE tcc.usuario (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome CHAR(255) NOT NULL,
  email CHAR(255) NOT NULL,
  senha  CHAR(64) NOT NULL,
  PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO usuario VALUES (null, 'admin','admin@gmail.com','admin');

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

CREATE TABLE tcc.consumo_hora (
  data_hora TIMESTAMP NOT NULL,
  id_circuito_fk INTEGER UNSIGNED NOT NULL,
  potencia FLOAT NOT NULL DEFAULT 0.0,
  PRIMARY KEY(data_hora, id_circuito_fk),
  INDEX consumo_hora_fk_circuito(id_circuito_fk)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO consumo_hora VALUES ('2015-09-12 15:00:00', 1, 110),('2015-09-12 16:00:00', 1, 150),('2015-09-12 17:00:00', 1, 200),('2015-09-12 15:00:00', 2, 200),('2015-09-12 16:00:00', 2, 240) ,('2015-09-12 17:00:00', 2, 250),('2015-09-12 15:00:00', 3, 200),('2015-09-12 16:00:00', 3, 240),('2015-09-12 17:00:00', 3, 250),('2015-09-12 15:00:00', 4, 200),('2015-09-12 16:00:00', 4, 240),('2015-09-12 17:00:00', 4, 250),('2015-09-12 15:00:00', 5, 200),('2015-09-12 16:00:00', 5, 240),('2015-09-12 17:00:00', 5, 250),('2015-09-12 15:00:00', 6, 200),('2015-09-12 16:00:00', 6, 240),('2015-09-12 17:00:00', 6, 250);

CREATE TABLE tcc.consumo_media_hora (
  data_hora TIMESTAMP NOT NULL,
  id_circuito_fk INTEGER UNSIGNED NOT NULL,
  potencia FLOAT NOT NULL DEFAULT 0.0,
  PRIMARY KEY(data_hora, id_circuito_fk),
  INDEX consumo_media_hora_fk_circuito(id_circuito_fk)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO consumo_media_shora VALUES ('2015-09-12 15:00:08',1,120),('2015-09-12 15:00:08',2,120),('2015-09-12 15:00:08',3,120),('2015-09-12 15:00:08',4,120),('2015-09-12 15:00:08',5,120),('2015-09-12 15:00:08',6,120);
  
CREATE TABLE tcc.consumo_instantaneo (
  hora TIME NOT NULL,
  id_circuito_fk INTEGER UNSIGNED NOT NULL,
  potencia FLOAT NOT NULL DEFAULT 0.0,
  PRIMARY KEY(hora, id_circuito_fk),
  INDEX consumo_instantaneo_fk_circuito(id_circuito_fk)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO consumo_instantaneo VALUES('15:00:08',1,220),('15:00:08',2,110),('15:00:08',3, 440),('15:00:08',4, 167),('15:00:08',5, 563),('15:00:08',6,563);