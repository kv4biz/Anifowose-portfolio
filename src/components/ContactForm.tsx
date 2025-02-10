"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useEmail } from "@/hooks/use-email";

// Create a Zod schema for the contact form.
const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

// Infer the form data type from the schema.
export type FormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const { sendEmail, loading, error } = useEmail();

  const onSubmit = async (data: FormData) => {
    try {
      await sendEmail(data);
      methods.reset(); // Reset the form after successful submission.
    } catch (err) {
      // Handle error if needed.
    }
  };

  return (
    <div className="border rounded-md shadow-lg p-5 lg:px-8 font-roboto">
      <h3 className="text-2xl font-bold mb-4 text-[#000080]">Send a Message</h3>
      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={methods.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <input
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:font-light"
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
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:font-light"
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
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder:font-light"
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
            className="w-full bg-[#000080] rounded-sm hover:bg-white hover:text-[#000080] hover:border hover:border-[#000080]"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </Button>
          {error && <p className="text-red-500 text-center text-sm">{error}</p>}
        </form>
      </Form>
    </div>
  );
};
