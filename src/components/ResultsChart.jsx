import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  {
    "student_id": 1,
    "name": "Aarav Sharma",
    "physics": 85,
    "chemistry": 78,
    "mathematics": 92,
    "total": 255,
    "percentage": 85.0
  },
  {
    "student_id": 2,
    "name": "Ananya Patel",
    "physics": 90,
    "chemistry": 88,
    "mathematics": 95,
    "total": 273,
    "percentage": 91.0
  },
  {
    "student_id": 3,
    "name": "Rohan Gupta",
    "physics": 65,
    "chemistry": 72,
    "mathematics": 70,
    "total": 207,
    "percentage": 69.0
  },
  {
    "student_id": 4,
    "name": "Priya Singh",
    "physics": 94,
    "chemistry": 91,
    "mathematics": 98,
    "total": 283,
    "percentage": 94.3
  },
  {
    "student_id": 5,
    "name": "Kabir Verma",
    "physics": 78,
    "chemistry": 80,
    "mathematics": 84,
    "total": 242,
    "percentage": 80.7
  },
  {
    "student_id": 6,
    "name": "Sneha Roy",
    "physics": 88,
    "chemistry": 85,
    "mathematics": 89,
    "total": 262,
    "percentage": 87.3
  },
  {
    "student_id": 7,
    "name": "Devansh Joshi",
    "physics": 58,
    "chemistry": 62,
    "mathematics": 60,
    "total": 180,
    "percentage": 60.0
  },
  {
    "student_id": 8,
    "name": "Ishita Nair",
    "physics": 91,
    "chemistry": 89,
    "mathematics": 93,
    "total": 273,
    "percentage": 91.0
  },
  {
    "student_id": 9,
    "name": "Vivaan Reddy",
    "physics": 72,
    "chemistry": 75,
    "mathematics": 79,
    "total": 226,
    "percentage": 75.3
  },
  {
    "student_id": 10,
    "name": "Diya Kulkarni",
    "physics": 82,
    "chemistry": 86,
    "mathematics": 88,
    "total": 256,
    "percentage": 85.3
  }
]


const ResultsChart = () => {
    return (
        <div>
            <LineChart width={1200} height={500} data={resultData}>
                <XAxis dataKey="name">  </XAxis>
                <YAxis></YAxis>
                    <Line dataKey="mathematics"></Line>
                <Line dataKey="physics" stroke="red"></Line>
                <Line dataKey="chemistry" stroke="green"></Line>
              
                
            </LineChart>
        </div>
    );
};

export default ResultsChart;