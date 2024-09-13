'use client';
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

export function RandomRecipeGenerator() {
  const [ingredients, setIngredients] = useState('')
  const [recipes, setRecipes] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchRecipes = async (randomize = false) => {
    setIsLoading(true)
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Mock data - in a real app, this would come from an API
    const mockRecipes = [
      {
        name: "Spaghetti Carbonara",
        ingredients: ["spaghetti", "eggs", "pecorino cheese", "guanciale", "black pepper"],
        instructions: ["Cook pasta", "Fry guanciale", "Mix eggs and cheese", "Combine all ingredients"],
        image: "/spaghetti.jpg?height=200&width=300"
      },
      {
        name: "Vegetable Stir Fry",
        ingredients: ["mixed vegetables", "soy sauce", "ginger", "garlic", "vegetable oil"],
        instructions: ["Chop vegetables", "Heat oil in wok", "Stir fry vegetables", "Add sauce and serve"],
        image: "/vegie.jpg?height=200&width=300"
      }
    ]
    
    setRecipes(mockRecipes)
    setIsLoading(false)
  }

  return (
    (<div className="min-h-screen bg-orange-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 
          className="text-4xl font-bold text-orange-600 mb-8 text-center cursor-pointer" 
          onClick={() => {
            window.location.href = "/";
          }}  
        >Recipe Roulette</h1>
        <div className="mb-8 flex gap-4 text-black">
          <Input
            placeholder="Enter ingredients (comma separated)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="flex-grow" />
          <Button
            onClick={() => fetchRecipes()}
            className="bg-orange-500 hover:bg-orange-600 text-white">
            Find Recipes
          </Button>
          <Button
            onClick={() => fetchRecipes(true)}
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-100">
            Randomize
          </Button>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
            <span className="ml-2 text-orange-500">Cooking up some recipes...</span>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {recipes.map((recipe, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-orange-600">{recipe.name}</CardTitle>
                </CardHeader>
                {recipe.image && (
                  <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
                )}
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-2 text-orange-500">Ingredients:</h3>
                  <ul className="list-disc pl-5 mb-4">
                    {recipe.ingredients.map((ingredient, idx) => (
                      <li key={idx}>{ingredient}</li>
                    ))}
                  </ul>
                  <h3 className="font-semibold mb-2 text-orange-500">Instructions:</h3>
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
    </div>)
  );
}