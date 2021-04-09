import { BrowserRouter as Router, Route } from "react-router-dom";
import ScanBarcodes from "./views/scan-barcodes/scan-barcodes";

function App() {
  return (
      <Router>
          <div>
              <Route exact path="/" component={ScanBarcodes} />
              <Route exact path="/demo" component={ScanBarcodes} />
          </div>
      </Router>
  )
}

export default App;
