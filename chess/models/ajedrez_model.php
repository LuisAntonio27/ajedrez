<?php

require_once '../database/querys.php';

function insertMov($data) {
    $consulta = "INSERT into movimientos VALUES(NULL, '" . $data->pieza->jugador . "', '" . $data->pieza->nombre . "', " . $data->i . ", " . $data->j . ")";
    return insert_element($consulta);
}
