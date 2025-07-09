import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { Github, MessageCircle, Twitter } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-lg mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">{siteConfig.logo}</span>
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </div>
            <p className="text-muted-foreground text-sm">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={siteConfig.discord.inviteUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Discord">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/getting-started" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Getting Started</Link></li>
              <li><Link to="/components" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Components</Link></li>
              <li><Link to="/examples" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Examples</Link></li>
              <li><Link to="/changelog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Changelog</Link></li>
              <li><Link to="/feedback" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Feedback</Link></li>
            </ul>
          </div>


          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">Subscribe to our newsletter for the latest updates and news.</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button>
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
