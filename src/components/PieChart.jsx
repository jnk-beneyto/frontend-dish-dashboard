import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { useDishState } from '../context/dishContext'

ChartJS.register(ArcElement, Title, Tooltip, Legend)

export const PieChart = () => {
  const { dishesFixed } = useDishState()

  const numStarter = dishesFixed.filter(dish => dish.type === 'starter').length
  const numMain = dishesFixed.filter(dish => dish.type === 'main').length
  const numDessert = dishesFixed.filter(dish => dish.type === 'dessert').length

  const data = {
    labels: ["Starter", "Main", "Dessert"],
    datasets: [
      {
        label: 'Stats',
        data: [numStarter, numMain, numDessert],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className='flex justify-center my-4'>
      <div className=' xs-full sm:w-3/4 md:w-2/5'>
        <h3 className='text-center my-2 uppercase'>Dish Stats</h3>
        <Pie data={data} />
      </div>
    </div>
  )

}
