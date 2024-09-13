'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Mail } from 'lucide-react'

export function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    (<div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-white shadow-lg border border-orange-100">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-orange-600">Get in Touch</CardTitle>
            <CardDescription className="text-orange-500">
              We'd love to hear from you! Fill out the form below to send us a message.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-orange-700">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    required
                    className="border-orange-200 focus:border-orange-500 focus:ring-orange-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-orange-700">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="border-orange-200 focus:border-orange-500 focus:ring-orange-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-orange-700">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    required
                    className="border-orange-200 focus:border-orange-500 focus:ring-orange-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-orange-700">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    className="min-h-[150px] border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    required />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white">Submit</Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-2xl font-semibold text-orange-600 mb-2">Thank you!</h3>
                <p className="text-orange-500">We'll get back to you shortly.</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-orange-600 mb-4">Other Ways to Reach Us</h2>
          <div className="flex justify-center space-x-8">
            <div className="flex items-center text-orange-600">
              <Mail className="h-5 w-5 mr-2" />
              <a href="mailto:contact@reciperoulette.com" className="hover:underline">contact@reciperoulette.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}