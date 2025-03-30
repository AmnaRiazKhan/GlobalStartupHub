import { Link } from "wouter";
import { MessageSquare } from "lucide-react";

const FixedContactButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link 
        href="/contact" 
        className="flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary-600 text-white rounded-full shadow-lg transition-colors"
      >
        <MessageSquare className="h-6 w-6" />
      </Link>
    </div>
  );
};

export default FixedContactButton;
