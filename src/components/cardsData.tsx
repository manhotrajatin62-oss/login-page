import { Chart, Contact, Market, User } from "./Icons";
import { BarChart, LineChart } from "@mui/x-charts";

export const cardsData = [
  {
    heading: "Bookings",
    data: "281",
    footer: {
      highlight: "+55%",
      text: "than last week",
    },
    icon: <User card />,
    gradient: {
      from: "#3E3D45",
      to: "#202020",
    },
  },
  {
    heading: "Today's Users",
    data: "2,300",
    footer: {
      highlight: "+3%",
      text: "than last week",
    },
    icon: <Chart />,
    gradient: {
      from: "#E93B77",
      to: "#DA1F63",
    },
  },
  {
    heading: "Revenue",
    data: "34k",
    footer: {
      highlight: "+1%",
      text: "than yesterday",
    },
    icon: <Market />,
    gradient: {
      from: "#63B967",
      to: "#4BA64F",
    },
  },
  {
    heading: "Followers",
    data: "+91",
    footer: {
      text: "Just updated",
    },
    icon: <Contact />,
    gradient: {
      from: "#439DEE",
      to: "#1E78E9",
    },
  },
];

export const chartsData = [
  {
    chart: (
      <BarChart
        borderRadius={10}
        slotProps={{
          tooltip: {
            trigger: "none",
          },
        }}
        yAxis={[
          {
            min: 0,
            max: 60,
            tickSize: 0,
            tickLabelStyle: {
              fill: "rgba(255,255,255,0.7)",
              transform: "translateX(-5px)",
            },
          },
        ]}
        xAxis={[
          {
            scaleType: "band",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            categoryGapRatio: 0.85,
            tickSize: 0,
            tickLabelStyle: {
              fill: "rgba(255,255,255,0.7)",
              transform: "translateY(5px)",
            },
          },
        ]}
        series={[
          {
            data: [50, 20, 10, 22, 50, 10, 40],
            color: "#fff",
          },
        ]}
        grid={{ horizontal: true, vertical: true }}
        margin={{ left: -10, top: 30 }}
        sx={{
          "& .MuiChartsGrid-horizontalLine, & .MuiChartsGrid-verticalLine": {
            stroke: "rgba(255,255,255,0.5)",
            strokeDasharray: "6 6",
          },

          "& .MuiChartsAxis-root line": {
            stroke: "rgba(255,255,255,0.1)",
            strokeDasharray: "6 6",
          },

          "& .MuiChartsAxis-tick": {
            stroke: "rgba(255,255,255,0.5)",
            strokeDasharray: "4 4",
          },

          "& .MuiChartsAxis-tickLabel": {
            fill: "rgba(255,255,255,0.1)",
          },
        }}
      />
    ),
    heading: "Website Views",
    subHeading: "Last Campaign Performance",
    paragraph: "campaign sent 2 days ago",
    gradient: {
      from: "#E93B77",
      to: "#DA1F63",
    },
    shadow: "#DC22655C",
  },
  {
    chart: (
      <LineChart
        xAxis={[
          {
            data: [
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
            scaleType: "point",
            tickSize: 0,
            tickLabelStyle: {
              fill: "rgba(255,255,255,0.7)",
              transform: "translateY(8px)",
            },
          },
        ]}
        yAxis={[
          {
            min: 0,
            max: 600,
            tickSize: 0,
            tickNumber: 4,
            tickLabelStyle: {
              fill: "rgba(255,255,255,0.7)",
              transform: "translateX(-8px)",
            },
          },
        ]}
        series={[
          {
            data: [50, 40, 300, 320, 500, 350, 200, 210, 500],
            color: "#fff",
            showMark: true,
            area: false,
          },
        ]}
        grid={{ horizontal: true, vertical: false }}
        margin={{ left: 0, top: 30 }}
        slotProps={{ tooltip: { trigger: "none" } }}
        sx={{
          "& .MuiChartsGrid-horizontalLine": {
            stroke: "rgba(255,255,255,0.25)",
            strokeDasharray: "6 6",
          },

          "& .MuiChartsAxis-root line": {
            stroke: "rgba(255,255,255,0.0)",
          },

          "& .MuiChartsAxis-tick": {
            stroke: "rgba(255,255,255,0.4)",
          },

          "& .MuiChartsAxis-tickLabel": {
            fill: "rgba(255,255,255,0.7)",
          },

          "& .MuiLineElement-root": {
            stroke: "#fff",
            strokeWidth: 2,
          },

          "& .MuiMarkElement-root": {
            fill: "#fff",
            stroke: "#fff",
          },

          "& .MuiChartsOverlay-root, & .MuiChartsHighlight-root": {
            display: "none",
          },
        }}
      />
    ),
    heading: "Daily Sales",
    subHeading: (
      <>
        <b>(+15%)</b> increase in today sales.
      </>
    ),
    paragraph: "updated 4 min ago",
    gradient: {
      from: "#63B967",
      to: "#4BA64F",
    },
    shadow: "#4FA9535C",
  },
  {
    chart: (
      <LineChart
        xAxis={[
          {
            data: [
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
            scaleType: "point",
            tickSize: 0,
            tickLabelStyle: {
              fill: "rgba(255,255,255,0.7)",
              transform: "translateY(8px)",
            },
          },
        ]}
        yAxis={[
          {
            min: 0,
            max: 600,
            tickSize: 0,
            tickNumber: 4,
            tickLabelStyle: {
              fill: "rgba(255,255,255,0.7)",
              transform: "translateX(-8px)",
            },
          },
        ]}
        series={[
          {
            data: [50, 40, 300, 320, 500, 350, 200, 210, 500],
            color: "#fff",
            showMark: true,
            area: false,
          },
        ]}
        grid={{ horizontal: true, vertical: false }}
        margin={{ left: 0, top: 30 }}
        slotProps={{ tooltip: { trigger: "none" } }}
        sx={{
          "& .MuiChartsGrid-horizontalLine": {
            stroke: "rgba(255,255,255,0.25)",
            strokeDasharray: "6 6",
          },

          "& .MuiChartsAxis-root line": {
            stroke: "rgba(255,255,255,0.0)",
          },

          "& .MuiChartsAxis-tick": {
            stroke: "rgba(255,255,255,0.4)",
          },

          "& .MuiChartsAxis-tickLabel": {
            fill: "rgba(255,255,255,0.7)",
          },

          "& .MuiLineElement-root": {
            stroke: "#fff",
            strokeWidth: 2,
          },

          "& .MuiMarkElement-root": {
            fill: "#fff",
            stroke: "#fff",
          },

          "& .MuiChartsOverlay-root, & .MuiChartsHighlight-root": {
            display: "none",
          },
        }}
      />
    ),
    heading: "Completed Tasks",
    subHeading: "Last Campaign Performance",
    paragraph: "just updated",
    gradient: {
      from: "#3E3D45",
      to: "#202020",
    },
    shadow: "#00000040",
  },
];
