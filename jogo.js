/** Matriz bidimensional para armazenar valores de cada célula e nome identificador */
/** Valor 0: célula vazia; Valor 1: célula com 'X'; Valor -1: célula com 'O'. */
var cells = [
    [
        { "name": "a1",
        "value": 0
        },
        { "name": "a2",
        "value": 0
        },
        { "name": "a3",
        "value": 0
        }
    ],
    [
        { "name": "b1",
        "value": 0
        },
        { "name": "b2",
        "value": 0
        },
        { "name": "b3",
        "value": 0
        }
    ],
    [
        { "name": "c1",
        "value": 0
        },
        { "name": "c2",
        "value": 0
        },
        { "name": "c3",
        "value": 0
        }
    ]
];

var player = 0; /** Variável que determina a qual jogador o turno pertence. Escolheu-se '0' para xis, '1' para bola. */
var playerImg = ["images/x.png", "images/o.png"];
var playerWin = ["'X' Wins!", "'O' Wins!"];

var turn = 0;

function resetGame ()
{
    for (i = 0; i < 3; ++i)
    {
        for (j = 0; j < 3; ++j)
        {
            document.getElementById(cells[i][j].name).innerHTML = "";
            cells[i][j].value = 0;
        }
    }
    player = 0;
    turn = 0;
}

/** Quarta parte */
function checkVictory (i, j) /** Checa se uma linha, coluna ou diagonal foi completada */
{
    var row = cells[i][0].value + cells[i][1].value + cells[i][2].value;
    var col = cells[0][j].value + cells[1][j].value + cells[2][j].value;
    var dip = cells[0][0].value + cells[1][1].value + cells[2][2].value;
    var dis = cells[0][2].value + cells[1][1].value + cells[2][0].value;

    row *= row;
    col *= col;
    dip *= dip;
    dis *= dis;

    if (row == 9 || col == 9 || dip == 9 || dis == 9)
    {
        alert(playerWin[player]);
        resetGame();
        return 1;
    }

    return 0;
}

/** Terceira parte */
function updateCell (i, j) /** Atualiza a célula clicada, verifica se houve vitória ou empate e troca de jogador */
{
    cells[i][j].value = (-2) * player + 1;
    var thisCell = document.getElementById(cells[i][j].name);
    thisCell.innerHTML = "<img src='" + playerImg[player] + "'>";
    ++turn;

    if (checkVictory(i, j))
        return;
    
    if (turn === 9) {
        alert("Deu Velha!!");
        resetGame();
        return;
    }

    player = player * (-1) + 1;
}

/** Segunda parte */
function detectCell (id_name) /** Busca linear simples para achar a célula correspondente ao identificador recebido */
{
    for (i = 0; i < 3; ++i)
    {
        for (j = 0; j < 3; ++j) {
            if (cells[i][j].name === id_name && cells[i][j].value === 0) {
                updateCell(i, j);
                return;
            }
        }
    }
}

/** Primeira parte */
document.addEventListener("click", function(e) { /** Envia o identificador para a função, para determinar se é uma célula */
    e = e;
    detectCell(e.target.id);
});