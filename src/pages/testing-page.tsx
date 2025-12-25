// import clsx from "clsx";
import Layout from "@theme/Layout";

// =========For AccordionDemo========
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "../components/ui/accordion";
// ==============================
// ======For AlertDialogDemo==========
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "../components/ui/alert-dialog";
// import { Button } from "../components/ui/button";
// =====================================
// ================For AlertDemo==========
// import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert";
// import { Terminal, AlertCircle } from "lucide-react";
// ========================================
// ======== AspectRatioDemo

// import Image from '@theme/IdealImage'
// import { AspectRatio } from "../components/ui/aspect-ratio";

// ========================================
// ========UserProfile
// import { 
//   Avatar, 
//   AvatarFallback, 
//   AvatarImage 
// } from "../components/ui/avatar";


// function AccordionDemo() {
//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
      
//       {/* type="single" allows only one item to be open at a time */}
//       <Accordion type="single" collapsible className="w-full">
        
//         <AccordionItem value="item-1">
//           <AccordionTrigger>Is it accessible?</AccordionTrigger>
//           <AccordionContent>
//             Yes. It adheres to the WAI-ARIA design pattern.
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem value="item-2">
//           <AccordionTrigger>Is it styled?</AccordionTrigger>
//           <AccordionContent>
//             Yes. It comes with default styles that matches the other
//             components&apos; aesthetic.
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem value="item-3">
//           <AccordionTrigger>Is it animated?</AccordionTrigger>
//           <AccordionContent>
//             Yes. It's animated by default, but you can disable it if you prefer.
//           </AccordionContent>
//         </AccordionItem>

//       </Accordion>
//     </div>
//   );
// }

// function AlertDialogDemo() {
//   const handleDelete = () => {
//     // Your logic for deletion goes here
//     console.log("Item deleted successfully.");
//   };

//   return (
//     <AlertDialog>
//       {/* 1. The Trigger: Usually a button that opens the dialog */}
//       <AlertDialogTrigger asChild>
//         <Button variant="destructive">Delete Account</Button>
//       </AlertDialogTrigger>

//       {/* 2. The Content: The actual modal window */}
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//           <AlertDialogDescription>
//             This action cannot be undone. This will permanently delete your
//             account and remove your data from our servers.
//           </AlertDialogDescription>
//         </AlertDialogHeader>

//         {/* 3. The Footer: Contains the Action and Cancel buttons */}
//         <AlertDialogFooter>
//           <AlertDialogCancel>Cancel</AlertDialogCancel>
//           <AlertDialogAction onClick={handleDelete}>
//             Continue
//           </AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }

// function AlertDemo() {
//   return (
//     <div className="flex flex-col gap-4 max-w-xl mx-auto mt-10">
      
//       {/* Default Alert */}
//       <Alert className="bg-green-700 text-white">
//         <Terminal className="h-4 w-4" />
//         <AlertTitle>Heads up!</AlertTitle>
//         <AlertDescription>
//           You can add components to your app using the cli.
//         </AlertDescription>
//       </Alert>

//       {/* Destructive Alert */}
//       <Alert variant="destructive" className="bg-red-700text-white">
//         <AlertCircle className="h-4 w-4" />
//         <AlertTitle>Error</AlertTitle>
//         <AlertDescription>
//           Your session has expired. Please log in again to continue.
//         </AlertDescription>
//       </Alert>

//     </div>
//   );
// }

// function AspectRatioDemo() {
//   return (
//     <div className="w-[450px] overflow-hidden rounded-md border shadow-sm">
//       <AspectRatio ratio={16 / 9}>
//         <img
//           src="https://github.com/ajay-dhangar.png"
//           alt="Photo by Drew Beamer"
//           className="h-full w-full object-cover"
//         />
//       </AspectRatio>
//       <div className="p-4">
//         <h4 className="text-sm font-medium">Landscape View</h4>
//         <p className="text-xs text-muted-foreground">16:9 Aspect Ratio</p>
//       </div>
//     </div>
//   );
// }

// function UserProfile() {
//   return (
//     <div className="flex items-center gap-4 p-4">
      
//       {/* 1. Standard usage with an image */}
//       <Avatar>
//         <AvatarImage src="https://github.com/ajay-dhangar.png" alt="@ajay-dhangar" />
//         <AvatarFallback>Aj</AvatarFallback>
//       </Avatar>

//       {/* 2. Fallback usage (e.g., if the image URL is broken or null) */}
//       <Avatar>
//         <AvatarImage src="" alt="Broken Link" />
//         <AvatarFallback className="bg-blue-500 text-white">
//           AJ
//         </AvatarFallback>
//       </Avatar>

//       {/* 3. Custom Sizes (using Tailwind classes) */}
//       <Avatar className="h-16 w-16">
//         <AvatarImage src="https://github.com/docusaurus.png" />
//         <AvatarFallback>Docusaurus</AvatarFallback>
//       </Avatar>

//     </div>
//   );
// }

export default function TestingPage() {

  return (
    <Layout>
      <main className="h-screen">
        {/* <AccordionDemo /> */}
        {/* <AlertDialogDemo /> */}
        {/* <AlertDemo /> */}
        {/* <AspectRatioDemo /> */}
        {/* <UserProfile /> */}

      </main>
    </Layout>
  );
}
