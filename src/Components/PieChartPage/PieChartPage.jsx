import { useEffect, useState } from 'react'
import { PieChart, Pie,  Cell } from 'recharts';
import { getDataFromLocalStorage } from '../LocalStorage/LocalStorage';

export default function PieChartPage() {
    const [myDonations , setMyDonation ] = useState(0);
    const [totalDonations , setTotalDonations ] = useState(12);

    useEffect(()=>{
        const donationData = getDataFromLocalStorage();
        setMyDonation(donationData.length)
        setTotalDonations(12 - myDonations);
    },[myDonations])

    const data = [
        { name: 'Group A', value: myDonations },
        { name: 'Group B', value: totalDonations },
      ];
      
      const COLORS = ['#FF444A', '#00C49F'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
  return (
    <>
    <div className='flex justify-center items-center'>
    <PieChart width={300} height={300} >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
    </div>
      {/* </ResponsiveContainer> */}
      <div className='flex justify-center items-center gap-16'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-2'>
                <div>
                    <h2>Your Donation</h2>
                </div>
                <div className='w-16 h-4 rounded bg-[#FF444A]'>

                </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                <div>
                    <h2>Total Donation</h2>
                </div>
                <div className='w-16 h-4 rounded bg-[#00C49F]'>

                </div>
        </div>
      </div>
      </>
  )
}
