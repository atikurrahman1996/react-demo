//React Lists: In React we render lists with loop

//An example of map:

function App() {
  const languages = ["JS", "Python", "Java", "C", "C++", "C#"];

  return (
    <div className="App">
      {languages.map((language) => {
        return <div>I love {language}</div>;
      })}
    </div>
  );
}

export default App;

//
