import express, {Request, Response} from "express";
import {TimerController} from "../controllers/timerController"


export class Routes {
    public stockController: TimerController = new  TimerController()
    public routes(app: express.Application): void {
        app.route("/")
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: "GET request successfulll!!!!"
                });
            });
        // timers
        app.route("/timers/:numbers")
            .get(this.stockController.getStock.bind(this.stockController))

    }

}
