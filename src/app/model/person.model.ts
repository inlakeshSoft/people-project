export class Person {
    name: string;
    age!: number;
    gender!: string;
    document!: File;


    constructor(name: string){
        this.name = name;
    }
}
