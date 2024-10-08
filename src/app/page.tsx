"use client";

import { AreaChartList } from "@/components/common/AreaChartList";
import ChartOne from "@/components/common/ChartOne";
import ChartTwo from "@/components/common/ChartTwo";
import { LineChartList } from "@/components/common/LineChartList";
import { PaiChart } from "@/components/common/PaiChart";
import { RadarChartList } from "@/components/common/RadarChartList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4">
        <div className="bg-[#2a9d90] dark:bg-[#030712] border shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-[#17564f] dark:border-gray-600 text-white font-medium group ">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="stroke-current text-blue-800 dark:text-[#030712] transform transition-transform duration-500 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </div>
          <div className="text-right">
            <p className="text-2xl">1,257</p>
            <p>Visitors</p>
          </div>
        </div>
        <div className="bg-[#2a9d90] dark:bg-[#030712] border shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-[#17564f] dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="stroke-current text-blue-800 dark:text-[#030712] transform transition-transform duration-500 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </div>
          <div className="text-right">
            <p className="text-2xl">557</p>
            <p>Orders</p>
          </div>
        </div>
        <div className="bg-[#2a9d90] dark:bg-[#030712] border shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-[#17564f] dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="stroke-current text-blue-800 dark:text-[#030712] transform transition-transform duration-500 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              ></path>
            </svg>
          </div>
          <div className="text-right">
            <p className="text-2xl">$11,257</p>
            <p>Sales</p>
          </div>
        </div>
        <div className="bg-[#2a9d90] dark:bg-[#030712] border shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-[#17564f] dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="stroke-current text-blue-800 dark:text-[#030712] transform transition-transform duration-500 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="text-right">
            <p className="text-2xl">$75,257</p>
            <p>Balances</p>
          </div>
        </div>
      </div>
      <div className="grid gap-3">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 p-1 gap-2 ">
          <div className="mb-3 md:mb-0 ">
            <LineChartList />
          </div>
          <div>
            <RadarChartList />
          </div>
        </div>

        <div className="w-full mb-3">
          <AreaChartList />
        </div>

        <div className="w-full flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-3 md:mb-0">
            <ChartOne />
          </div>
          <div className="md:w-1/2">
            <PaiChart />
          </div>
        </div>

        <div className="w-full">
          <ChartTwo />
        </div>
      </div>
    </div>
  );
}
