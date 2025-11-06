package Interface;

//Na classe abstrata é possivel colocar metodos que tem ou não implementação
public abstract class SerVivo {

    protected int idade;

    public SerVivo(int idade){
        this.idade = idade;
    }

    public abstract void respirar();

    public void dormir(){
        System.out.println("Dormindo");
    }
}
