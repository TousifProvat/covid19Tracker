const Confirmed = document.querySelector(".confirmed .number").textContent;
const Recovered = document.querySelector(".recovered .number").textContent;
const Infected = document.querySelector(".infected .number").textContent;

const Deaths = document.querySelector(".deaths .number").textContent;

window.onload = function () {
  //first chart
  const canvas = document.getElementById("myChart");
  const ctx = canvas.getContext("2d");

  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Confirmed", "Infected", "Recovered", "Deaths"],
      datasets: [
        {
          data: [Confirmed, Infected, Recovered, Deaths],
          fillColor: true,
          borderColor: [
            "rgba(105, 75, 161, 1)",
            "rgba(239, 128, 24, 1)",
            "rgba(31, 132, 30, 1)",
            "rgba(212, 7, 7, 1)",
          ],
          backgroundColor: [
            "rgba(105, 75, 161, 0.5)",
            "rgba(239, 128, 24, 0.5)",
            "rgba(31, 132, 30, 0.5)",
            "rgba(212, 7, 7, 0.5)",
          ],
          borderWidth: 2,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      responsive: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              responsive: false,
              maintainAspectRatio: true,
            },
          },
        ],
      },
    },
  });

  //second chart
  const canvas2 = document.getElementById("myChart2");
  const ctx2 = canvas2.getContext("2d");

  const myChart2 = new Chart(ctx2, {
    type: "line",

    // The data for our dataset
    data: {
      labels: [
        "04/01",
        "04/02",
        "04/03",
        "04/04",
        "04/05",
        "04/06",
        "04/07",
        "04/08",
        "04/09",
        "04/10",
        "04/11",
        "04/12",
        "04/13",
        "04/14",
      ],
      datasets: [
        {
          label: "Confirmed",
          backgroundColor: "rgba(105, 75, 161, 0.3)",
          lineTension: 0,
          borderColor: "rgba(105, 75, 161, 1)",
          data: [
            77056,
            80141,
            84855,
            102889,
            71906,
            71746,
            86383,
            73500,
            85572,
            83542,
            79421,
            73500,
            72213,
            71334,
          ],
        },
        {
          label: "Recovered",
          backgroundColor: "rgba(31, 132, 30, 0.3)",
          lineTension: 0,

          borderColor: "rgba(31, 132, 30, 1)",
          data: [
            17135,
            17586,
            16922,
            18761,
            13600,
            16178,
            25675,
            32613,
            24736,
            19995,
            24509,
            23140,
            19817,
            22488,
          ],
        },
        {
          label: "Deaths",
          backgroundColor: "rgba(212, 7, 7, 0.3)",
          lineTension: 0,

          borderColor: "rgba(212, 7, 7, 1)",
          data: [
            5043,
            5944,
            6127,
            5820,
            4357,
            5317,
            7328,
            6403,
            7273,
            6945,
            6044,
            5687,
            5514,
            10596,
          ],
        },
      ],
    },

    options: {
      legend: {
        display: true,
        labels: {
          fontFamily: "Montserrat",
          padding: 15,
          boxWidth: 30,
        },
      },
      responsive: false,

      scales: {
        xAxes: [
          {
            ticks: {
              autoSkip: true,

              maxTicksLimit: 15,

              beginAtZero: true,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              responsive: false,
              maintainAspectRatio: true,
            },
          },
        ],
      },
    },
  });
};
