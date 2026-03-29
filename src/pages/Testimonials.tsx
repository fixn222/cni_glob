// import React from 'react'

import { Star, ThumbsUp, Upload, Verified } from "lucide-react";
import BorderGlow from "../components/BorderGlow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"

import { Button } from "../components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { feedBackFormSchema } from "../types";
import { Textarea } from "../components/ui/textarea";






export interface Testimonial {
  id?: string;
  name: string;
  role: string;
  country: string;
  feedback: string;
  rating: number;
  avatar?: string;
  highlight?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "James Anderson",
    role: "Student Visa Applicant",
    country: "Canada",
    feedback:
      "The entire visa process was smooth and stress-free. The AI updates and WhatsApp notifications kept me informed at every step.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    highlight: true,
  },
  {
    id: "2",
    name: "Sophia Williams",
    role: "Tourist Visa Applicant",
    country: "Australia",
    feedback:
      "I was amazed by how fast everything was processed. The dashboard made tracking my visa incredibly easy.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "3",
    name: "Liam Johnson",
    role: "Work Visa Applicant",
    country: "United Kingdom",
    feedback:
      "Professional service and excellent communication. The team handled everything efficiently.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: "4",
    name: "Emily Brown",
    role: "Student Visa Applicant",
    country: "Germany",
    feedback:
      "Uploading documents and tracking progress was super easy. Highly recommend this service!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    highlight: true,
  },
  {
    id: "5",
    name: "Noah Davis",
    role: "Tourist Visa Applicant",
    country: "France",
    feedback:
      "Great experience overall. The automation saved me a lot of time and confusion.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: "6",
    name: "Olivia Martinez",
    role: "Work Visa Applicant",
    country: "United States",
    feedback:
      "Fast, reliable, and very modern system. Loved the real-time updates and clean interface.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];


const FeedBackCard = ({ ...Testimonials }: Testimonial) => {
  return (
    <BorderGlow
      edgeSensitivity={30}
      glowColor="40 80 80"
      backgroundColor="#"
      borderRadius={28}
      glowRadius={40}
      glowIntensity={1}
      coneSpread={25}
      animated
      colors={["#c084fc", "#f472b6", "#38bdf8"]}
    >
      <div className="p-10 text-start space-y-2 h-[300px] flex-col justify-center  flex">
        <h2 className="font-extrabold text-2xl">{Testimonials.name}</h2>
        <p className="font-semibold">{Testimonials.feedback}</p>

        <div className="flex flex-row gap-2 mt-5 ">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < Testimonials.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-400"
              }
            />
          ))}
        </div>
      </div>
    </BorderGlow>
  );
};



const Testimonials = () => {

  const form = useForm({
    resolver: zodResolver(feedBackFormSchema),
    defaultValues: {
      name: "",
      feedback: ""
    }
  })


  function onSubmit() {
    // onsole.log();c

  }



  return (
    <section className="w-full flex flex-col items-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center space-y-5 max-w-3xl">
        <div className="bg-white/5 backdrop-blur-2xl flex items-center space-x-3 px-5 py-2 rounded-full">
          <Verified size={18} />
          <span className="font-semibold text-xs sm:text-sm tracking-wide">
            TESTIMONIALS
          </span>
        </div>
        {/* Heading */}
        <h1 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Trusted by all over the world
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg max-w-[350px] text-muted-foreground">
          From country selection to visa approval streamlined for speed and
          clarity.
        </p>
        <div className="sm:w-[1200px] w-full mt-6">
          <Carousel className="w-full max-w-full">
            <CarouselContent className="-ml-2">
              {TESTIMONIALS.map((user) => (
                <CarouselItem
                  key={user.id}
                  className="
                     
                     basis-full
                     sm:basis-1/2
                     lg:basis-1/3
                   "
                >
                  <FeedBackCard {...user} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Hide arrows on mobile */}
            <div className="hidden sm:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>

      <div className="flex flex-col mt-10">
        <Dialog>
          <DialogTrigger>
            <Button className="p-5" variant={"outline"}>
              {" "}
              <span>
                <ThumbsUp />
              </span>{" "}
              Give us your thoughts
            </Button>
          </DialogTrigger>
          
          
          <DialogContent>
              <DialogHeader>
              <DialogTitle><h1 className="text-3xl font-poppins font-bold mb-5 m-5 text-center">Give us your feedback</h1></DialogTitle>
              <DialogDescription>
                <p className="font-medium text-muted-foreground text-center ">
                  rate our service based on your experience
                </p>
              </DialogDescription>
              


                <div className="space-y-5 min-w-full">
                  <Form {...form} >

                    <form className="p-3" onSubmit={form.handleSubmit(onSubmit)}>
                      <div className="gap-5 mb-2">
                        <FormField control={form.control}
                          name="name"
                          render={({ field, fieldState }: any) => (
                            <FormItem>
                              <div className="p-2 font-bold">
                                <FormLabel >Name</FormLabel>

                              </div>
                              <FormControl>

                                <Input placeholder="Enter username" {...field} />
                              </FormControl>
                              {fieldState.error && (
                                <p className="text-sm text-red-500 ml-1 p-2">
                                  {fieldState.error.message}
                                </p>
                              )}
                              {/* <FormMessage name="name" /> */}
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="gap-5 mb-2">
                        <FormField control={form.control}
                          name="feedback"
                          render={({ field, fieldState }: any) => (

                            <FormItem>
                              <div className="p-2">
                                <FormLabel>Feedback</FormLabel>

                              </div>
                              <FormControl>
                                <Textarea placeholder="Give us your feedback" {...field} />
                              </FormControl>
                              {fieldState.error && (
                                <p className="text-sm text-red-500 mt-1 p-2">
                                  {fieldState.error.message}
                                </p>
                              )}

                            </FormItem>
                          )}
                        />
                      </div>

                      <Button type="submit" className="mt-3 w-full" >Submit</Button>

                    </form>

                  </Form>
                </div>


            </DialogHeader>
              </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Testimonials;

