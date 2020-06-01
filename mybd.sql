-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2020 at 06:25 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12 mysql -h localhost -u root -p

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


--
-- Database: `Safeway`
--
DROP DATABASE IF EXISTS `Safeway`;
CREATE DATABASE IF NOT EXISTS `Safeway` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `Safeway`;



DROP TABLE IF EXISTS `produtor`;
CREATE TABLE `produtor` (
  `id` int(11) NOT NULL,
  `login` text NOT NULL,
  `senha` text NOT NULL,
  `documento` text NOT NULL,
  `cnpj` text NOT NULL,
  `data_cadastro` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



DROP TABLE IF EXISTS `consumidor`;
CREATE TABLE `consumidor` (
   `id` int(11) NOT NULL,
  `login` text NOT NULL,
  `senha` text NOT NULL,
  `logradouro` text NOT NULL,
  `cpf` text NOT NULL,
  `data_cadastro` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `microempreendedor`;
CREATE TABLE `microempreendedor` (
  `id` int(11) NOT NULL,
  `login` text NOT NULL,
  `senha` text NOT NULL,
  `logradouro` text NOT NULL,
  `documento` text NOT NULL,
  `cnpj` text NOT NULL,
  `data_cadastro` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `entregador`;
CREATE TABLE `entregador` (
  `id` int(11) NOT NULL,
  `login` text NOT NULL,
  `senha` text NOT NULL,
  `logradouro` text NOT NULL,
  `documento` text NOT NULL,
  `placa` text ,
  `transporte` text NOT NULL,
  `cpf` text NOT NULL,
  `data_cadastro` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



---INSERT INTO `carro` (`id`, `marca`, `modelo`, `ano`, `valor`, `data_cadastro`) VALUES
---(1, 'Fiat', 'Uno', 2004, 15000, '2020-04-04 16:16:07'),
---(2, 'VW', 'Fusca', 1964, 6000, '2020-04-04 16:16:29'),
---(3, 'Fiat', 'Toro', 2019, 160000, '2020-04-04 16:16:46'),
---(4, 'Ford', 'Fiesta', 2009, 25000, '2020-04-04 16:17:26');


ALTER TABLE `produtor`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `entregador`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `microempreendedor`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `consumidor`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `microempreendedor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

ALTER TABLE `entregador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;
ALTER TABLE `produtor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;
ALTER TABLE `consumidor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;
