CREATE TABLE `tcc`.`alerta` (
  `email` char(40) NOT NULL,
  `potencia` int(11) NOT NULL,
  `habilitar` tinyint(4) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `tcc`.`instantanea` (
  `id_circuito` int(11) NOT NULL,
  `hora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `potencia` int(11) NOT NULL,
  PRIMARY KEY (`id_circuito`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `tcc`.`media_hora` (
  `id_circuito` int(11) NOT NULL,
  `hora` int(11) NOT NULL,
  `potencia` int(11) NOT NULL,
  PRIMARY KEY (`id_circuito`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `tcc`.`medicao` (
  `id_circuito` int(11) NOT NULL,
  `dia` date NOT NULL,
  `hora` int(11) NOT NULL,
  `potencia` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_circuito`,`dia`,`hora`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `tcc`.`usuario` (
`id_usuario` int(11) NOT NULL,
`nome` char(80) NOT NULL, 
`senha` char(10) NOT NULL,
`email` char(80) NOT NULL, 
PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;