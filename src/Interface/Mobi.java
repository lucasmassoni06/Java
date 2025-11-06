package Interface;

public class Mobi implements Carro{

    @Override
    public void acelerar() {
        System.out.println("Acelerando a 30Km");
    }

    @Override
    public void freiar() {
    }

    @Override
    public void parar() {
    }
}
