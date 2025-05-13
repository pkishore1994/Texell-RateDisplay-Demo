import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Rate {
  type: string;
  rateValue: string;
  term: string;
}

@Component({
  selector: 'app-rate-display',
  templateUrl: './rate-display.component.html',
  styleUrls: ['./rate-display.component.css']
})
export class RateDisplayComponent implements OnInit {
  rates: Rate[] = [];
  loading = true;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Rate[]>('https://localhost:5001/api/rates')
      .subscribe({
        next: (data) => {
          this.rates = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load rates.';
          this.loading = false;
        }
      });
  }
}
