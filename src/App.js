import Hello from "./Hello";
import Counter from "./Counter";
// import Todo from "./Todo";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  page = 15
  capitalizeFirstLetter= (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
state={
  progress:10
}
setProgress=(progress)=>{
  this.setState({progress : progress})
}
apiKey = process.env.REACT_APP_NEWS_API

  render() {
    // const [mode,setMode] = useState("light")

    // const toggleMode =()=>{
    //   {mode==="light"?setMode("dark"):setMode("light")}

    // }
    // const [background,setBackground] = useState()
  
    return (
      <>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.page}  category="general" />}
            />
            <Route
              path="/business"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.page} category="business" />}
            />
            <Route
              path="/sports"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.page} category="sports" />}
            />
            <Route
              path="/science"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.page} category="science" />}
            />
            <Route
              path="/technology"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.page} category="technology" />}
            />
            <Route
              path="/health"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.page} category="health" />}
            />
            <Route
              path="/entertainment"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.page} category="entertainment" />}
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
