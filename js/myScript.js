// const targetGrid = document.querySelector("#targetId");
// const actionGrid = document.querySelector("#actionId");

// console.log(targetGrid, actionGrid);

// let aa = targetGrid.getBoundingClientRect();

// console.log(aa);

// actionGrid.style.minHeight = targetGrid.getBoundingClientRect().height + "px";
// actionGrid.style.maxHeight = targetGrid.getBoundingClientRect().height + "px";
// // actionGrid.style.backgroundColor = "red";
// window.addEventListener("resize", () => {
//   actionGrid.style.minHeight = targetGrid.getBoundingClientRect().height + "px";
//   actionGrid.style.maxHeight = targetGrid.getBoundingClientRect().height + "px";
//   console.log(targetGrid.getBoundingClientRect().height);
// });

let delayed = false;

const ctx1 = document.getElementById("myChart1").getContext("2d");
const myChart1 = new Chart(ctx1, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Actual",
        data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
        backgroundColor: ["#727CF5"],
        // backgroundColor: [
        //   "rgba(255, 99, 132, 0.6)",
        //   "rgba(54, 162, 235, 0.6)",
        //   "rgba(255, 206, 86, 0.6)",
        //   "rgba(75, 192, 192, 0.6)",
        //   "rgba(153, 102, 255, 0.6)",
        //   "rgba(255, 159, 64, 0.6)",
        // ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 1,
        tension: 0.4,
      },
      {
        label: "Projection",
        data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
        backgroundColor: ["#E3E6E8"],
        // backgroundColor: [
        //   "rgba(255, 99, 132, 0.6)",
        //   "rgba(54, 162, 235, 0.6)",
        //   "rgba(255, 206, 86, 0.6)",
        //   "rgba(75, 192, 192, 0.6)",
        //   "rgba(153, 102, 255, 0.6)",
        //   "rgba(255, 159, 64, 0.6)",
        // ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 2,
      },
    ],
  },
  options: {
    hoverRadius: 0,
    hoverBackgroundColor: "black",
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            // console.log(context.dataset, context);
            let label = context.dataset.label;
            let value = context.raw;
            return `${label}: $${value}k`;
          },
        },
      },
    },
    scales: {
      y: {
        grid: {
          color: "#8080802e",

          // display: false,
        },
        // beginAtZero: true,
        ticks: {
          callback: (value) => {
            return `$${value}k`;
          },
        },
      },
      x: {
        grid: {
          color: "#8080802e",

          // display: false,
        },
      },
    },
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
  },
});

//
//
//

const DISPLAY = true;
const BORDER = true;
const CHART_AREA = true;
const TICKS = true;

const ctx2 = document.getElementById("myChart2").getContext("2d");
const myChart2 = new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

    datasets: [
      {
        label: "Current Week",
        data: [10, 20, 15, 25, 20, 30, 20],
        backgroundColor: ["#727CF5"],
        // backgroundColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 4,
        borderColor: "#727CF5",
        tension: 0.4,
      },
      {
        label: "Previous Week",
        data: [0, 15, 10, 30, 15, 35, 25],
        backgroundColor: ["#0ACF97"],
        // backgroundColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        // borderColor: [
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(153, 102, 255, 1)",
        //   "rgba(255, 159, 64, 1)",
        // ],
        borderWidth: 4,
        borderColor: "#0ACF97",
        tension: 0.4,
      },
    ],
  },
  options: {
    hitRadius: 100,
    pointRadius: 5,
    hoverRadius: 5,
    // plugins: {
    //   title: {
    //     display: true,
    //     text: "Grid Line Settings",
    //   },
    // },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            // console.log(context.dataset, context);
            let label = context.dataset.label;
            let value = context.raw;
            return `${label}: $${value}k`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "#8080802e",

          // display: false,
        },
        ticks: {
          callback: (value) => {
            return `$${value}k`;
          },
        },
      },
      x: {
        grid: {
          color: "#8080802e",
        },
      },
      // y: {
      //   grid: {
      //     drawBorder: false,
      //     color: function(context) {
      //       if (context.tick.value > 0) {
      //         return Utils.CHART_COLORS.green;
      //       } else if (context.tick.value < 0) {
      //         return Utils.CHART_COLORS.red;
      //       }
      //       return '#000000';
      //     },
      //   },
    },
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
  },
});

