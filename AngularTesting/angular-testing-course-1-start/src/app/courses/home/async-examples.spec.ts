import { fakeAsync, tick, flush, flushMicrotasks } from "@angular/core/testing";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

describe("Async Testing examples", () => {
    it("Async test with jazmine done", (done: DoneFn)=> {
        let flag = false;

        setTimeout(() => {
            flag = true;

            expect(flag).toBeTruthy();

            done();
        }, 1000);
    });

    it("Async test with setTimeOut and fakeAsync()", fakeAsync(() => {
        let flag = false;

        setTimeout(() => {
            flag = true;
        }, 1000);

        //tick(1000);

        //execute all the timers that are pending
        flush();

        expect(flag).toBeTruthy();
    }));

    it('Asynchronous test example - plain promise', fakeAsync(() => {
      let test = false;

      console.log('Creating promise');

      Promise.resolve().then(() => {
        console.log('Promise evaluated successfully');

        test = true;

        return Promise.resolve();
      })
        .then(() => {
          console.log('Second promise evaluated successfully');
        });

      flushMicrotasks();

      expect(test).toBeTruthy();
    }));

    it('Asynchronous test example - Promises + setTimeout()', fakeAsync(() => {
      let counter = 0;

      Promise.resolve()
        .then(() => {
          counter +=10;

          setTimeout(() => {
            counter += 1;
          }, 1000);
      });

      expect(counter).toBe(0);

      flushMicrotasks();

      expect(counter).toBe(10);

      flush();

      expect(counter).toBe(11);

    }));

    it('Asynchronous test example - Observables', fakeAsync(() => {
      let test = false;

      console.log('Creating the observable');

      const test$ = of(test)
            .pipe(delay(1000));

      test$.subscribe(() => {
        test = true;
      });

      tick(1000);

      console.log('Running test assertions');

      expect(test).toBe(true);

    }));
});
