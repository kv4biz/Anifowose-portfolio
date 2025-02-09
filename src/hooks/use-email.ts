// src/hooks/use-email.ts
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface EmailFormData {
  name: string;
  email: string;
  message: string;
}

export const useEmail = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const sendEmail = async (data: EmailFormData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to send email");
      }
      setLoading(false);
      toast({
        title: "Success",
        description: "Email sent successfully!",
        variant: "default",
      });
      return result;
    } catch (err: any) {
      const errorMessage = err.message || "Something went wrong";
      setError(errorMessage);
      setLoading(false);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      throw err;
    }
  };

  return { sendEmail, loading, error };
};
