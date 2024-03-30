import {
    useLoaderData,
    useNavigate
} from "react-router-dom";
const FoodDetails = () => {
    const data = useLoaderData();
    const food = data.meals[0];
    const navigate = useNavigate();
    const goBack = () =>{
        navigate(-1);
    }
    const { strMeal, strCategory, strMealThumb, strInstructions, strArea } = food;
    return (
        <div className="flex gap-2 text-black font-semibold bg-white md:w-4/12 mx-auto p-5 justify-center items-center text-center flex-col">
            <img className='rounded-md md:w-96' src={strMealThumb} alt={strMeal} />
            <h3 className='font-bold'>Name:-{strMeal}</h3>
            <p>Category:- {strCategory}</p>
            <p>Area:- {strArea}</p>
            <p>{strInstructions}</p>
            <button onClick={goBack} className='bg-slate-800 rounded-md text-white py-2 px-5'>Go Back</button>
        </div>
    );
};

export default FoodDetails;