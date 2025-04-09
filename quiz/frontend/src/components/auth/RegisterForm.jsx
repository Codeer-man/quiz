import React from "react";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center p-4 bg-gray-100 dark:bg-zinc-800">
      <form className="w-full max-w-md bg-white dark:bg-zinc-900 shadow-xl rounded-xl overflow-hidden border border-blue-300 dark:border-blue-700 transition-all duration-300 hover:shadow-2xl">
        <div className="px-6 py-8 sm:px-10 sm:py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 dark:text-white mb-2">
              Create Account
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Join us today to get started
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                id="name"
                type="text"
                required
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                id="email"
                type="email"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                  htmlFor="password"
                >
                  Password
                </label>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  (min 8 characters)
                </span>
              </div>
              <input
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                id="password"
                type="password"
                required
                minLength="8"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                id="confirmPassword"
                type="password"
                required
                minLength="8"
              />
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-800 dark:ring-offset-zinc-900"
                required
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-zinc-700 dark:text-zinc-300"
              >
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Terms & Conditions
                </Link>
              </label>
            </div>

            <button
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 transition-all duration-200 shadow-md hover:shadow-lg"
              type="submit"
            >
              Create Account
            </button>
          </div>
        </div>

        <div className="px-6 py-4 bg-blue-50 dark:bg-zinc-800/50 text-center border-t border-blue-100 dark:border-zinc-700">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
