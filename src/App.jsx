// import './index.css'
import Header from "./components/component/Header.jsx";
import Main from "./components/component/Main.jsx";
import Footer from "./components/component/Footer.jsx";
import WelcomeMessage from "./components/component/WelcomeMessage.jsx";
import Greeting from "./components/component/Greeting.jsx";
import ProductInfo from "./components/props/ProductInfo.jsx";
import UserList from "./components/loop/UserList.jsx";
import ProductList from "./components/loop/ProductList.jsx";
import Person from "./components/props/Person.jsx";
import Product from "./components/props/Product.jsx";
import Card from "./components/props/Card.jsx";
import Weather from "./components/conditional/Weather.jsx";
import UserStatus from "./components/conditional/UserStatus.jsx";
import StyledCard from "./components/styled/StyledCard.jsx";
import ProfiledCard from "./components/styled/ProfiledCard.jsx";
import IconComponent from "./components/component/IconComponent.jsx";
import Friend from "./components/loop/Friend.jsx";
import Movies from "./components/use_state/Movies.jsx";
import ComponentOne from "./components/use_state/ComponentOne.jsx";
import {useState} from "react";
import ComponentTwo from "./components/use_state/ComponentTwo.jsx";
import ExampleOne from "./components/use_state/ExampleOne.jsx";
import ExampleTwo from "./components/use_state/ExampleTwo.jsx";
import ExampleThree from "./components/use_state/ExampleThree.jsx";
import Counter from "./components/use_state/Counter.jsx";
import TodoList from "./components/use_state/TodoList.jsx";
import Profile from "./components/use_state/Profile.jsx";
import ShoppingList from "./components/use_state/ShoppingList.jsx";
import CopyInput from "./components/portal/CopyInput.jsx";
import PopupContent from "./components/portal/PopupContent.jsx";
import Switcher from "./components/portal/Switcher.jsx";
import ExampleOneEffect from "./components/use_effect/ExampleOneEffect.jsx";
import BasicEffect from "./components/use_effect/BasicEffect.jsx";
import CounterEffect from "./components/use_effect/CounterEffect.jsx";
import FetchDataEffect from "./components/use_effect/FetchDataEffect.jsx";
import ComponentApp from "./components/create_context/ComponentApp.jsx";
import UserProfile from "./components/create_context/UserProfile.jsx";
import {UserProvider} from "./components/create_context/UserContext.jsx";
import UpdateUser from "./components/create_context/UpdateUser.jsx";
import ReducerApp from "./components/use_reducer/ReducerApp.jsx";
import CounterReducer from "./components/use_reducer/CounterReducer.jsx";
import RefApp from "./components/use_ref/RefApp.jsx";
import FocusInput from "./components/use_ref/FocusInput.jsx";
import Timer from "./components/use_ref/Timer.jsx";
import Demo from "./components/use_effect/CleanUp.jsx";
import CustomApp from "./components/custom_hooks/CustomApp.jsx";
import UniqueId from "./components/unique_id/UniqueId.jsx";

const App = () => {
    // const [count, setCount] = useState(0);
    return <section>
        {/*<Header/>*/}
        {/*<Main />*/}
        {/*<Footer/>*/}
        {/*<WelcomeMessage />*/}
        {/*<Greeting />*/}
        {/*<ProductInfo />*/}
        {/*<UserList />*/}
        {/*<ProductList />*/}
        {/*<Person name="Lauren" age={25} />*/}
        {/*<Product name="Iphone" price={30000} />*/}
        {/*<Card>*/}
        {/*    <h1>My Card</h1>*/}
        {/*    <p>This is some content for card!</p>*/}
        {/*</Card>*/}
        {/*<Weather />*/}
        {/*<UserStatus loggedIn={true} isAdmin={false}  />*/}
        {/*<StyledCard />*/}
        {/*<ProfiledCard />*/}
        {/*<IconComponent />*/}
        {/*<Friend/>*/}
        {/*<Movies/>*/}
        {/*<ComponentOne*/}
        {/*    count={count}*/}
        {/*    onClickHandler={() => setCount(count + 1)}/>*/}
        {/*<ComponentTwo*/}
        {/*    count={count}*/}
        {/*    onClickHandler={() => setCount(count + 1)}/>*/}
        {/*<ExampleOne />*/}
        {/*<ExampleTwo />*/}
        {/*<ExampleThree/>*/}

        {/*USE STATE*/}
        {/*<Counter/>*/}
        {/*<TodoList />*/}
        {/*<Profile />*/}
        {/*<ShoppingList />*/}

        {/*PORTAL*/}
        {/*<CopyInput />*/}
        {/*<Switcher />*/}

        {/*EFFECT*/}
        {/*<ExampleOneEffect />*/}
        {/*<BasicEffect />*/}
        {/*<CounterEffect />*/}
        {/*<FetchDataEffect />*/}
        {/*<Demo />*/}

        {/*Context*/}
        {/*<ComponentApp />*/}
        {/*<UserProvider>*/}
        {/*    <UserProfile />*/}
        {/*    <UpdateUser />*/}
        {/*</UserProvider>*/}

        {/*Reducer*/}
        {/*<ReducerApp />*/}
        {/*<CounterReducer />*/}

        {/*UseRef*/}
        {/*<RefApp />*/}
        {/*<FocusInput />*/}
        {/*<Timer />*/}

        {/*Custom*/}
        {/*<CustomApp />*/}

        {/*UniqueID*/}
        <UniqueId />
    </section>

}

export default App;