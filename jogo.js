var A1=0, A2=0, A3=0, B1=0, B2=0, B3=0, C1=0, C2=0, C3=0;
var row_a, row_b, row_c, col_1, col_2, col_3, dia_p, dia_s;

var player = 0;
var turnos = 0;



document.getElementById("a1").onclick = function () {
    if (A1 == 0) {
        A1 = player * (-2) + 1;
            if (A1) {
                this.innerHTML = "<img src='o.png'>";
            } else {
                this.innerHTML = "<img src='x.png'>"
            }

            ++turnos;

            /** Condições */

            row_a = A1 + A2 + A3;
            col_1 = A1 + B1 + C1;
            dia_p = A1 + B2 + C3;

            var condition = A1 * 3;

            if (row_a == conditioplayer = !player;n || col_1 == condition || dia_p == condition) {

                if (A1 == 3) printa X
                else printa O

                reseta

            } else if (turnos == 9) {
                velha
                alerta
                reseta
            }

        player = !player;   
    }
}

document.getElementById("a2").onclick = function () {
}

document.getElementById("a3").onclick = function () {
}

document.getElementById("b1").onclick = function () {
}

document.getElementById("b2").onclick = function () {
}

document.getElementById("b3").onclick = function () {
}

document.getElementById("c1").onclick = function () {
}

document.getElementById("c2").onclick = function () {
}

document.getElementById("c3").onclick = function () {
}