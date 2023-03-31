import { Sponsors } from './components';
import { About, Header } from './containers';

function App() {
  return (
    <div className="max-h-full bg-[#f8f9fc]">
      <Header />
      <Sponsors />
      <About />
    </div>
  );
}

export default App;
