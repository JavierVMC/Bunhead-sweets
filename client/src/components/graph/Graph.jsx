import CanvasJSReact from '../../services/graphs/canvasjs.react';

export const Graph = () => {
  const CanvasJSChart = CanvasJSReact.CanvasJSChart;

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: 'light2', //"light1", "dark1", "dark2"
    title: {
      text: 'Simple Column Chart with Index Labels'
    },
    axisY: {
      includeZero: true
    },
    data: [
      {
        type: 'column', //change type to bar, line, area, pie, etc
        //indexLabel: "{y}", //Shows y value on all Data Points
        indexLabelFontColor: '#5A5757',
        indexLabelPlacement: 'outside',
        dataPoints: [
          { x: 10, y: 71 },
          { x: 20, y: 55 },
          { x: 30, y: 50 },
          { x: 40, y: 65 },
          { x: 50, y: 71 },
          { x: 60, y: 68 },
          { x: 70, y: 38 },
          { x: 80, y: 92, indexLabel: 'Highest' }
        ]
      }
    ]
  };

  return (
    <div className="container">
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};
