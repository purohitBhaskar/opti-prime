// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/nMYX7MFn37V
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from ""
// import { ResponsiveLine } from "@nivo/line"

// export default function LineChart() {
//   return (
//     <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
//       <div className="flex justify-between w-full">
//         <h2 className="text-lg font-semibold text-gray-900">Power consumption</h2>
//         <Select className="w-32">
//           <SelectTrigger className="ml-auto" id="timeframe">
//             <SelectValue placeholder="This Year" />
//           </SelectTrigger>
//           <SelectContent position="popper">
//             <SelectItem value="this-year">This Year</SelectItem>
//             <SelectItem value="last-year">Last Year</SelectItem>
//             <SelectItem value="custom-range">Custom Range</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>
//       <CurvedlineChart className="w-full h-[300px]" />
//       <div className="flex justify-between w-full mt-4">
//         <span className="text-sm text-gray-600">Jan</span>
//         <span className="text-sm text-gray-600">Feb</span>
//         <span className="text-sm text-gray-600">Mar</span>
//         <span className="text-sm text-gray-600">Apr</span>
//         <span className="text-sm text-gray-600">May</span>
//         <span className="text-sm text-gray-600">Jun</span>
//         <span className="text-sm text-gray-600">Jul</span>
//         <span className="text-sm text-gray-600">Aug</span>
//       </div>
//     </div>
//   )
// }

// function CurvedlineChart(props) {
//   return (
//     <div {...props}>
//       <ResponsiveLine
//         data={[
//           {
//             id: "Desktop",
//             data: [
//               { x: "Jan", y: 43 },
//               { x: "Feb", y: 137 },
//               { x: "Mar", y: 61 },
//               { x: "Apr", y: 145 },
//               { x: "May", y: 26 },
//               { x: "Jun", y: 154 },
//             ],
//           },
//           {
//             id: "Mobile",
//             data: [
//               { x: "Jan", y: 60 },
//               { x: "Feb", y: 48 },
//               { x: "Mar", y: 177 },
//               { x: "Apr", y: 78 },
//               { x: "May", y: 96 },
//               { x: "Jun", y: 204 },
//             ],
//           },
//         ]}
//         margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
//         xScale={{
//           type: "point",
//         }}
//         yScale={{
//           type: "linear",
//           min: 0,
//           max: "auto",
//         }}
//         curve="monotoneX"
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 16,
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickValues: 5,
//           tickPadding: 16,
//         }}
//         colors={["#2563eb", "#e11d48"]}
//         pointSize={6}
//         useMesh={true}
//         gridYValues={6}
//         theme={{
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//           grid: {
//             line: {
//               stroke: "#f3f4f6",
//             },
//           },
//         }}
//         role="application"
//       />
//     </div>
//   )
// }

import React from 'react'

const LineChart = () => {
  return (
    <div>LineChart</div>
  )
}

export default LineChart