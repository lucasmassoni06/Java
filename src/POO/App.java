package POO;

public class App {
    
                    //esse main sempre será o primeiro metodo que será acessado responsavel por começar tudo
    public static void main(String[] args) throws Exception {
        //Iphone 12, tela 6,1', 256gb
        //Galaxy 20, tela 6,9', 256gb
        //Xiomi 11, tela 6,81', 128gb
        //<tipoVariavel> nomeVariavel = valor;

        //Declarando um objeto do tipo celular = Instanciando um novo objeto
        Celular celularA = new Celular();
        celularA.nome = "Iphone 12";
        celularA.tamanhoTela = 6.1f; // o 'f' é obrigatorio por conta de ser float
        celularA.espacoArmazenamento = 256;
        celularA.sistemaOperacional = "IOS";


        Celular celularB = new Celular();
        celularB.nome = "Galaxy 20";
        celularB.tamanhoTela = 6.9f;
        celularB.espacoArmazenamento = 256;
        celularB.sistemaOperacional = "Android";

        Celular celularC;//Declarando um celular chamado celularC
        celularC = new Celular();
        celularC.nome = "Xiomi 11";
        celularC.tamanhoTela = 6.81f;
        celularC.espacoArmazenamento = 128;
        celularC.sistemaOperacional = "Android";




        System.out.format("Celular %s com tela de %.1f, com %dgb e SO %s\n", celularA.nome, celularA.tamanhoTela, celularA.espacoArmazenamento, celularA.sistemaOperacional );
        System.out.format("Celular %s com tela de %.1f, com %dgb e SO %s\n", celularB.nome, celularB.tamanhoTela, celularB.espacoArmazenamento, celularB.sistemaOperacional );
        System.out.format("Celular %s com tela de %.1f, com %dgb e SO %s", celularC.nome, celularC.tamanhoTela, celularC.espacoArmazenamento, celularC.sistemaOperacional );
    }
}
