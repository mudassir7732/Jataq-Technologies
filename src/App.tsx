import React, { FC, StrictMode } from "react";
import AppRoutes from "./routes";

const App: FC = () => {
  return (
    <StrictMode>
      <AppRoutes />
    </StrictMode>
  )
}
export default App; 