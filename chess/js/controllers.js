var app = angular.module('myApp', []);
app.controller(
        'chessCtrl',
        function ($scope, $http) {
            $scope.tablero = [];
            var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
            for (var i = 0; i < 8; i++) {
                $scope.tablero[i] = [];
                for (var j = 0; j < 8; j++) {
                    var color = (((i + j) % 2) === 0) ? 'blanco' : 'negro';
                    $scope.tablero[i][j] = {
                        letra: letras[j],
//                        numero: (i + 1),
                        color: color,
                        i: i,
                        j: j
                    };
                }
            }
            var piezas = [
                'k',
                'q',
                'r',
                'n',
                'b',
                'p'
            ];
            $scope.tablero[6][0].pieza = {
                jugador: 'd',
                nombre: piezas[5]
            };
            $scope.tablero[6][1].pieza = {
                jugador: 'd',
                nombre: piezas[5]
            };
            $scope.tablero[6][2].pieza = {
                jugador: 'd',
                nombre: piezas[5]
            };
            $scope.tablero[6][3].pieza = {
                jugador: 'd',
                nombre: piezas[5]
            };
            $scope.tablero[6][4].pieza = {
                jugador: 'd',
                nombre: piezas[5]
            };
            $scope.tablero[6][5].pieza = {
                jugador: 'd',
                nombre: piezas[5]
            };
            $scope.tablero[6][6].pieza = {
                jugador: 'd',
                nombre: piezas[5]
            };
            $scope.tablero[6][7].pieza = {
                jugador: 'd',
                nombre: piezas[5]
            };
            $scope.tablero[7][0].pieza = {
//                jugador: 'l',
                jugador: 'd',
                nombre: piezas[2]
            };
            $scope.tablero[7][7].pieza = {
                jugador: 'd',
                nombre: piezas[2]
            };
            $scope.tablero[7][1].pieza = {
                jugador: 'd',
                nombre: piezas[3]
            };
            $scope.tablero[7][6].pieza = {
                jugador: 'd',
                nombre: piezas[3]
            };
            $scope.tablero[7][2].pieza = {
                jugador: 'd',
                nombre: piezas[4]
            };
            $scope.tablero[7][5].pieza = {
                jugador: 'd',
                nombre: piezas[4]
            };
            $scope.tablero[7][3].pieza = {
                jugador: 'd',
                nombre: piezas[0]
            };
            $scope.tablero[7][4].pieza = {
                jugador: 'd',
                nombre: piezas[1]
            };

            $scope.tablero[1][0].pieza = {
                jugador: 'l',
                nombre: piezas[5]
            };
            $scope.tablero[1][1].pieza = {
                jugador: 'l',
                nombre: piezas[5]
            };
            $scope.tablero[1][2].pieza = {
                jugador: 'l',
                nombre: piezas[5]
            };
            $scope.tablero[1][3].pieza = {
                jugador: 'l',
                nombre: piezas[5]
            };
            $scope.tablero[1][4].pieza = {
                jugador: 'l',
                nombre: piezas[5]
            };
            $scope.tablero[1][5].pieza = {
                jugador: 'l',
                nombre: piezas[5]
            };
            $scope.tablero[1][6].pieza = {
                jugador: 'l',
                nombre: piezas[5]
            };
            $scope.tablero[1][7].pieza = {
                jugador: 'l',
                nombre: piezas[5]
            };
            $scope.tablero[0][0].pieza = {
                jugador: 'l',
                nombre: piezas[2]
            };
            $scope.tablero[0][7].pieza = {
                jugador: 'l',
                nombre: piezas[2]
            };
            $scope.tablero[0][1].pieza = {
                jugador: 'l',
                nombre: piezas[3]
            };
            $scope.tablero[0][6].pieza = {
                jugador: 'l',
                nombre: piezas[3]
            };
            $scope.tablero[0][2].pieza = {
                jugador: 'l',
                nombre: piezas[4]
            };
            $scope.tablero[0][5].pieza = {
                jugador: 'l',
                nombre: piezas[4]
            };
            $scope.tablero[0][3].pieza = {
                jugador: 'l',
                nombre: piezas[0]
            };
            $scope.tablero[0][4].pieza = {
                jugador: 'l',
                nombre: piezas[1]
            };

            var casilla_aux = null;
            $scope.mover_pieza = function (casilla) {
                if (casilla_aux === null && casilla.pieza !== null) {
                    casilla_aux = casilla;
                } else {
                    casilla.pieza = angular.copy(casilla_aux.pieza);
//                    console.log(casilla.pieza);
//                    console.log(casilla.i);
//                    console.log(casilla.j);
                    $http({
                        method: "POST",
                        url: "controllers/ajedrez.php",
                        data:{
                            pieza: casilla.pieza,
                            nombre: casilla.nombre,
                            i: casilla.i,
                            j: casilla.j
                        }
                    }).then(function mySuccess(response) {
                        console.log(response.data);
                    }, function myError(response) {
                        console.log(response.statusText);
                    });
                    $scope.tablero[casilla_aux.i][casilla_aux.j].pieza = null;
                    casilla_aux = null;
                }
            };
        }
);