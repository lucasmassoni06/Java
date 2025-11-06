package Interface;

public class Main {
    public static void main(String[] args) {
        Carro meuCarro = new Sandero();
        Carro meuCarro2 = new Mobi();

        SerVivo meuSer = new Humano();
        meuSer.respirar();

        meuCarro.acelerar();
        meuCarro2.acelerar();

        Carro meuErroFurrado = null;

/*Tipos de exceção: 
    NullPointerException
    ArrayIndexOutOfBoundsException
    RuntimeException
    IOException
    ArithmeticException
*/
        try{
            meuErroFurrado.acelerar();
        } catch (NullPointerException exception){
            System.out.println("Vender Carro");
        }

    }
}