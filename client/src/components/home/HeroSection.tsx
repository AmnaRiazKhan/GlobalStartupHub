import { Link } from "wouter";
import { CheckCircle, Globe, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-blue-50 to-indigo-50 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M11%2018c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm48%2025c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm-43-7c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm63%2031c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM34%2090c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm56-76c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zM12%2086c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm28-65c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm23-11c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-6%2060c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm29%2022c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zM32%2063c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm57-13c2.76%200%205-2.24%205-5s-2.24-5-5-5-5%202.24-5%205%202.24%205%205%205zm-9-21c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM60%2091c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM35%2041c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202zM12%2060c1.105%200%202-.895%202-2s-.895-2-2-2-2%20.895-2%202%20.895%202%202%202z%22%20fill%3D%22%232563eb%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Empowering <span className="text-primary">Immigrant Entrepreneurs</span> to Succeed
            </h1>
            <p className="mt-6 text-lg text-neutral-600 max-w-2xl">
              We combine venture capital funding with immigration expertise to help foreign-born founders 
              build successful businesses in the United States.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-primary hover:bg-primary-600 text-white text-center font-medium py-3 px-6 rounded-md transition shadow-lg shadow-primary/20">
                Start Your Journey
              </Link>
              <Link href="/about" className="bg-white hover:bg-gray-50 text-primary text-center border border-primary font-medium py-3 px-6 rounded-md transition">
                Learn More
              </Link>
            </div>
            <div className="mt-8 flex items-center">
              <span className="text-neutral-600">Trusted by entrepreneurs from</span>
              <div className="ml-4 flex space-x-4">
                <span className="font-medium">50+ countries</span>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white p-6 rounded-2xl shadow-xl">
              <div className="aspect-video mb-6 bg-neutral-100 rounded-lg overflow-hidden">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1663127104392-609b4c06699b?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Diverse team of entrepreneurs working together" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="rounded-full bg-green-100 p-2 mr-4">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Dual Pathway Approach</h3>
                    <p className="text-sm text-neutral-600">Visa assistance + Venture funding</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="rounded-full bg-blue-100 p-2 mr-4">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">15+ Visa Types</h3>
                    <p className="text-sm text-neutral-600">Tailored to your business needs</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="rounded-full bg-amber-100 p-2 mr-4">
                    <TrendingUp className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">$120M+ Raised</h3>
                    <p className="text-sm text-neutral-600">For our portfolio companies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
