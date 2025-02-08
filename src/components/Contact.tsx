"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const Contact = () => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Implement form submission logic here.
  };

  return (
    <div className="container mx-auto px-4 lg:px-10 py-20">
      {/* Row 1: Headline & Calendly Button */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
        {/* Left side: Title and tagline */}
        <div className="max-w-xl font-roboto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-500">
            Let's Elevate Your Financial Strategy
          </h2>
          <p className="mt-2 text-sm font-light text-gray-700">
            Schedule a consultation to discuss your financial goals today.
          </p>
        </div>
        {/* Right side: Calendly button */}
        <div className="mt-6 lg:mt-0">
          <Button
            variant="outline"
            className="hover:bg-gray-700 bg-white  hover:text-white text-gray-700"
          >
            Schedule
          </Button>
        </div>
      </div>

      {/* Row 2: Contact Details & Contact Form */}
      <div className="flex flex-col lg:flex-row gap-10 font-semibold lg:px-10">
        {/* Left Column: Contact Details */}
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-bold mb-4 text-gray-700">
            Get in Touch
          </h3>
          <div className="flex max-w-sm">
            <p className="mb-4 lg:mb-8 text-sm font-light text-gray-600">
              Lorem ipsum dolor sit amet. Ab harum quos non quod corrupti ut
              possimus quam hic cumque recusandae quo ipsum fugiat ea magn.
            </p>
          </div>
          <div className="flex-col flex gap-4 lg:gap-10">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-white rounded-full shadow-lg">
                  <MapPin className="w-6 h-6 text-gray-900" />
                </div>
              </div>
              <div>
                <p className="text-lg font-medium text-[#133679]">Address</p>
                <p className="font-light text-sm text-gray-600">Luton</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-white rounded-full shadow-lg">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
              </div>
              <div>
                <p className="text-lg font-medium text-[#133679]">
                  Phone Number
                </p>
                <p className="font-light text-sm text-gray-600">07494232442</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-white rounded-full shadow-lg">
                  <Mail className="w-6 h-6 text-gray-900" />
                </div>
              </div>
              <div>
                <p className="text-lg font-medium text-[#133679]">Email</p>
                <p className="font-light text-sm text-gray-600">
                  taofiqanney@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:w-1/2 mx-5 border rounded-md shadow-lg p-5 lg:px-8">
          <h3 className="text-2xl font-bold mb-4 text-[#133679]">
            Send a Message
          </h3>
          <Form {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormField
                control={methods.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        className="w-full border border-gray-300 rounded-md placeholder:font-light px-3 py-2 text-sm"
                        placeholder="Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={methods.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        type="email"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 placeholder:font-light text-sm"
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={methods.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <textarea
                        className="w-full border border-gray-300 rounded-md px-3 py-2 placeholder:font-light text-sm"
                        placeholder="Message"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-[#133679] rounded-sm hover:bg-white hover:text-[#133679] hover:border hover:border-[#133679]"
              >
                Send
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
