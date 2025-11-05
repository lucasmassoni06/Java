package Principios;
/**
-Declarar variaveis =>  tipo da variavel + nome da variavel = valor
-Não pode trocar a tipagem da variavel

    int minhaIdade = 18


-Ao usar var o Java inferi o tipo da variavel

    var nomeVariavel = 'Lucas'


-Diferentes tipos de inteiros

    byte => 8 bits  ---  -128 a 127
    short => 16 bits  ---   -32,768 a 32,767
    int => 32 bits  ---   -2,147,483,648 a 2,147,483,647
    long => 64 bits  ---   -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807

-Diferentes tipos de decimais

    float => 32 bits  ---  precisão simples / duas casas decimais (ex: 123,14)
    double => 64 bits  ----  precisão dupla / mais casas decimais

-Representar um único caracter

    char => representa um único caracter (ex: char meuChar = 'a')

-Dar print

    System.out.println("")

-Dic é indicado pelos colchetes
-Não é possivel aumentar a lista

    int[] colecaodeInteiros = {1, 2, 3, 4}
    int[] meusNumeros = new int[5] (fala o tamanho que será a lista, não é possivel inicia-la vazia)

-ArrayList permite fazer uma lista dinamica (que permite adicionar e remover itens)
-import java.util.ArrayList

    ArrayList<String> nomes = new ArrayList<>()
    nomes.add("Lucas")
    nomes.remove(indice)
    System.out.println(nomes.get(indice))

-for

    for(variavel de interação; codição; atribuição) ex:for(int i = 0; i < nomes.size(); i++){} 
    for(String nome : nomes)  = pyhton for nome in nomes

-Casting transformar o valor - double para int 

    double resultado = 0.0 
    int resultadoInt = (int) resultado

    String meuString = "10"
    int meuInt2 = Integer.parseInt(meuString)

    String minhaString = String.valueOf(meuInt2)

-Compilando

    Terminal
        javac Nome_do_arquivo.java (compila)
        java nome_do_arquivo (executa)
ll

*/