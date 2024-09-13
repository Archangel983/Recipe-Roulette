'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChefHat, Facebook, Instagram, Twitter } from "lucide-react"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-800">Recipe Roulette</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-orange-500">Home</Link>
            <Link href="/generator" className="text-gray-600 hover:text-orange-500">Recipe Generator</Link>
            <Link href="/upload" className="text-gray-600 hover:text-orange-500">Upload Recipe</Link>
            <Link href="/about" className="text-gray-600 hover:text-orange-500">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-orange-500">Contact</Link>
          </nav>
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
            <p className="text-2xl mb-8">Spin Your Ingredients into Delicious Meals</p>
            <div className="space-x-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600"
                onClick={() => {
                  window.location.href = "/generator";
                }}
                >
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
            <h2 className="text-3xl font-bold text-center mb-8 text-black">Recipe of the Day</h2>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <Image
                  src="/chickenBiryani.jpg?height=300&width=600"
                  alt="Recipe of the day"
                  width={600}
                  height={300}
                  className="rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Chicken Biryani</h3>
                <p className="text-gray-600 mb-4"></p>
                <Button>View Recipe</Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Recipe Roulette</h3>
              <p className="text-gray-400">Discover and share amazing recipes</p>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}