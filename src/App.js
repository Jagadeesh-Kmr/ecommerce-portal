import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoiceList from "./components/InvoiceGeneration/InvoiceList";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<InvoiceList />} />
    </Routes>
  </BrowserRouter>
);

export default App;
