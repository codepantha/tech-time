import { Sponsors } from './components';
import {
  About, Courses, Header, Testimonials,
} from './containers';

function App() {
  return (
    <div className="max-h-full bg-[#f8f9fc]">
      <Header />
      <Sponsors />
      <About />
      <Courses />
      <Testimonials />
    </div>
  );
}

export default App;
