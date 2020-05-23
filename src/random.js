export class Random {
    uniform(max, min) {
        return Math.random() * (max - min) + min;
    }
    int(max, min) {
        return Math.floor(this.uniform(max, min));
    }
}

export const random = new Random();
