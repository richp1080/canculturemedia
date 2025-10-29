import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Building2, GraduationCap, HeartPulse, Shield, Cpu, Phone, Mail, ArrowRight, FileText, Globe2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CanCultureMediaSite() {
  return (
    <div className=\"min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800\">
      <header className=\"sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200\">
        <div className=\"max-w-6xl mx-auto px-4 py-3 flex items-center justify-between\">
          <div className=\"flex items-center gap-2\">
            <Globe2 className=\"h-6 w-6 text-sky-600\" />
            <span className=\"font-semibold tracking-tight\">Can Culture Media, LLC</span>
          </div>
          <nav className=\"hidden md:flex items-center gap-6 text-sm\">
            <a href=\"#solutions\" className=\"hover:text-sky-700\">Solutions</a>
            <a href=\"#about\" className=\"hover:text-sky-700\">About</a>
            <a href=\"#cases\" className=\"hover:text-sky-700\">Case Studies</a>
            <a href=\"#resources\" className=\"hover:text-sky-700\">Resources</a>
            <a href=\"#contact\" className=\"hover:text-sky-700\">Contact</a>
          </nav>
          <div className=\"flex items-center gap-2\">
            <a href=\"#contact\"><Button className=\"rounded-2xl\">Book a Discovery Call</Button></a>
          </div>
        </div>
      </header>
      {/* Additional sections omitted for brevity */}
    </div>
  );
}