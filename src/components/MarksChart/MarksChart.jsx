import { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;
  //   console.log(marksData);
  // data procession at the chart
  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.student_id,
      name: studentData.name,
      physics: studentData.subjects.physics,
      chemistry: studentData.subjects.chemistry,
      math: studentData.subjects.mathematics,
    };

    const avg = (student.physics + student.chemistry + student.math) / 3;
    student.avg = avg;

    return student;
  });
  console.log(marksChartData);
  return <div>
    <BarChart width={800} height={600} data={marksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey='avg' fill="yellow"></Bar>
        <Bar dataKey='chemistry' fill="green"></Bar>

    </BarChart>
  </div>;
};

export default MarksChart;
