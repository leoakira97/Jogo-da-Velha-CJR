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
<<<<<<< HEAD

var player = 0; /** Variável que determina a qual jogador o turno pertence. Escolheu-se '0' para xis, '1' para bola. */
var playerImg = ["images/x.png", "images/o.png"];
var playerWin = ["'X' Wins!", "'O' Wins!"];

var turn = 0;

function resetGame ()
{
=======
var playerone = prompt("Nome do primeiro jogador:");
var playertwo = prompt("Nome do segundo jogador:");

var playerxElement = document.getElementById("jogadorx"); /** Atribuicao de elementos para o placar do jogo */
var playeroElement = document.getElementById("jogadoro");
var winningsxElement = document.getElementById("winningsx");
var winningsoElement = document.getElementById("winningso");
var numjogoElement = document.getElementById("numjogo");
document.getElementById("iconvez").style.backgroundImage = "url('images/x.png')";

var player = 0; /** Variável que determina a qual jogador o turno pertence. Escolheu-se '0' para xis, '1' para bola. */
var playerImg = ["images/x.png", "images/o.png"];
var playerWin = [playerone +" Wins!",playertwo +" Wins!"];
var winnings = [0,0];

var turn = 0;
var jogo = 0;

playerxElement.innerHTML = playerone; /** Atribuindo os valores aos elementos do placar */
playeroElement.innerHTML = playertwo;
winningsxElement.innerHTML = winnings[0];
winningsoElement.innerHTML = winnings[1];
numjogoElement.innerHTML = jogo + 1;

function botaoReset() { /** Funcao do botao de reset que apenas reinicia o turno atual */
    resetGame();
    jogo--; /** Compensando o round a mais da funcao resetGame */
    numjogoElement.innerHTML = jogo + 1;
    if (jogo % 2 == 0) { /** if e else para nao alterar o jogador e apenas reiniciar o turno atual */
        player = 0;
    }
    else {
        player = 1;
    }
}


function resetGame () /** Funcao para resetar o jogo, retirando os x`s e o`s do campo e restaurando os valores da matriz inicial */
{
    var images = document.getElementsByTagName('img');
    while(images.length > 0) {
        images[0].parentNode.removeChild(images[0]); /** Retiracao das imagens */
    }
>>>>>>> leo
    for (i = 0; i < 3; ++i)
    {
        for (j = 0; j < 3; ++j)
        {
            document.getElementById(cells[i][j].name).innerHTML = "";
<<<<<<< HEAD
            cells[i][j].value = 0;
        }
    }
    player = 0;
    turn = 0;
=======
            cells[i][j].value = 0; /** Resetando os valores da matriz */
        }
    }
    turn = 0;
    jogo++;
    numjogoElement.innerHTML = jogo + 1; /** Atualizando o round no placar */
>>>>>>> leo
}

/** Quarta parte */
function checkVictory (i, j) /** Checa se uma linha, coluna ou diagonal foi completada */
{
    var row = cells[i][0].value + cells[i][1].value + cells[i][2].value;
    var col = cells[0][j].value + cells[1][j].value + cells[2][j].value;
    var dip = cells[0][0].value + cells[1][1].value + cells[2][2].value;
    var dis = cells[0][2].value + cells[1][1].value + cells[2][0].value;

<<<<<<< HEAD
=======
/** Como utilizamos valores negativos para um jogador e positivo para outro elevamos os valores ao quadrado para saber
quando qualquer um dos dois completou um trio */
>>>>>>> leo
    row *= row;
    col *= col;
    dip *= dip;
    dis *= dis;

    if (row == 9 || col == 9 || dip == 9 || dis == 9)
    {
<<<<<<< HEAD
        alert(playerWin[player]);
=======

        winnings[player]++; /** Checando quem ganhou, alertando os jogadores e atualizando o placar */
        alert(playerWin[player]);
        winningsxElement.innerHTML = winnings[0];
        winningsoElement.innerHTML = winnings[1];


        player = player * (-1) + 1; /** Mudando o jogador */
        if(player == 0) { /** Atualizando a parte do placar que avisa de quem eh o turno */
            document.getElementById("iconvez").style.backgroundImage = "url('images/x.png')";
        }
        else {
            document.getElementById("iconvez").style.backgroundImage = "url('images/o.png')";
        }
>>>>>>> leo
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
<<<<<<< HEAD
    thisCell.innerHTML = "<img src='" + playerImg[player] + "'>";
=======
    thisCell.innerHTML = "<img src='" + playerImg[player] + "'>"; /** Inserindo as imagens de x ou o nas celulas */
>>>>>>> leo
    ++turn;

    if (checkVictory(i, j))
        return;
<<<<<<< HEAD
    
    if (turn === 9) {
        alert("Deu Velha!!");
=======

    if (turn === 9) {
        alert("Deu Velha!!");
        player = player * (-1) + 1;
>>>>>>> leo
        resetGame();
        return;
    }

<<<<<<< HEAD
    player = player * (-1) + 1;
=======
    player = player * (-1) + 1; /** Mudando o jogador */
    if(player == 0) { /** Atualizando aviso de quem possui o turno no placar */
        document.getElementById("iconvez").style.backgroundImage = "url('images/x.png')";
    }
    else {
        document.getElementById("iconvez").style.backgroundImage = "url('images/o.png')";
    }

>>>>>>> leo
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
<<<<<<< HEAD
});
=======
});
>>>>>>> leo
