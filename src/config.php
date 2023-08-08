<?php
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'calculator9000';

try {
    $conn = new PDO("mysql:host=$host;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8');
} catch(PDOException $e) {
    die('Erreur de connexion à la base de données : ' . $e->getMessage());
}
?>