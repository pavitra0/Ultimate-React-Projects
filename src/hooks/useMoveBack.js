import { useNavigate } from "react-router-dom";

export function useMoveBack() {
  const navigate = useNavigate();
  // return () => navigate("/bookings");
  return () => navigate(-1);
}
