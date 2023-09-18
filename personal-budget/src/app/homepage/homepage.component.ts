import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public dataSource: {
    datasets: {
      data: number[],
      backgroundColor: string[],
    }[],
    labels: string[],
  } = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          "#ffcd56",
          "#ff6384",
          "#36a2eb",
          "#fd6b19",
          "#283747",
          "#7D3C98",
          "#FA0404",
          "#2ECC71",
        ],
      },
    ],
    labels: [],
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      for (var i = 0; i < res.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
        console.log('Received data:', res);
      }
      this.createChart();
    });
    (error: any) => {
      console.error('Error fetching data:', error);
    }
  }

  createChart() {
    const canvas = document.getElementById("myChart") as HTMLCanvasElement;
if (canvas) {
    const ctx = canvas.getContext("2d");
    if (ctx) {
        const myPieChart = new Chart(ctx, {
            type: "pie",
            data: this.dataSource,
        });
    }
}

  }
}
