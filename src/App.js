import { Sponsors } from './components';
import {
  About, Community, Courses, FAQs, Header, Testimonials,
} from './containers';

function App() {
  return (
    <div className="max-h-full bg-[#f8f9fc]">
      <Header />
      <Sponsors />
      <About />
      <Courses />
      <Testimonials />
      <Community />
      <FAQs />
    </div>
  );
}

export default App;
