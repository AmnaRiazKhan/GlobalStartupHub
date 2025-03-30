import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

const Newsletter = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });
  
  const onSubscribe = async (data: NewsletterFormValues) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/subscribe", data);
      
      toast({
        title: "Subscription Successful",
        description: "Thank you for subscribing to our newsletter!",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem with your subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-neutral-50 p-8 rounded-xl">
      <h3 className="text-xl font-bold mb-6">Subscribe to Our Newsletter</h3>
      <p className="text-neutral-600 mb-6">
        Stay informed about visa options, funding opportunities, and entrepreneur resources.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubscribe)} className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormControl>
                    <Input placeholder="Your email address" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting} className="whitespace-nowrap">
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
        </form>
      </Form>
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h4 className="font-semibold mb-4">Upcoming Events</h4>
        
        <div className="space-y-6">
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex flex-col items-center justify-center">
                <span className="text-xs font-medium text-primary">OCT</span>
                <span className="text-primary font-bold">15</span>
              </div>
            </div>
            <div>
              <h5 className="font-medium">Visa Options for Tech Founders</h5>
              <p className="text-sm text-neutral-600">Online Webinar • 2:00 PM EST</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex flex-col items-center justify-center">
                <span className="text-xs font-medium text-primary">NOV</span>
                <span className="text-primary font-bold">03</span>
              </div>
            </div>
            <div>
              <h5 className="font-medium">Founder Meetup: New York City</h5>
              <p className="text-sm text-neutral-600">In-Person • 6:30 PM EST</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex flex-col items-center justify-center">
                <span className="text-xs font-medium text-primary">NOV</span>
                <span className="text-primary font-bold">18</span>
              </div>
            </div>
            <div>
              <h5 className="font-medium">Funding Strategies for Immigrant Founders</h5>
              <p className="text-sm text-neutral-600">Online Workshop • 1:00 PM EST</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <a href="/events" className="inline-flex items-center font-medium text-primary hover:text-primary-600 transition">
            View All Events <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
