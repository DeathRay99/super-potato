import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/content";
import Card from "./components/Card";
import Data from "./components/data";

const contents = Data.map(item=> {
  return (
    <Card
      key={item.id}
      // img={item.coverImg}
      // rating={item.stats.rating}
      // reviewCount={item.stats.reviewCount}
      // title={item.title}
      // price={item.price}
      // location={item.location}
      // openSpots={item.openSpots}
      item={item}
    />
  );
});

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <div className="card-list">
      {contents}
      {contents}
      </div>
    </div>
  );
}

export default App;
