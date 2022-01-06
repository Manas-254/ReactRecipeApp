import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import RecipeApp from "./components/RecipeApp";
import Details from "./components/Details"
import { useState } from 'react';

function App() {
  const [recipe, setrecipe] = useState([
    {
        id: 1,
        name: "Chole Bhatura",
        recipe: "Take chickpeas in a pressure cooker. Add tea bags, 6-8 cups water and salt, cover and cook for 15-20 minutes or till fully done and soft. Drain the chickpeas, discard the tea bags and reserve the stock.Sieve together flour, baking powder, baking soda, salt and powdered sugar in a parat. Add yogurt and mix well.Add some water and knead into a soft dough. Add 1 tablespoon oil and knead well.Set aside for 15-20 minutes.dd ginger-green chilli paste and sauté for 30 seconds. Add coriander powder, cumin powder and chilli powder and mix.Add chole masala and dried mango powder and mix. Add reserved stock, mix and bring mixture to boil.Add dried pomegranate powder and garam masala powder and mix. Add ¼ cup water. Chop tomatoes, add to pan, mix and cook for 2-3 minutes.eat sufficient oil in a kadai. Divide the dough into equal portions and shape into balls. Grease worktop with some oil and roll each ball into thick discs.",
        img: "https://th.bing.com/th/id/OIP.Kvucbnx17O0l9MxuRenh3AHaE5?w=261&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    },
    {
        id: 2,
        name: " Rasmalai",
        recipe: "For the chhenna, bring the milk to a boil over high heat. Set aside to cool slightly to 77°C/170°F.ix the vinegar in one and three-fourth cups of water and add to the hot milk. Stir lightly till the milk curdles. Add three to four cups of water and a few ice cubes and stir.Strain the chhenna through a piece of muslin and squeeze to remove all the water. You should have 250 grams of chhenna.Transfer the chhenna onto a worktop. Mix together half teaspoon of refined flour and the cornflour and add to the chhenna. Knead, pressing with the heel of your hand, till the mixture is smooth. Divide into twenty-five portions and roll into balls and then press lightly to make patties, taking care that there are no cracks. Mix the remaining refined flour with half a cup of water and set aside.ake one cup of the syrup, reserving the rest, in a deep, wide non-stick pan and add four to five cups of water. When the syrup begins to boil add the chhenna patties. Add half the flour-water mixture. The syrup will froth. Cook, gently agitating the syruSlowly drizzle half a cup of water along the sides of the pan every five minutes so that the syrup does not thicken. Continue cooking for fifteen minutes or till the chhenna patties spring back when pressed. This is a sign that they are cooked.o make the rabdi, bring the milk to a boil in a deep, thick-bottomed non-stick pan on high heat Lower heat to medium and cook, stirring, till it reduces to three-fourth its original volume. Scrape off the cream that will collect on the sides of the pan and drop it back into the milk.dd the sugar and saffron, and cook for five minutes longer. Transfer to a deep bowl. Remove each chhenna patty from the syrup, gently press to remove excess syrup and dip into the rabdi. ",
        img: "https://th.bing.com/th/id/OIP.p5OT_4aGsq2SJGTRIDnABAHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    },
    {
        id: 3,
        name: "Corn Bonda",
        recipe: "In a pressure cooker, boil potatoes, peel and mash. Set it aside.Cook corn kernels in water and strain and keep it aside.In a bowl, add boiled and mashed potatoes, cooked corn, salt, red chilli powder and coriander leaves.Mix well and make small lemon sized balls and set it aside.In a bowl add gram flour, rice flour, red chilli powder, salt and sufficient water to make soft and lump free batter.Heat oil in a pan. Dip the potato corn balls in the batter and coat well. Drop them one by one in hot oil and fry till golden brown.",
        img: "https://th.bing.com/th/id/OIP.M06RcWIHsCx1ujOrJYCECgHaE8?w=231&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    }
  ]);
  const [ClickedData, setClickedData] = useState([])

  let getData = (userClick)=>{
    setClickedData(userClick)
  }
console.log(ClickedData)
  return (
    <div className="App">
       <Router>
      
      <div className="App">
        <div className="row border border-secondary">
        <Home/>
        <br/>
        <div className="col-md-4">
        <RecipeApp data={recipe} getData={getData}/>
        </div><br/>
        <div className="col-md-7">
        <Details data={ClickedData}/>
        </div>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
