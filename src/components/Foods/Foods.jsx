import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';



const Foods = () => {
    const data = useLoaderData();
    const foods = data.meals;
    return (
        <div className='w-10/12 mx-auto'>
            <h1 className="text-white font-semibold text-5xl">Hello Foddie People</h1>
            <div className='grid md:grid-cols-4 gap-4'>
                {
                    foods.map(food => <Food key={food.idMeal} food={food}></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;