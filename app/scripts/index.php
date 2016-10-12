<?php
$errors = array();
$data = array();
// Getting posted data and decodeing json
$_POST = json_decode(file_get_contents('php://input'), true);


// response back.
echo json_encode($data);
?>