import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Timer} from '../../types/type';


@Component({
    selector: 'app-continer',
    templateUrl: './continer.component.html',
    styleUrls: ['./continer.component.scss']
})
export class ContinerComponent implements OnInit {
    public loading: boolean;
    public timers: Timer;

    constructor(
        private api: ApiService,
    ) {
    }

    ngOnInit() {
        this.loading = false;
    }

    getTimes(event) {
        this.loading = true;
        this.api.getTimers(event as number).subscribe((value => {
            this.timers = value;
            this.loading = false;

        }));
    }
}
