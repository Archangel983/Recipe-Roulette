"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export function RandomRecipeGenerator() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecipes = async (randomize = false) => {
    setIsLoading(true);

    // Fetch recipes from Supabase
    const { data, error } = await supabase.from("recipes").select("*");

    if (error) {
      console.error("Error fetching recipes:", error);
      setIsLoading(false);
      return;
    }

    // Convert input ingredients to lowercase
    const inputIngredients = ingredients
      .split(",")
      .map((ing) => ing.trim().toLowerCase());

    // If randomize is true, select a random recipe
    if (randomize) {
      const randomRecipe = data[Math.floor(Math.random() * data.length)];
      setRecipes([randomRecipe]);
    } else {
      // Filter recipes based on ingredients entered
      const filteredRecipes = data.filter((recipe) =>
        recipe.ingredients.some((ingredient) =>
          inputIngredients.includes(ingredient.toLowerCase())
        )
      );
      setRecipes(filteredRecipes);
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-orange-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-4xl font-bold text-orange-600 mb-8 text-center cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          Recipe Roulette
        </h1>

        <div className="mb-8 flex gap-4 text-black">
          <Input
            placeholder="Enter ingredients (comma separated)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                fetchRecipes();
              }
            }}
            className="flex-grow"
          />

          <Button
            onClick={() => fetchRecipes()}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Find Recipes
          </Button>
          <Button
            onClick={() => fetchRecipes(true)}
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-100"
          >
            Randomize
          </Button>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
            <span className="ml-2 text-orange-500">
              Cooking up some recipes...
            </span>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {recipes.map((recipe, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-orange-600">
                    {recipe.name}
                  </CardTitle>
                </CardHeader>
                {recipe.image && (
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-2 text-orange-500">
                    Ingredients:
                  </h3>
                  <ul className="list-disc pl-5 mb-4">
                    {recipe.ingredients.map((ingredient, idx) => (
                      <li key={idx}>{ingredient}</li>
                    ))}
                  </ul>
                  <h3 className="font-semibold mb-2 text-orange-500">
                    Instructions:
                  </h3>
                  <ol className="list-decimal pl-5">
                    {recipe.instructions.map((instruction, idx) => (
                      <li key={idx}>{instruction}</li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
