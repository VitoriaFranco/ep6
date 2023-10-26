function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = "<h3> bem vindo <h3/>" + nome_variavel;
    }
    else{
        alert("Nome não atribuido, preencha o nome.");
        inclui_nome();
    }
}

function funcao_resposta(){
    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');
    var resp5 = document.querySelector('input[name="quest_5"]:checked');
    var resp6 = document.querySelector('input[name="quest_6"]:checked');
    var resp7 = document.querySelector('input[name="quest_7"]:checked');
    var resp8 = document.querySelector('input[name="quest_8"]:checked');

    var contador = 0;


    if(resp1 && resp2 && resp3 && resp4 && resp5 && resp6 && resp7 && resp8){
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "Correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_1").innerHTML =  " <img src='lei-coulomb.webp'/> Errada. Explicação: Usando a equação de Coulomb:F = k·q¹·q² / r²  Suponha que K = 9 x 10⁹ Nm²/C² (constante eletrostática no vácuo). F = (9 x 10⁹ Nm²/C²)·(3C)·(2C)/(4m)²  F = 54 x 10⁹ Nm²/C²/16m²  F = 54 x 10⁹/16 N  F = 3.375 x 10⁹ N Portanto, a força elétrica entre essas partículas é 3.375 x 10⁹ N, que é aproximadamente 6N, portanto a resposta correta é a letra B!"; 

        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada, Explicação: Usando a mesma equação, mas rearranjando-a para encontrar a carga q2:  q2 = F·r²/k·q¹ Suponha que k = 9 x 10⁹ Nm²/C² (constante eletrostática no vácuo). q2 = (12N)·(2m)²/(9 x 10⁹ Nm²/C²)·(4C)  q2 = 48N·4m²/36 x 10⁹ Nm²/C·C  q2 = 192N·m²/36 x 10⁹N·m²/C  q2 = 192/36 C  q2 = 5.333 x 10-⁸ C  Portanto, a carga q2 é de 2C, portanto a resposta correta é a letra B!";

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada, Explicação: Quando a distância entre as partículas é reduzida para um quarto do valor original, a nova força F' pode ser calculada usando a equação de Coulomb:  F' =  k·q¹·q²/(r/4)²  F' =  k·q¹·q²/(r²/16)  F' = 16·k·q¹·q²/r²  F' = 16·16N  F' = 256N  Portanto, a nova força entre essas partículas é 64N portanto a resposta correta é a letra D!";

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada, <img src='calculo-exercicio1.webp'/> Quando as cargas se encontram a uma distância d, a força elétrica entre elas vale F, desse modo, ao triplicarmos a distância entre as cargas, estaremos em uma distância 3d. De acordo com o cálculo, a força elétrica entre as cargas deverá diminuir nove vezes, portanto a resposta correta é a letra B.";

        }if(resp5.value == "correta"){
            document.getElementById("resp_correta_5").innerHTML = "Correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "Errada, A alternativa correta é a letra C, que é o próprio enunciado da lei de Coulomb. Segundo essa lei, a força elétrica é proporcional ao produto das cargas e é inversamente proporcional ao quadrado da distância entre elas.";

        }
        if(resp6.value == "correta"){
            document.getElementById("resp_correta_6").innerHTML = "Correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "Errada, Alternativa A. De acordo com a lei de Coulomb, a força elétrica é proporcional às cargas elétricas das partículas e inversamente proporcional ao quadrado da distância entre as partículas.!";

        }
        if(resp7.value == "correta"){
            document.getElementById("resp_correta_7").innerHTML = "Correta!";
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_7").innerHTML = "Errada, Alternativa B. De acordo com a lei de Coulomb, duas cargas elétricas de mesmo sinal apresentam força elétrica repulsiva e cargas elétricas de sinais opostos apresentam força elétrica atrativa.";

        }
        if(resp8.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "Correta!";
                        contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "Errada, Alternativa E I. O campo elétrico é medido em Newton por Coulomb. (Correta) II. A carga elétrica é medida em Coulomb. (Correta) III. A força elétrica é medida em Newton por Joule. (Incorreta) A unidade de medida da força elétrica é o Newton. IV. A distância é medida em metros. (Correta)";

        }
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";
    }
    else{
        alert("não deixe questões em branco!");
    }

       

}

