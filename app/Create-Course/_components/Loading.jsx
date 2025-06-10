import React from "react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../../components/ui/alert-dialog"; // Corrected path
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion } from "framer-motion";

function LoadingDialog({ loading }) {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent className="max-w-sm mx-auto p-6 rounded-2xl shadow-xl backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700 transition-all duration-500">
        <AlertDialogHeader className="text-center">
          <AlertDialogTitle>
            <VisuallyHidden>Loading</VisuallyHidden>
          </AlertDialogTitle>

          {/* Smooth Breathing Animation */}
          <motion.div
            className="flex flex-col items-center justify-center py-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/project.gif" // Ensure this file exists in the "public" directory
              width={120}
              height={120}
              alt="AI Processing"
              priority
              className="rounded-xl shadow-md"
            />
          </motion.div>

          {/* Animated Progress Indicator */}
          <motion.div
            className="w-full h-1 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden mt-4"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="h-full bg-blue-500 dark:bg-blue-400"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Enhanced Description */}
          <AlertDialogDescription className="text-gray-700 dark:text-gray-300 text-sm mt-4">
            ✨ Please wait... AI is processing your request. This may take a few
            moments.
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default LoadingDialog;
