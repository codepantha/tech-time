import { Sponsors } from './components';
import { About, Courses, Header } from './containers';

function App() {
  return (
    <div className="max-h-full bg-[#f8f9fc]">
      <Header />
      <Sponsors />
      <About />
      <Courses />
    </div>
  );
}

export default App;
