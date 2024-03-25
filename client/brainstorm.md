Idea:

Game component conditionally renders the right category... 
OR could have the parent component have the logic to determine which category will render. 
- Then can pass down to the render child the variable with the string containing the category name and the data.
- Inside this child component, might try to display the image and the options.
- selected State gets updated which calls the parent component.
- the parent component is the one passing down all the info;
          - array of three films
              - 2 random films
              - correct film
              - all three films in a random order, ensuring they are unique - possible as an array?
          - setSelectedAnswer
          - setScore
          - image to display - depending on category, might be a food item, a character, a creature or a 'ride'


parent is smart and contains logic.

FOR NOW make a start using characters and foods and will make required changes as we move along.