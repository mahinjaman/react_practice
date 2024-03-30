import Nav from "../Nav/Nav";
import { useNavigation , Outlet} from 'react-router-dom'
const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Nav></Nav>
            <div>
                {
                    navigation === "loading" ? 
                    <h1>Loading....</h1> :
                    <Outlet></Outlet>
                }
            </div>
            
        </div>
    );
};

export default Home;