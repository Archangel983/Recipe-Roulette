"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Linkedin, Instagram,Github,Menu } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export function LandingPage() {
  const [recipeOfTheDay, setRecipeOfTheDay] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to fetch recipes and select a random one
    const fetchRecipeOfTheDay = async () => {
      setIsLoading(true);
      const { data: recipes, error } = await supabase
        .from("recipes")
        .select("*");

      if (error) {
        console.error("Error fetching recipes:", error);
      } else if (recipes && recipes.length > 0) {
        // Select a random recipe from the fetched data
        const randomRecipe =
          recipes[Math.floor(Math.random() * recipes.length)];
        setRecipeOfTheDay(randomRecipe);
      }
      setIsLoading(false);
    };

    fetchRecipeOfTheDay();
  }, []);

  const NavLinks = () => (
    <>
      <Link href="/" className="text-gray-600 hover:text-orange-500">
        Home
      </Link>
      <Link href="/generator" className="text-gray-600 hover:text-orange-500">
        Recipe Generator
      </Link>
      <Link href="/upload" className="text-gray-600 hover:text-orange-500">
        Upload Recipe
      </Link>
      <Link href="/about" className="text-gray-600 hover:text-orange-500">
        About
      </Link>
      <Link href="/contact" className="text-gray-600 hover:text-orange-500">
        Contact
      </Link>
    </>
  );

  return (
    (<div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-800">
              Recipe Roulette
            </span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <NavLinks />
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-6">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-grow">
        <section className="relative h-[500px]">
          <Image
            src="/banner.webp?height=500&width=1920"
            alt="Kitchen banner"
            layout="fill"
            objectFit="cover"
            className="brightness-50" />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Recipe Roulette</h1>
            <p className="text-2xl mb-8">
              Spin Your Ingredients into Delicious Meals
            </p>
            <div className="space-x-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600"
                onClick={() => {
                  window.location.href = "/generator";
                }}>
                Find Recipes
              </Button>
              <Button
                onClick={() => {
                  window.location.href = "/upload";
                }}
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-orange-500">
                Upload Your Recipe
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">
              Recipe of the Day
            </h2>
            {isLoading ? (
              <div className="text-center">Loading Recipe of the Day...</div>
            ) : recipeOfTheDay ? (
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-6">
                  {recipeOfTheDay.image && (
                    <img
                      src={recipeOfTheDay.image}
                      alt={recipeOfTheDay.name}
                      width={600}
                      height={300}
                      className="rounded-lg mb-4" />
                  )}
                  <h3 className="text-2xl font-semibold mb-2">
                    {recipeOfTheDay.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Ingredients: {recipeOfTheDay.ingredients.join(", ")}
                  </p>
                  <h4 className="text-xl font-semibold mb-2">Instructions:</h4>
                  <ol className="list-decimal list-inside mb-4 max-h-[300px] overflow-y-auto">
                    {recipeOfTheDay.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ) : (
              <div className="text-center">No recipe available.</div>
            )}
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Recipe Roulette</h3>
              <p className="text-gray-400">
                Discover and share amazing recipes
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="https://github.com/JUSTMEETPATEL" className="text-gray-400 hover:text-white" target="_blank">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="www.linkedin.com/in/meetpatel011" className="text-gray-400 hover:text-white" target="_blank">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://www.instagram.com/just_meet05" className="text-gray-400 hover:text-white" target="_blank">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>)
  );
}