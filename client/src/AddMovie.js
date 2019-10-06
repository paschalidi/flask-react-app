import React, { useState } from "react";
import { Button, Form, Input, Rating } from "semantic-ui-react";

export const AddMovie = ({ onNewMovie }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  return (
    <Form>
      <Form.Field>
        <Input
          value={title}
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Rating
          icon="star"
          defaultRating={rating}
          size="large"
          maxRating={5}
          rating={rating}
          onRate={(_, data) => setRating(data.rating)}
        />
      </Form.Field>
      <Form.Field>
        <Button
          onClick={async () => {
            const movie = { rating, title };
            const response = await fetch("/add-movie", {
              method: "POST",
              body: JSON.stringify(movie),
              headers: { "Content-Type": "application/json" }
            });
            if (response.ok) {
              onNewMovie(movie);
              setTitle("");
              setRating(1);
            }
          }}
        >
          Submit
        </Button>
      </Form.Field>
    </Form>
  );
};
