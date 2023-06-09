import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseRef from "../components/HookUseRef";

const Home = () => {
  return (
    <div>
      <HookUseReducer />
      <HookUseEffect />
      <HookUseRef />
    </div>
  );
};

export default Home;
