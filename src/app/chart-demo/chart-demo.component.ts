import { Component, OnInit } from '@angular/core';
import { mudurlukArray } from 'src/assets/arrays';

@Component({
  selector: 'app-chart-demo',
  templateUrl: './chart-demo.component.html',
  styleUrls: ['./chart-demo.component.css'],
})
export class ChartDemoComponent implements OnInit {
  basicData: any;

  basicDataBolge: any;

  basicOptions: any;

  multiAxisData: any;

  chartOptions: any;

  multiAxisOptions: any;

  stackedData: any;

  stackedOptions: any;

  horizontalOptions: any;

  constructor() {}

  ngOnInit() {
    this.basicData = {
      labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz'],
      datasets: [
        {
          label: 'TEİAŞ',
          backgroundColor: '#42A5F5',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'İŞLETMEDE',
          backgroundColor: '#FFA726',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };

    this.basicDataBolge = {
      labels: mudurlukArray,
      datasets: [
        {
          label: 'Toplam Envanter Kayıtları',
          data: mudurlukArray.map(
            () => Math.floor(Math.random() * 10000) + 5500
          ),
          fill: true,
          backgroundColor: '#2eacb2',
          pointBackgroundColor: '#1a7ba7',
        },
      ],
    };

    this.multiAxisData = {
      labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz'],
      datasets: [
        {
          label: 'TEİAŞ',
          backgroundColor: [
            '#EC407A',
            '#AB47BC',
            '#42A5F5',
            '#7E57C2',
            '#66BB6A',
            '#FFCA28',
            '#26A69A',
          ],
          yAxisID: 'y',
          data: [65, 59, 80, 81, 56, 55, 10],
        },
        {
          label: 'ORTAK',
          backgroundColor: '#78909C',
          yAxisID: 'y1',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
        {
          label: 'DİĞER',
          backgroundColor: '#FFCA28',
          yAxisID: 'y1',
          data: [38, 42, 50, 51, 66, 55, 40],
        },
      ],
    };

    this.multiAxisOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
        tooltips: {
          mode: 'index',
          intersect: true,
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            min: 0,
            max: 100,
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false,
            color: '#ebedef',
          },
          ticks: {
            min: 0,
            max: 100,
            color: '#495057',
          },
        },
      },
    };

    this.horizontalOptions = {
      indexAxis: 'y',
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
    };

    this.stackedData = {
      labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz'],
      datasets: [
        {
          type: 'bar',
          label: 'Dataset 1',
          backgroundColor: '#42A5F5',
          data: [50, 25, 12, 48, 90, 76, 42],
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: '#66BB6A',
          data: [21, 84, 24, 75, 37, 65, 34],
        },
        {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: '#FFA726',
          data: [41, 52, 24, 74, 23, 21, 32],
        },
      ],
    };

    this.stackedOptions = {
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      responsive: true,
      scales: {
        xAxes: [
          {
            stacked: true,
          },
        ],
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
    };
  }

  updateChartOptions() {
    this.applyLightTheme();
  }

  applyDarkTheme() {
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef',
          },
        },
      },

      scales: {
        x: {
          ticks: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
        },
        y: {
          ticks: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
        },
      },
    };

    this.horizontalOptions = {
      indexAxis: 'y',
      plugins: {
        legend: {
          labels: {
            color: '#ebedef',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
        },
        y: {
          ticks: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
        },
      },
    };

    this.multiAxisOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef',
          },
        },
        tooltips: {
          mode: 'index',
          intersect: true,
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            min: 0,
            max: 100,
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false,
            color: 'rgba(255,255,255,0.2)',
          },
          ticks: {
            min: 0,
            max: 100,
            color: '#ebedef',
          },
        },
      },
    };

    this.stackedOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#ebedef',
          },
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
        },
        y: {
          stacked: true,
          ticks: {
            color: '#ebedef',
          },
          grid: {
            color: 'rgba(255,255,255,0.2)',
          },
        },
      },
    };
  }

  applyLightTheme() {
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
      responsive: true,
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
    };

    this.horizontalOptions = {
      indexAxis: 'y',
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
    };

    this.multiAxisOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
        tooltips: {
          mode: 'index',
          intersect: true,
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            min: 0,
            max: 100,
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false,
            color: '#ebedef',
          },
          ticks: {
            min: 0,
            max: 100,
            color: '#495057',
          },
        },
      },
    };

    this.stackedOptions = {
      plugins: {
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          stacked: true,
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
    };
  }
}
