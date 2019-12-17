import { fakeAsync, tick } from "@angular/core/testing";

fdescribe("Async Testing examples", () => {
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

            expect(flag).toBeTruthy();

        }, 1000);

        tick(1000);
    }));
});