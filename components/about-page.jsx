'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Users, BookOpen, Share2 } from 'lucide-react'
import Image from 'next/image'

export function AboutPage() {
  return (
    (<div
      className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-5xl font-bold text-center text-orange-600 mb-8">
          About Recipe Roulette
        </h1>

        <Card className="mb-12 bg-white shadow-lg border-orange-100">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our goal is to help you discover exciting new recipes based on ingredients you already have and give you a space to share your own culinary creations. We believe that cooking should be fun, accessible, and full of delightful surprises!
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white shadow-lg border-orange-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">The Team</h2>
              <p className="text-gray-700 leading-relaxed">
                Recipe Roulette was created by a passionate team of food lovers and tech enthusiasts. We combined our love for cooking with our expertise in web development to bring you this unique culinary experience.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg border-orange-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">Our Inspiration</h2>
              <p className="text-gray-700 leading-relaxed">
                Inspired by the joy of unexpected flavor combinations and the thrill of trying new dishes, we created Recipe Roulette to bring that excitement to kitchens around the world.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-orange-600 mb-8">What We Offer</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <Utensils className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-lg font-medium text-gray-800">Random Recipes</h3>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-lg font-medium text-gray-800">Community</h3>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-lg font-medium text-gray-800">Cooking Tips</h3>
            </div>
            <div className="flex flex-col items-center">
              <Share2 className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-lg font-medium text-gray-800">Share Recipes</h3>
            </div>
          </div>
        </div>


        <Card className="bg-white shadow-lg border-orange-100">
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">Join Our Culinary Adventure</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're a seasoned chef or a curious beginner, Recipe Roulette is here to spice up your culinary journey. Let's explore the world of flavors together!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>)
  );
}