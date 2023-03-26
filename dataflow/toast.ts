import {
  atom,
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const toastState = atom({
  key: "toast",
  default: {
    type: "success",
    message: "",
    shown: false,
  },
});

export const useToast = () => {
  const [state, setState] = useRecoilState(toastState);

  const showToast = (value: { type: "error" | "success"; message: string }) => {
    setState({ type: value.type, message: value.message, shown: true });
  };

  const closeToast = () => {
    setState({ type: "error", message: "", shown: false });
  };

  return {
    toastType: state.type,
    toastMessage: state.message,
    toastShown: state.shown,
    showToast,
    closeToast,
  };
};
