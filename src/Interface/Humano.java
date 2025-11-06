package Interface;

// o extends faz com que a classe Humano herde as caracteristicas da classe Servivo
public class Humano extends SerVivo{

    public Humano(){
        super(42);
    }

    @Override
    public void respirar() {
        System.out.println(this.idade);
        System.out.println("Respirando");
    }
    
}
