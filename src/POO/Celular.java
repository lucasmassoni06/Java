package POO;

/*
Um objeto é um 'trem' que pode ser: sentido e descrito através de suas caracteristicas, podendo ter estados e comportamentos

classe = molde para criar objeto e ações (funçoes) que o objetos pode fazer

as caracteristicas do objetos = atributos
 */

public class Celular {
    //Caracteristicas --> Atributos
    String nome;
    String sistemaOperacional;
    int espacoArmazenamento;
    float tamanhoTela;

}

//package (pacotes) -> são feitos para organizar as classes e interfaces que podem acessar ou não

/*public/private (modificadores de acesso)

    public -> acessivel de qualquer lugar
    default () -> todos que estiverem extamante no mesmo package conseguem acessar
    private -> só é possivel acessar na mesma classe
    protected -> só é possivel acessar no mesmo pacote

*/