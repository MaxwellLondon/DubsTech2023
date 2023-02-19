import './App.css';
const { tableau } = window;


function App() {
  return (
    <div className="App">
      
      <header className="Crime-Stats">
        <script src="https://YOUR-SERVER/javascripts/api/tableau-2.min.js"></script>
        <p>
          Crime stats, brought to you by Datathots
        </p>
      </header>

      <body className="description">
        <p>Put a brief description of how the map works</p>
        <div id="vizContainer"></div>
      </body>


      <footer className="bottom">
        <a
          href="https://www.instagram.com/dubstechuw/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out UW DubsTech!
        </a>
      </footer>

    </div>
  );
}

function initViz() {
  var containerDiv = document.getElementById("vizContainer")
  const url = "https://10az.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js%27%3E";

  let viz = new tableau.Viz(containerDiv, url);
}

document.addEventListener("DOMContentLoaded", initViz);


export default App;
