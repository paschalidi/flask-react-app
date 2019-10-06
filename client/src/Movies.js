import React from "react";
import { List, Header, Rating } from "semantic-ui-react";

export const Movies = ({ movies }) => (
  <List>
    {movies.map(movie => (
      <List.Item key={movie.id} textAlign='center'>
        <Header>{movie.title}</Header>
        <Rating rating={movie.rating} maxRating={5} disabled />
      </List.Item>
    ))}
  </List>
);
