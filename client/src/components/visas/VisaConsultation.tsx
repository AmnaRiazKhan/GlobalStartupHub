import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";

const consultationSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  country: z.string().min(1, "Please select your country"),
  businessStage: z.string().min(1, "Please select your business stage"),
});

type ConsultationFormValues = z.infer<typeof consultationSchema>;

const VisaConsultation = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      email: "",
      country: "",
      businessStage: "",
    },
  });
  
  const onSubmit = async (data: ConsultationFormValues) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/consultation", data);
      
      toast({
        title: "Consultation Scheduled",
        description: "We'll be in touch shortly to confirm your appointment.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem scheduling your consultation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const countries = [
    { value: "india", label: "India" },
    { value: "china", label: "China" },
    { value: "brazil", label: "Brazil" },
    { value: "uk", label: "United Kingdom" },
    { value: "nigeria", label: "Nigeria" },
    { value: "france", label: "France" },
    { value: "germany", label: "Germany" },
    { value: "canada", label: "Canada" },
    { value: "australia", label: "Australia" },
    { value: "mexico", label: "Mexico" },
    { value: "other", label: "Other" },
  ];
  
  const businessStages = [
    { value: "idea", label: "Idea Stage" },
    { value: "mvp", label: "MVP/Prototype" },
    { value: "revenue", label: "Early Revenue" },
    { value: "growth", label: "Growth Stage" },
  ];

  return (
    <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-6">How to Choose the Right Visa</h3>
          <p className="text-neutral-600 mb-8">
            With 15+ potential visa pathways for entrepreneurs, finding the optimal solution requires 
            expertise and strategic planning.
          </p>
          
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Comprehensive Assessment",
                description: "We evaluate your business plan, nationality, investment capability, and timeline."
              },
              {
                step: 2,
                title: "Strategic Planning",
                description: "We create a visa pathway aligned with your business goals and funding requirements."
              },
              {
                step: 3,
                title: "Optimization",
                description: "We structure your business and application to maximize approval chances."
              },
              {
                step: 4,
                title: "Long-Term Planning",
                description: "We develop a path to permanent residency alongside your business growth."
              }
            ].map((step) => (
              <div key={step.step} className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-white text-sm">{step.step}</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{step.title}</h4>
                  <p className="mt-1 text-neutral-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h4 className="text-xl font-bold mb-6">Schedule a Visa Consultation</h4>
            <p className="text-neutral-600 mb-6">
              Our immigration experts will analyze your situation and recommend the optimal visa pathway.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country of Origin</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country.value} value={country.value}>
                              {country.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="businessStage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Stage</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your stage" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {businessStages.map((stage) => (
                            <SelectItem key={stage.value} value={stage.value}>
                              {stage.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Scheduling..." : "Schedule Consultation"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaConsultation;
