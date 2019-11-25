CREATE DATABASE greetings;
USE greetings;

CREATE TABLE `greetings` (
  `id` Int( 50 ) AUTO_INCREMENT NOT NULL,
  `Mother_greet` VARCHAR( 255) NOT NULL,
  `Father_greet` VARCHAR( 255 ) NOT NULL,
  `Son_greet` VARCHAR( 255 ) NOT NULL,
  `Daughter_greet` VARCHAR( 255 ) NOT NULL,
  `SonInLaw_greet` VARCHAR( 255 ) NOT NULL,
  `DaughterInLaw_greet` VARCHAR( 255 ) NOT NULL,
  `GrandMa_greet` VARCHAR( 255 ) NOT NULL,
  `GrandPa_greet` VARCHAR( 255 ) NOT NULL,
  `Wifey_greet` VARCHAR( 255 ) NOT NULL,
  `Husbund_greet` VARCHAR( 255 ) NOT NULL,
  `Aniversery_greet` VARCHAR( 255 ) NOT NULL,
  `Girlfriend_greet` VARCHAR( 255 ) NOT NULL,
  `Boyfriend_greet` VARCHAR( 255 ) NOT NULL,
  
    PRIMARY KEY ( `id` ) 
);