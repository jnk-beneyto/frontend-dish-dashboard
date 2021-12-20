import { Dishform } from "./components/Dishform"
import { DishList } from "./components/DishList"
import { PieChart } from "./components/PieChart"
import { useDishState, useDishDispatch } from "./context/dishContext"
import "./styles/output.css"

export default function App () {
  const { search, dishesFixed } = useDishState()
  const { setSearch } = useDishDispatch()

  return (
    <>
      <div className="bg-gradient-to-r from-blue-200 to-blue-800 text-white h-16 flex justify-center text-2xl text-center items-center">
        <span><img className='border-white' src="https://img.icons8.com/wired/32/ffffff/tableware.png" /></span><span className='ml-2'>RESTAURANT DASHBOARD</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <div className="bg-blue-900 text-white underline h-10 flex justify-center text-xl text-center items-center uppercase">
            CREATE NEW DISH
          </div>
          <Dishform />
          {dishesFixed.length && <PieChart />}
        </div>
        <div className='bg-gray-100'>
          <div className="mb-5 bg-blue-900 text-white underline h-10 flex justify-center text-xl text-center items-center uppercase">
            list of dishes
          </div>
          <div className=''>
            <div className="flex justify-center">
              <div className='flex justify-center mb-3 relative max-w-xs sm:w-2/3 text-gray-400 focus-within:text-gray-800 '>
                <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                  <img src="https://img.icons8.com/material/16/000000/search-database.png" />
                </div>
                <input
                  value={search}
                  placeholder="Search ..."
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full h-10 pl-8 border-solid border-1 border-black rounded-lg shadow-md focus:bg-white"
                  type="text" />
              </div>
            </div>
            <DishList />
          </div>
        </div>
      </div>
    </>
  )
}
