import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const Food = ({food}) => {

    const { idMeal, strMeal, strCategory ,strMealThumb } = food;
    const navigate = useNavigate();
    const details = (idMeal) =>{
        navigate(`/details/${idMeal}`);
    }
    
    return (
        <div className='bg-slate-400 p-5 rounded-md text-black flex flex-col gap-2'>
            <img className='rounded-md' src={strMealThumb} alt={strMeal} />
            <h3 className='font-semibold'>Name:-{strMeal}</h3>
            <p>Category:- {strCategory}</p>
            <button onClick={() => details(idMeal)} className='bg-slate-800 rounded-md text-white py-2 px-5'>See Details</button>
        </div>
    );
};

Food.propTypes ={
    food: PropTypes.object.isRequired,
}

export default Food;