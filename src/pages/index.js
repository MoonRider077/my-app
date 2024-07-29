import React from "react";
import NewMovies from "../features/HomePage/NewMovies";
import NewTrailers from "../features/HomePage/NewTrailers";

function homePage() {
  return (
    <>
      <NewMovies />
      <NewTrailers />
    </>
  );
}

export default homePage;
