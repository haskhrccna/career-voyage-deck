import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { FileDown } from "lucide-react";

const CVRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    address: "",
    phone: "",
    email: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent("CV Request");
    const body = encodeURIComponent(`
      Name: ${formData.name}
      Company: ${formData.companyName}
      Address: ${formData.address}
      Phone: ${formData.phone}
      Email: ${formData.email}
    `);
    
    // Open default email client
    window.location.href = `mailto:haskhr@hotmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Request Sent",
      description: "Your CV request has been submitted successfully.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="inline-flex items-center justify-center px-8 py-3">
          <FileDown className="mr-2 h-4 w-4" />
          Request CV
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request CV</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name *</Label>
            <Input
              id="companyName"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address *</Label>
            <Input
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="w-full">Submit Request</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CVRequestForm;