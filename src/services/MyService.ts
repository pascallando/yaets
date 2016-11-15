export class MyService {

    constructor() {
    }

    add(a: number, b: number): number {
        return a+b
    }

    say(str: string): void {
        console.log(str)
    }
}