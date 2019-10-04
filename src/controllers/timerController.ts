import {Request, Response} from "express";
export class TimerController {

    constructor() {
    }

    public getStock(req: Request, res: Response) {
        const number = req.params.numbers;
        let sum = 0;
        let counter = 0;
        const msg: any = {};
        whilePromise(sum, number, counter).then(value => {
                msg.singl = value
            }
        ).then(() => parallelPromise(number).then(value => {
                res.status(200).send({
                        single: msg.singl,
                        parallel: value
                    }
                )
            }
        ))
    }
}

function whilePromise(sum: number, number: number, counter: number) {
    let singlePromise: Promise<any>;
    const startTime = Date.now();
    const msg: any = {};
    while (sum < number) {
        singlePromise = new Promise((resolve, reject) => {
            sum = sum + 1;
            setTimeout(() => {
                counter++
                resolve(counter)
            }, 4000)
        })
    }
    return singlePromise.then(() => {
        return new Promise(resolve => {
            const endTime = Date.now();
            const overTime = endTime - startTime;
            resolve( overTime)
        })
    })
}

function parallelPromise(number: number): Promise<any> {
    const startTime = Date.now();
    const primiseeArray: Promise<any>[] = []
    let num: Promise<number>;
    for (let x = 0; x < number; x++) {
        num = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1)
            }, 4000)
        });
        primiseeArray.push(num);
    }
    return Promise.all(primiseeArray).then(value => {
        return new Promise<any>(resolve => {
            const endTime = Date.now();
            const overTime = endTime - startTime;
            resolve( overTime)
        })
    })
}
