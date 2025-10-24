import Header from "@/components/Header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "What is APKMirror?",
      answer: "APKMirror is a website that hosts a large collection of free APK files for Android applications. We provide a safe and reliable platform for users to download Android apps."
    },
    {
      question: "Is it safe to download APKs from APKMirror?",
      answer: "Yes! All APKs uploaded to APKMirror are verified by our team. We check the cryptographic signatures to ensure they match the originals from the Play Store or trusted developers."
    },
    {
      question: "Why would I download an APK instead of getting it from the Play Store?",
      answer: "There are several reasons: you might want an older version of an app, access an app not available in your region, or get early access to beta versions of apps."
    },
    {
      question: "How do I install an APK file?",
      answer: "First, enable 'Install from Unknown Sources' in your Android settings. Then download the APK file and tap it to begin installation. Follow the on-screen prompts to complete the installation."
    },
    {
      question: "Are all apps on APKMirror free?",
      answer: "APKMirror hosts both free and paid apps. However, we only provide APK files that developers have made available. We do not host pirated or cracked versions of paid apps."
    },
    {
      question: "How often are APKs updated?",
      answer: "We update APK files as soon as new versions are released by developers. Our team works around the clock to ensure you have access to the latest versions."
    },
    {
      question: "Can I request a specific app?",
      answer: "While we appreciate suggestions, we cannot guarantee that every requested app will be added. We focus on popular apps and those from trusted developers."
    },
    {
      question: "Do you support app updates?",
      answer: "Yes! Once you've installed an app from APKMirror, you can check back for newer versions. We recommend checking regularly for updates to ensure you have the latest features and security patches."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6 border">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 bg-card p-6 rounded-lg border">
          <h2 className="text-xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-4">
            If you couldn't find the answer you were looking for, feel free to contact our support team.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[hsl(var(--apk-orange))] text-white px-6 py-2 rounded hover:bg-[hsl(var(--apk-orange-dark))] transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </main>

      <footer className="bg-card border-t mt-12 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 APKMirror. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
