<?php
try {
  $pdo = new PDO('mysql:host=localhost;dbname=abm', 'drupal', '');
  echo 'Connected OK';
} catch (PDOException $e) {
  echo $e->getMessage();
}
