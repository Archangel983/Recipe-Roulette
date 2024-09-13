'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Terms() {
  return (
    (<div className="min-h-screen bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
          Terms and Conditions
        </h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-500">1. General Use of the Website</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-4">
            <p>By accessing and using Recipe Roulette, you agree to comply with these Terms and Conditions.</p>
            <p>You agree not to use the website for any unlawful purpose or in any way that could damage, disable, overburden, or impair our servers or networks.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-500">2. User Responsibilities when Uploading Recipes</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-4">
            <p>When uploading recipes, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Only upload recipes that you have the right to share</li>
              <li>Provide accurate and complete information about the recipe</li>
              <li>Not upload any content that is offensive, harmful, or violates any laws</li>
              <li>Take full responsibility for the content you upload</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-500">3. Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-4">
            <p>All content on Recipe Roulette, including but not limited to text, graphics, logos, and software, is the property of Recipe Roulette or its content suppliers and is protected by copyright laws.</p>
            <p>Users retain ownership of the recipes they upload but grant Recipe Roulette a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute the content on the platform.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-500">4. Limitations of Liability</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-4">
            <p>Recipe Roulette is provided "as is" without any warranties, express or implied.</p>
            <p>We do not guarantee the accuracy, completeness, or usefulness of any information on the website.</p>
            <p>Recipe Roulette will not be liable for any damages or losses resulting from the use of the website or any recipes found on it.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-500">5. Governing Law</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-4">
            <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>
            <p>Any disputes arising under or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts located in [Your Jurisdiction].</p>
          </CardContent>
        </Card>

      </div>
    </div>)
  );
}