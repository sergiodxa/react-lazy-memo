import React, { Component, Suspense, lazy, memo, Fragment } from "react";
import "./App.css";

const sleep = ms => new Promise(r => setTimeout(r, ms));

const Logo = lazy(async () => {
  await sleep(1000);
  return import("./logo.js");
});

const LargeLogo = lazy(async () => {
  await sleep(3000);
  return import("./logo.js");
});

const Placeholder = memo(() => <strong>Loading...</strong>);

class App extends Component {
  state = {
    alt: 'React',
  }
  async componentDidMount() {
    await sleep(5000);
    this.setState({ alt: 'React Lazy' });
  }
  render() {
    return (
      <div className="App">
        <input type="text" />
        <header className="App-header">
          <Suspense maxDuration={300} fallback={<Placeholder />}>
            <Fragment>
              <Logo alt={this.state.alt} />
              <Suspense maxDuration={1500} fallback={<Placeholder />}>
                <LargeLogo alt={this.state.alt} />
              </Suspense>
            </Fragment>
          </Suspense>
        </header>
      </div>
    );
  }
}

export default App;
