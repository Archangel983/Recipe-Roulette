'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function UploadRecipe() {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    image: null,
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setRecipe(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0] || null
    setRecipe(prev => ({ ...prev, image: file }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!recipe.name.trim()) newErrors.name = 'Recipe name is required'
    if (!recipe.ingredients.trim()) newErrors.ingredients = 'Ingredients are required'
    if (!recipe.instructions.trim()) newErrors.instructions = 'Cooking instructions are required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Simulating API call to upload recipe
      setTimeout(() => {
        setIsSubmitted(true)
      }, 1000)
    }
  }

  if (isSubmitted) {
    return (
      (<div className="max-w-md mx-auto mt-8 p-6 bg-white text-black rounded-lg shadow-md">
        <Alert>
          <Check className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your recipe has been uploaded! 
            <a href="#" className="ml-1 text-orange-500 hover:underline">View your recipe</a>
          </AlertDescription>
        </Alert>
      </div>)
    );
  }

  return (
    (<div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary text-black">Upload Your Own Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-black">
          <Label htmlFor="name">Recipe Name</Label>
          <Input
            id="name"
            name="name"
            value={recipe.name}
            onChange={handleInputChange}
            className={errors.name ? 'border-red-500' : ''} />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="text-black">
          <Label htmlFor="ingredients">Ingredients (one per line)</Label>
          <Textarea
            id="ingredients"
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleInputChange}
            className={`min-h-[100px] ${errors.ingredients ? 'border-red-500' : ''}`} />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>
        <div className="text-black">
          <Label htmlFor="instructions">Cooking Instructions</Label>
          <Textarea
            id="instructions"
            name="instructions"
            value={recipe.instructions}
            onChange={handleInputChange}
            className={`min-h-[150px] ${errors.instructions ? 'border-red-500' : ''}`} />
          {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
        </div>
        <div className="text-black">
          <Label htmlFor="image">Recipe Image (optional)</Label>
          <Input
            id="image"
            name="image"
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
            className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90" />
        </div>
        <Button type="submit" className="w-full text-black">
          Submit Recipe
        </Button>
      </form>
    </div>)
  );
}