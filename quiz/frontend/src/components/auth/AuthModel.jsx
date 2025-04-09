import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { FiX } from "react-icons/fi";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLoginView, setIsLoginView] = useState(true);

  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-[100] overflow-y-auto"
        onClose={onClose}
        static
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="min-h-screen flex items-center justify-center p-4">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-zinc-800 p-6 text-left align-middle shadow-xl transition-all border border-gray-200 dark:border-zinc-700">
              <div className="flex justify-between items-start">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 text-gray-900 dark:text-white"
                >
                  {isLoginView ? "Welcome Back" : "Join Us"}
                </Dialog.Title>
                <button
                  type="button"
                  className="rounded-md p-1 text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
                  onClick={onClose}
                >
                  {/* <FiX className="h-5 w-5" /> */}
                </button>
              </div>

              <div className="mt-6">
                {isLoginView ? (
                  <LoginForm onSuccess={onClose} />
                ) : (
                  <RegisterForm onSuccess={onClose} />
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-zinc-700 text-center text-sm text-gray-600 dark:text-gray-400">
                {isLoginView ? (
                  <>
                    New to our platform?{" "}
                    <button
                      type="button"
                      className="font-medium text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
                      onClick={toggleView}
                    >
                      Create account
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="font-medium text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
                      onClick={toggleView}
                    >
                      Sign in
                    </button>
                  </>
                )}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AuthModal;
