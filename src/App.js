import Home from './components/home'
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <ThemeProvider>
          <main className="App">
<Home key="home" />
          </main>
          </ThemeProvider>
  );
}

export default App;
