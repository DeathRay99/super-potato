import Row from "./Components/Row";
import requests from "./requests";
import './App.css';
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
        <Nav/>
        <Banner/>
      <Row title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Top Rated"
          fetchUrl={requests.fetchTopRated}/>
      <Row title="Trending Now"
          fetchUrl={requests.fetchTrending}/>
      <Row title="Action Movies"
          fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries"
          fetchUrl={requests.fetchDocumantaries}/>
    </div>
  );
}

export default App;
