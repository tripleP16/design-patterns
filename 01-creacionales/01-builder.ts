/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../helpers/colors.ts";

class Computer {
    public cpu: string = 'cpu not defined';
    public ram: string = 'ram not defined';
    public storage: string = 'storage not defined';
    public gpu?: string;

    displayConfiguration() {
        console.log(`Configuracion de la computadora
            CPU: ${this.cpu}
            RAM: ${this.ram}
            Almacenamiento: ${this.storage}
            GPU: ${this.gpu}
        `)
    }
}


class ComputerBuilder {

    private computer : Computer;

    constructor() {
        this.computer = new Computer();
    }


    setCPU(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    setStorage(storage: string): ComputerBuilder {
        this.computer.storage = storage;
        return this;
    }

    setRAM(ram: string): ComputerBuilder {
        this.computer.ram = ram;
        return this;
    }

    setGPU(gpu?: string): ComputerBuilder {
        this.computer.gpu = gpu;
        return this;
    }

    build(){
        return this.computer;
    }
}


function main() {
    const basicComputer = new ComputerBuilder()
    .setCPU('M3')
    .setGPU('Integrated')
    .setRAM('16gb')
    .setStorage('1tb')
    .build();

    console.log(`%cComputadora Basica: `, COLORS.yellow)
    
    basicComputer.displayConfiguration();




    const gamingComputer = new ComputerBuilder()
    .setCPU('Intel I9')
    .setCPU('AMD ryzen 9')
    .setRAM('32gb')
    .setGPU('NVIDIA 4070')
    .setStorage('3tb')
    .build()

    console.log(`%cComputadora Gaming: `, COLORS.yellow)
    gamingComputer.displayConfiguration()
}

main();