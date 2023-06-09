import HookUseCallback from "../components/HookUseCallback";
import HookUseEffect from "../components/HookUseEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseRef from "../components/HookUseRef";

const Home = () => {
  return (
    <div>
      <HookUseReducer />
      <HookUseEffect />
      <HookUseRef />
      <HookUseCallback />
    </div>
  );
};

export default Home;
