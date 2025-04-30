"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const incomeExpensesData = [
  { name: "14 Mar", earnings: 8, labor: 6 },
  { name: "15 Mar", earnings: 9, labor: 5 },
  { name: "16 Mar", earnings: 7, labor: 6 },
  { name: "17 Mar", earnings: 8, labor: 4 },
];

const timeTrackingData = [
  { day: "22", tracking: 3000 },
  { day: "23", tracking: 1000 },
  { day: "24", tracking: 3000 },
  { day: "25", tracking: 1500 },
  { day: "26", tracking: 800 },
  { day: "27", tracking: 2000 },
];

const budgetData = [
  { day: "10", estimation: 700, budget: 750 },
  { day: "11", estimation: 500, budget: 730 },
  { day: "12", estimation: 400, budget: 720 },
  { day: "13", estimation: 300, budget: 700 },
  { day: "14", estimation: 200, budget: 690 },
  { day: "15", estimation: 100, budget: 680 },
];

const TimeTracking = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-green-400 flex flex-col items-center justify-end pt-40 p-8">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Improve efficiency through time tracking.
        </h1>
        <p className="text-white text-lg mb-16">
          How to overcome common challenges and pitfalls when trying to adopt
          time tracking and efficient work habits, and build sustainable habits
          that lead to lasting success.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="relative flex items-center gap-6 mb-16">
        <div className="absolute -top-[80px] -left-12 flex flex-col items-center text-white text-sm rotate-6">
          <p className="mb-1 font-thin">All research</p>
          <p className="mb-1 font-thin">start from here</p>
          <svg
            className="w-12 h-12 text-white rotate-[-90deg]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M17 7C13.5 7 11 9.5 11 13v4m0 0l-4-4m4 4l4-4" />
          </svg>
        </div>

        <button className="bg-green-300 hover:bg-green-400 text-green-900 font-semibold px-6 py-3 rounded-full shadow-md">
          Get Trial Project
        </button>
        <button className="flex items-center text-white hover:underline gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.64z" />
          </svg>
          Watch Demo
        </button>
      </div>

      {/* Graph Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full max-w-7xl mx-auto">
        {/* Income vs Expenses */}
        <div className="relative -top-40">
          <div className=" bg-white rounded-xl shadow-md p-6 xl:scale-90 flex flex-col">
            <h3 className="font-semibold text-black mb-2">
              Income vs Expenses
            </h3>
            <div className="flex gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>{" "}
                <span className="text-gray-500 text-sm">Projects Earnings</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>{" "}
                <span className="text-gray-500 text-sm">Labour Costs</span>
              </div>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={incomeExpensesData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="earnings"
                    fill="#34d399"
                    radius={[5, 5, 0, 0]}
                  />
                  <Bar dataKey="labor" fill="#60a5fa" radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Stats under Left Card */}
          <div className="flex items-center gap-4 pl-4 pt-16">
            <div className="text-center">
              <h4 className="text-4xl text-white text-start font-bold mb-2">
                15+
              </h4>
              <p className="text-sm text-gray-200">Years of experience</p>
            </div>
            <div className="w-px h-12 bg-white" />
            <div className="text-center">
              <h4 className="text-4xl text-white text-start font-bold mb-2">
                84k
              </h4>
              <p className="text-sm text-gray-200">Customers worldwide</p>
            </div>
          </div>
        </div>

        {/* Time Tracking */}
        <div className="relative bg-white rounded-xl shadow-md p-8 xl:scale-105 flex flex-col justify-between">
          <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
            <h3 className="font-semibold text-black text-lg">Time Tracking</h3>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-semibold text-black">
                This month
              </span>
              <span className="text-[10px] font-semibold text-black">
                All time
              </span>
              <button className="bg-gray-200 px-3 py-2 rounded-lg text-sm text-black">
                Last 7 days
              </button>
            </div>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={timeTrackingData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="tracking" fill="#34d399" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Time vs Budget */}
        <div className="relative -top-28">
          <div className=" bg-white rounded-xl shadow-md p-6  xl:scale-90 flex flex-col">
            <h3 className="font-semibold text-black mb-2">Time vs Budget</h3>

            <div className="flex gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>{" "}
                <span className="text-gray-500 text-sm">Time Estimation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>{" "}
                <span className="text-gray-500 text-sm">Budget</span>
              </div>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={budgetData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="estimation"
                    stroke="#34d399"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="budget"
                    stroke="#60a5fa"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Circle design */}
          <div className="flex items-center rounded-md w-fit pl-6 pt-16">
            {/* Overlapping Circles */}
            <div className="relative w-20 h-10 ">
              <div className="absolute w-10 h-10 border-2 border-white rounded-full opacity-90 left-0 top-0"></div>
              <div className="absolute w-10 h-10 border-2 border-white rounded-full opacity-90 left-4 top-0"></div>
              <div className="absolute w-10 h-10 border-2 border-white rounded-full opacity-90 left-8 top-0"></div>
            </div>

            {/* Text Section */}
            <div className="ml-6">
              <h4 className="text-white text-start font-bold text-xl">140K+</h4>
              <p className="text-white text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="flex flex-col md:flex-row gap-12 items-center text-white text-center"></div>
    </section>
  );
};

export default TimeTracking;
