import { bindActionCreators } from "redux";

const increment = (payload) => ({ type: "INCREMENT", payload });
const decrement = (payload) => ({ type: "DECREMENT", payload });
const reset = () => ({ type: "RESET" });

const counterActions = { increment, decrement, reset };

const boundActions = (dp) => {
  return bindActionCreators(counterActions, dp);
};

export default boundActions;
