import { Container } from "./styles";
import imgOmelette from "../../assets/image-omelette.jpeg"
export function Home() {
  return (
    <Container>
      <img src={imgOmelette} alt="" />
      <h1>Simple Omelette Recipe</h1>
      <span>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
        to perfection, optionally filled with your choice of cheese, vegetables, or meats.</span>
      <div>
        <h4>Preparation time</h4>
        <ul>
          <li><strong>Total:</strong> Approximately 10 minutes</li>
          <li><strong>Preparation:</strong> 5 minutes</li>
          <li><strong>Cooking:</strong> 5 minutes</li>
        </ul>
      </div>
      <h2>Ingredients</h2>
      <ul>
        <li>2-3 large eggs</li>
        <li>Salt, to taste</li>
        <li>Pepper, to taste</li>
        <li>1 tablespoon of butter or oil</li>
        <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
      </ul>
      <h1>Instructions</h1>
      <ul>
        <li><strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
          You can add a tablespoon of water or milk for a fluffier texture.</li>

        <li><strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.</li>

        <li><strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
          the eggs evenly coat the surface.</li>

        <li><strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in the
          middle, sprinkle your chosen fillings over one half of the omelette.</li>

        <li><strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the
          fillings. Let it cook for another minute, then slide it onto a plate.</li>

        <li><strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.</li>
      </ul>

      <h2>Nutrition</h2>
      <p>The table below shows nutritional values per serving without the additional fillings.</p>
      <table>
        <tr>
          <td>Calories</td><td>277kcal</td>
        </tr>
        <tr>
          <td>Carbs</td><td> 0g</td>
        </tr>
        <tr>
          <td>Protein</td><td>20g</td>
        </tr>
        <tr>
          <td>Fat</td><td>22g</td>
        </tr>
      </table>

    </Container>
  )
}
