/*
-- Query: SELECT * FROM libros.libro
LIMIT 0, 50000
*/

CREATE TABLE IF NOT EXISTS `libros`.`libro` (
  `id_libro` INT(11) NOT NULL AUTO_INCREMENT COMMENT '',
  `titulo` VARCHAR(100) NULL DEFAULT NULL COMMENT '',
  `autor` VARCHAR(100) NULL DEFAULT NULL COMMENT '',
  `isbn` VARCHAR(11) NULL DEFAULT NULL COMMENT '',
  `numero_paginas` INT(11) NULL DEFAULT NULL COMMENT '',
  `genero` VARCHAR(100) NULL DEFAULT NULL COMMENT '',
  PRIMARY KEY (`id_libro`)  COMMENT '')
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8

INSERT INTO `libro` (`id_libro`,`titulo`,`autor`,`isbn`,`numero_paginas`,`genero`) VALUES (1,'Cien años de soledad','Gabriel Garcìa Márquez','7585241145',785,'Novela');
INSERT INTO `libro` (`id_libro`,`titulo`,`autor`,`isbn`,`numero_paginas`,`genero`) VALUES (2,'Harry Potter','J. K. Rowling','1254125856',852,'Fantasía');
INSERT INTO `libro` (`id_libro`,`titulo`,`autor`,`isbn`,`numero_paginas`,`genero`) VALUES (3,'El principito','Antoine De Saint Exupéry','8565322445',635,'Novela');
INSERT INTO `libro` (`id_libro`,`titulo`,`autor`,`isbn`,`numero_paginas`,`genero`) VALUES (4,'El ingenioso hidalgo Don Quijote de la Mancha','Miguel de Cervantes Saavedra','9635645278',4523,'Novela');
INSERT INTO `libro` (`id_libro`,`titulo`,`autor`,`isbn`,`numero_paginas`,`genero`) VALUES (5,'El diario de Ana Frank','Anne Frank','2356452487',425,'Autobiografía');
