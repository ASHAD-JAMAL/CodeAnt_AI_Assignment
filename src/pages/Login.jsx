import { SiGithub, SiGitlab, SiSourceforge, SiGit } from "react-icons/si";
import { FaGitlab } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import logo from "../assets/Frame_9.svg";
import StatsCard from "./StatsCard";
import logoBg from "../assets/Subtract.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("SAAS");

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between md:justify-evenly p-4 bg-gray-50 relative">
      {/* Left Section */}
      <div className="relative hidden md:flex flex-col items-center justify-center w-1/2 h-full">
        <img
          src={logoBg}
          alt="Background Decoration"
          className="absolute top-44 left-0 h-full"
        />
        <StatsCard />
      </div>

      {/* Right Section */}
      <div className="w-full max-w-md md:max-w-2xl bg-white rounded-lg shadow-md p-6 sm:p-8 border ">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <img
            src={logo}
            alt="CodeAnt AI Logo"
            className="h-10 sm:h-12 mb-3 sm:mb-4"
          />
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
            Welcome to CodeAnt AI
          </h1>
        </div>

        {/* Tab Section */}
        <div className="flex mb-6 sm:mb-8">
          <button
            className={`flex-1 py-2 px-4 rounded-md text-sm sm:text-base ${
              activeTab === "SAAS"
                ? "bg-primary text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
            onClick={() => setActiveTab("SAAS")}
          >
            SAAS
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-md text-sm sm:text-base ${
              activeTab === "Self Hosted"
                ? "bg-primary text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
            onClick={() => setActiveTab("Self Hosted")}
          >
            Self Hosted
          </button>
        </div>
        <hr className="mb-5 w-full "/>

        {/* Conditional Rendering of Login Options */}
        {activeTab === "SAAS" ? (
          <div className="space-y-3 sm:space-y-4 md:px-20">
            <button
              className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-50 text-sm sm:text-base"
              onClick={() => navigate("/dashboard")}
            >
              <SiGithub className="text-lg sm:text-xl" />
              <span>Sign in with Github</span>
            </button>
            <button
              className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-50 text-sm sm:text-base"
              onClick={() => navigate("/dashboard")}
            >
              <SiGit className="text-lg sm:text-xl text-blue-500" />
              <span>Sign in with Bitbucket</span>
            </button>
            <button
              className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-50 text-sm sm:text-base"
              onClick={() => navigate("/dashboard")}
            >
              <SiSourceforge className="text-lg sm:text-xl text-blue-800" />
              <span>Sign in with Azure Devops</span>
            </button>
            <button
              className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-50 text-sm sm:text-base"
              onClick={() => navigate("/dashboard")}
            >
              <SiGitlab className="text-lg sm:text-xl text-orange-600" />
              <span>Sign in with GitLab</span>
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 md:px-20">
            <button
              className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-50 text-sm sm:text-base"
              onClick={() => navigate("/dashboard")}
            >
              <FaGitlab className="text-lg sm:text-xl text-orange-500" />
              <span>Self Hosted GitLab</span>
            </button>
            <button
              className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-50 text-sm sm:text-base"
              onClick={() => navigate("/dashboard")}
            >
              <IoKeyOutline className="text-lg sm:text-xl" />
              <span>Sign in with SSO</span>
            </button>
          </div>
        )}

        {/* Privacy Policy */}
        <p className="text-center text-xs sm:text-sm text-gray-600 mt-6 sm:mt-8">
          By signing up you agree to the{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Login;
