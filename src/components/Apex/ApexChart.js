import React, { useState } from 'react';
import Chart from 'react-apexcharts';

export default function ApexChart() {

    const [data, setData] = useState({
            series: [44, 55, 67, 83],
            options: {
              chart: {
                height: 350,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    name: {
                      fontSize: '22px',
                    },
                    value: {
                      fontSize: '16px',
                    },
                    total: {
                      show: true,
                      label: 'Total'
                    }
                  }
                }
              },
              labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
            }
        })

    const style = {
        width: '308px',
        height: '176px'
    }

  return (
    <div id="chart" style={style}>
        <Chart options={data.options} series={data.series} type="radialBar" height={350} />
    </div>
  )
}






