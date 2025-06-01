import { motion } from "framer-motion";

export const Cookies = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the site owners.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
            <p className="mb-4">
              We use cookies to understand how you use our website and to improve your experience. This includes remembering your preferences and tracking visitor statistics.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Essential cookies:</strong> Necessary for the website to function properly.</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website.</li>
              <li><strong>Preference cookies:</strong> Remember your preferences and settings.</li>
              <li><strong>Marketing cookies:</strong> Used to track visitors across websites for marketing purposes.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
            <p className="mb-4">
              You can control and manage cookies in your browser settings. However, please note that disabling cookies may affect the functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Changes to This Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Cookies;
