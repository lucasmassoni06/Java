package Interface;

public class Sandero implements Carro{

    @Override
    public void acelerar() {
        System.out.println("Acelerando a 50km");
    }

    @Override
    public void freiar() {
    }

    @Override
    public void parar() {
    }
    
}
