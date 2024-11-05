import MainContent from "./components/mainContent";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <section className="font-outfit">
      <div className="grid grid-cols-12 h-[calc(100dvh-8dvh)] w-full">
        <div className="col-span-2 w-full bg-disabled/30 ">
          <Sidebar />
        </div>

        <div className="col-span-10 bg-disabled/80">
          <MainContent />
        </div>
      </div>
    </section>
  );
}

export default App;
