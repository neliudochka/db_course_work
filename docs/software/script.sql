-- MySQL Script generated by MySQL Workbench
-- Wed Dec 14 21:51:04 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Section`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Section` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `Project_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Section_Project1_idx` (`Project_id` ASC) VISIBLE,
  CONSTRAINT `fk_Section_Project1`
    FOREIGN KEY (`Project_id`)
    REFERENCES `mydb`.`Project` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Grant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Grant` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `slug` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `slug_UNIQUE` (`slug` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `slug` VARCHAR(45) NOT NULL,
  `Grant_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Grant_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `slug_UNIQUE` (`slug` ASC) VISIBLE,
  INDEX `fk_Role_Grant1_idx` (`Grant_id` ASC) VISIBLE,
  CONSTRAINT `fk_Role_Grant1`
    FOREIGN KEY (`Grant_id`)
    REFERENCES `mydb`.`Grant` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `login` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Member` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Project_id` INT NOT NULL,
  `Role_id` INT NOT NULL,
  `User_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Project_id`, `Role_id`, `User_id`),
  INDEX `fk_Member_Project1_idx` (`Project_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_Member_Role1_idx` (`Role_id` ASC) VISIBLE,
  INDEX `fk_Member_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_Member_Project1`
    FOREIGN KEY (`Project_id`)
    REFERENCES `mydb`.`Project` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Member_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `mydb`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Member_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mydb`.`User` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Executor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Executor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Member_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Member_id`),
  INDEX `fk_Executor_Member1_idx` (`Member_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_Executor_Member1`
    FOREIGN KEY (`Member_id`)
    REFERENCES `mydb`.`Member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Task`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Task` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(100) NULL,
  `deadline` DATETIME NULL,
  `Section_id` INT NOT NULL,
  `Executor_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Executor_id`),
  INDEX `fk_Task_Section1_idx` (`Section_id` ASC) VISIBLE,
  INDEX `fk_Task_Executor1_idx` (`Executor_id` ASC) VISIBLE,
  CONSTRAINT `fk_Task_Section1`
    FOREIGN KEY (`Section_id`)
    REFERENCES `mydb`.`Section` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Task_Executor1`
    FOREIGN KEY (`Executor_id`)
    REFERENCES `mydb`.`Executor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Attachment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Attachment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `path` VARCHAR(45) NOT NULL,
  `fileType` VARCHAR(45) NOT NULL,
  `Task_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Attachment_Task_idx` (`Task_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_Attachment_Task`
    FOREIGN KEY (`Task_id`)
    REFERENCES `mydb`.`Task` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;