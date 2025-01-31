const App = () => {
  return <h1>Hello, World! {process.env.APP_API_URL}</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
