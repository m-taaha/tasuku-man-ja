import React from "react";
import Spline from "@splinetool/react-spline";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-100 via-beige-100 to-neutral-200 text-neutral-900 flex flex-col">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 mt-10">
        <div className="max-w-lg space-y-5">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Meet{" "}
            <span className="text-neutral-700 font-bold">Tasuku-Man-Ja</span>—
            Your Daily Task Hero 🦸‍♂️
          </h2>
          <p className="text-lg text-neutral-600">
            Organize, prioritize, and conquer your to-dos with a calm, minimal
            interface that makes productivity feel effortless.
          </p>
          <div className="flex gap-4">
            <Button
              onClick={() => navigate("/auth")}
              className="bg-neutral-900 text-white hover:bg-neutral-800"
            >
              Get Started
            </Button>
            <Button variant="outline" className="border-neutral-400">
              Learn More
            </Button>
          </div>
        </div>

        {/* Spline 3D Scene */}
        <div className="w-full md:w-[50%] h-[400px] md:h-[500px] mt-10 md:mt-0">
          <Spline scene="https://prod.spline.design/aFsFeI912uO4zz-g/scene.splinecode" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mt-24 px-10 text-center">
        <h3 className="text-3xl font-semibold mb-10">Why Tasuku-Man-Ja?</h3>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition">
            <h4 className="font-bold text-xl mb-2">🧠 Smart Scheduling</h4>
            <p className="text-neutral-600">
              Tasuku-Man-Ja learns your habits and helps you prioritize what
              really matters.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition">
            <h4 className="font-bold text-xl mb-2">📈 Progress Insights</h4>
            <p className="text-neutral-600">
              Visualize your productivity with intuitive charts and reports.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition">
            <h4 className="font-bold text-xl mb-2">🌿 Calm Interface</h4>
            <p className="text-neutral-600">
              No clutter. Just focus. A soothing environment built for flow.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-center py-8 border-t border-neutral-300 text-neutral-500">
        © 2025 Tasuku-Man-Ja • Built - BY Mohammad Taaha Ashraf
      </footer>
    </div>
  );
}

export default Landing;
