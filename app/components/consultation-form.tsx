"use client";

import type React from "react";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export function ConsultationForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+20");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ countryCode, phoneNumber });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-yellow-400">GET FREE CONSULTATION</h2>

      <form onSubmit={handleSubmit} className="flex space-x-2">
        <div className="flex-shrink-0">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="h-12 px-3 rounded-l bg-white/10 text-white border-r border-gray-600 focus:outline-none"
          >
            <option value="+20">+20</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
          </select>
        </div>

        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Type Mobile number"
          className="flex-1 h-12 px-4 bg-white/10 text-white placeholder-gray-400 focus:outline-none"
        />

        <button
          type="submit"
          className="h-12 px-6 bg-blue-500 text-white rounded-r flex items-center space-x-2 hover:bg-blue-600 transition-colors"
        >
          <span>Send Request</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </form>

      <p className="text-gray-300 font-semibold text-base">Schedule Free call for 30 minutes with our business experts</p>
    </div>
  );
}
