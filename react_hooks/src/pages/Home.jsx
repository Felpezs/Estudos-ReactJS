import HookUseCallback from "../components/HookUseCallback";
import HookUseEffect from "../components/HookUseEffect";
import HookUseLayoutEffect from "../components/HookUseLayoutEffect";
import HookUseReducer from "../components/HookUseReducer";
import HookUseRef from "../components/HookUseRef";

const Home = () => {
  return (
    <div>
      <HookUseReducer />
      <HookUseEffect />
      <HookUseRef />
      <HookUseCallback />
      <HookUseLayoutEffect />
    </div>
  );
};

export default Home;
