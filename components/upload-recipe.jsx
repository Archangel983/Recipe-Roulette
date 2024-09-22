"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export function UploadRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    image: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!recipe.name.trim()) newErrors.name = "Recipe name is required";
    if (!recipe.ingredients.trim())
      newErrors.ingredients = "Ingredients are required";
    if (!recipe.instructions.trim())
      newErrors.instructions = "Cooking instructions are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const ingredientsArray = recipe.ingredients
          .split("\n")
          .map((ing) => ing.trim()); // Convert ingredients to an array

        const { data, error } = await supabase.from("recipes").insert([
          {
            name: recipe.name,
            ingredients: ingredientsArray, // Save as an array
            instructions: recipe.instructions
              .split("\n")
              .map((inst) => inst.trim()), // Convert instructions to an array if needed
            image: recipe.image,
          },
        ]);

        if (error) {
          throw error;
        }

        setIsSubmitted(true);
      } catch (error) {
        console.error("Error saving recipe:", error.message);
        // Handle error state or display error message
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white text-black rounded-lg shadow-md">
        <Alert>
          <Check className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your recipe has been uploaded!
            {/* This is the View Your Recipe Section */}
            {/* <a href="#" className="ml-1 text-orange-500 hover:underline">
              View your recipe
            </a> */}   
          </AlertDescription> 
        </Alert>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary text-black">
        Upload Your Own Recipe
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-black">
          <Label htmlFor="name">Recipe Name</Label>
          <Input
            id="name"
            name="name"
            value={recipe.name}
            onChange={handleInputChange}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="text-black">
          <Label htmlFor="ingredients">Ingredients (one per line)</Label>
          <Textarea
            id="ingredients"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleInputChange}
            className={`min-h-[100px] ${
              errors.ingredients ? "border-red-500" : ""
            }`}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>
        <div className="text-black">
          <Label htmlFor="instructions">Cooking Instructions</Label>
          <Textarea
            id="instructions"
            name="instructions"
            value={recipe.instructions}
            onChange={handleInputChange}
            className={`min-h-[150px] ${
              errors.instructions ? "border-red-500" : ""
            }`}
          />
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>
        <div className="text-black">
          <Label htmlFor="image">Recipe Image URL (optional)</Label>
          <Input
            id="image"
            name="image"
            type="url"
            value={recipe.image}
            onChange={handleInputChange}
            placeholder="Enter image URL"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
          />
        </div>
        <Button type="submit" className="w-full text-white">
          Submit Recipe
        </Button>
      </form>
    </div>
  );
}
