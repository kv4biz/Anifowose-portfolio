// components/Contact.tsx
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 lg:px-10 py-20">
      {/* Row 1: Headline & Consultation Button */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
        <div className="max-w-xl font-roboto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-500">
            Let's Elevate Your Financial Strategy
          </h2>
          <p className="mt-2 text-sm font-light text-gray-700">
            Schedule a consultation to discuss your financial goals today.
          </p>
        </div>
        <div className="mt-6 lg:mt-0">
          <Button
            variant="outline"
            className="hover:bg-gray-700 bg-white hover:text-white text-gray-700"
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
        <div className="lg:w-1/2 mx-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
