import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const state = {
  options: {
    responsive: [
      {
        breakpoint: undefined,
        options: {}
      }
    ],
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
      id: 'basic-bar',
      width: '100%',
      height: '100%'
    },
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'rounded',
      colors: undefined,
      width: 2
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [
        '01 Jan',
        '02 Jan',
        '03 Jan',
        '04 Jan',
        '05 Jan',
        '06 Jan',
        '07 Jan'
      ]
    },
    dropShadow: {
      enabled: true,
      top: 0,
      left: 0,
      blur: 3,
      opacity: 0.5
    },
    fill: {
      type: 'gradient',
      color: '#bfdbfe'
    },
    yaxis: { show: false }
  },
  series: [
    {
      name: 'Followers',
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]
};

export default function PlaceholderChart() {
  return (
    <>
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        height="100%"
      />
    </>
  );
}
