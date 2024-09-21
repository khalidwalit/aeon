import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Blank Page with Navbar</h1>
      </main>
    </div>
  );
};

export default Home;
