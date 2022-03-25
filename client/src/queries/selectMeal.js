import gql from 'graphql-tag';

const selectMeal = gql`
  mutation selectMeal($selections: [MealSelectionInput!]!) {
      selectMeal(selections: $selections){
        success
      }
    }
`;

export default selectMeal;
