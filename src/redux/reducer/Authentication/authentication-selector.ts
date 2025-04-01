import { useSelector } from "react-redux";

export const useAuthenticationSelector = () => useSelector((state: any) => state.authentication);
