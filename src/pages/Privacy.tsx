import { motion } from "framer-motion";

export const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We may use the information we collect to provide, maintain, and improve our services, send you technical notices and support messages, and communicate with you about products and services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not share your personal information with third parties except as described in this Privacy Policy or with your consent.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="mb-4">
              We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Changes to This Policy</h2>
            <p>
              We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Privacy;