// ctx2.style.backgroundColor = "green";

var element = document.getElementById("bodyH");
const switchTrigger = document.querySelector("#modeSwitcher");
const modeSwitcherLabel = document.querySelector("#modeSwitcherLabel");
modeSwitcherLabel.innerText = switchTrigger.checked ? "Dark" : "Light";

switchTrigger.addEventListener("click", (e) => {
  console.log(switchTrigger, e.target.checked);

  //   e.target.checked = e.target.checked === true ? false : true;
  e.target.value = e.target.value === "on" ? "off" : "on";

  modeSwitcherLabel.innerText = e.target.checked ? "Dark" : "Light";

  if (e.target.checked) {
    element.setAttribute("data-theme-color", "dark");
  } else {
    element.setAttribute("data-theme-color", "");
  }
  //   console.log(element);
});

console.log(switchTrigger);

// element.setAttribute("data-theme-color", "dark");

// Bubble map

//

Promise.all([
  fetch("https://unpkg.com/world-atlas@2.0.2/countries-50m.json").then((r) =>
    r.json()
  ),
  fetch(
    "https://gist.githubusercontent.com/mbostock/9535021/raw/928a5f81f170b767162f8f52dbad05985eae9cac/us-state-capitals.csv"
  ) //city-csv
    .then((r) => r.text())
    .then((d) => Papa.parse(d, { dynamicTyping: true, header: true }).data), //papaparse
]).then(([us, data]) => {
  const states = ChartGeo.topojson.feature(us, us.objects.countries).features;

  console.log(us, data);

  // console.log(data.map((d) => Object.assign(d, {value: 2})));
  let myData = [
    { name: "New York", latitude: 40.6943, longitude: -73.9249, value: 75 },
    { name: "Mexico City", latitude: 19.4333, longitude: -99.1333, value: 39 },
    { name: "Mumbai", latitude: 18.9667, longitude: 72.8333, value: 25 },
    { name: "japan", latitude: 35.377716, longitude: 139.56465464, value: 61 },
    { name: "0", latitude: -150, longitude: 0, value: 26 },
  ];
  const chart = new Chart(
    document.getElementById("world-bubble").getContext("2d"),
    {
      type: "bubbleMap",
      data: {
        labels: myData.map((d) => d.name),
        datasets: [
          {
            outline: states,
            showOutline: true,
            outlineBackgroundColor: "#e3eaef",
            outlineBorderColor: "#e3eaef",
            backgroundColor: "#3755dd",
            // outlineColor: "red",
            // borderRadius: 5,
            //   backgroundColor: 'rgba(247, 151, 35, 0.5)',
            //   borderColor: 'rgba(247, 151, 35, 1)',
            //   pointBackgroundColor: 'rgba(247, 151, 35, 1)',
            pointBorderColor: "#727df58a",
            pointBorder: 8,
            pointRadius: 8,
            pointHoverRadius: 12,
            borderWidth: 5,
            //   pointRadius: "40px",
            //   data: data.map((d) => Object.assign(d, {value: 2})),
            data: myData,
          },
        ],
      },
      options: {
        // showOutline: true,
        // showGraticule: true,
        backgroundColor: "red",
        plugins: {
          tooltip: {
            // enabled: false
            // callbacks: {
            //   label: (context) => {
            //     console.log(label);
            //     // console.log(context);
            //     return "label";
            //   },
            // },
            // callbacks: (value) => {
            //   return "$" + value + "m";
            // },
            callbacks: {
              label: function (context) {
                // console.log(context.dataset, context);

                let city = context.raw.name;
                let value = context.raw.value;
                return `${city}: $${value}k`;
              },
            },
          },
          legend: {
            display: false,
          },
          datalabels: {
            align: "top",
            formatter: (v) => {
              // console.log(v, "fjhsdgj");

              return v.name;
            },
          },
        },
        scales: {
          xy: {
            projection: "naturalEarth1",
          },
          r: {
            size: [1, 100],
          },
        },
      },
    }
  );
});

//   chart.backgroundColor = "red"
