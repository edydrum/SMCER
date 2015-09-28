CREATE TABLE tcc_teste.Circuito (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome CHAR(255) NOT NULL,
  PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE tcc_teste.Usuario (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome CHAR(255) NOT NULL,
  email CHAR(255) NOT NULL,
  senha  CHAR(64) NOT NULL,
  PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE tcc_teste.Alerta (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  id_circuito_fk INTEGER UNSIGNED NOT NULL,
  id_usuario_fk INTEGER UNSIGNED NOT NULL,
  potencia FLOAT NOT NULL,
  habilitar TINYINT NOT NULL,
  nome VARCHAR(255) NOT NULL,
  PRIMARY KEY(id),
  INDEX Alerta_FK_Usuario(id_usuario_fk),
  INDEX Alerta_FK_Circuito(id_circuito_fk)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE tcc_teste.Consumo_Hora (
  data_hora TIMESTAMP NOT NULL,
  id_circuito_fk INTEGER UNSIGNED NOT NULL,
  potencia FLOAT NOT NULL DEFAULT 0.0,
  PRIMARY KEY(timestamp, id_circuito_fk),
  INDEX Consumo_Hora_FK_Circuito(id_circuito_fk)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE tcc_teste.Consumo_Hora_Fechada (
  data_hora TIMESTAMP NOT NULL,
  id_circuito_fk INTEGER UNSIGNED NOT NULL,
  potencia FLOAT NOT NULL DEFAULT 0.0,
  PRIMARY KEY(timestamp, id_circuito_fk),
  INDEX Consumo_Hora_Fechada_FK_Circuito(id_circuito_fk)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE tcc_teste.Consumo_Instantaneo (
  hora TIME NOT NULL,
  id_circuito_fk INTEGER UNSIGNED NOT NULL,
  potencia FLOAT NOT NULL DEFAULT 0.0,
  PRIMARY KEY(time, id_circuito_fk),
  INDEX Consumo_Instantaneo_FK_Circuito(id_circuito_fk)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



