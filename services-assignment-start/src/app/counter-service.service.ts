import { Subject } from 'rxjs';

export class CounterService {
    private counterUpdated = new Subject<number>();
    private counter = 0;

    getCounterListener() {
        return this.counterUpdated.asObservable();
    }

    getCounter() {
        return this.counter;
    }

    count() {
        this.counter += 1;
        this.counterUpdated.next(this.counter);
    }
}
