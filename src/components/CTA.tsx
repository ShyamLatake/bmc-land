import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-coral to-sunshine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <div className="featured-in">
            <h2 className="text-2xl md:text-4xl font-playful mb-6 drop-shadow-md">
              Featured In
            </h2>
            <div className="w-full overflow-x-auto">
  <div className="flex items-center gap-6 md:gap-4 sm:gap-3 min-w-max">
    {[
      {
        src: "/journals_logos/TOI-logo.png",
        alt: "Times of India",
        link: "https://timesofindia.indiatimes.com/education/news/ai-driven-boost-my-child-platform-launched-in-pune-to-enhance-early-education/articleshow/111627433.cms",
      },
      {
        src: "/journals_logos/indianExpress.png",
        alt: "Indian Express",
        link: "https://indianexpress.com/article/cities/pune/pune-inc-boostmychild-app-child-development-9441889/",
      },
      {
        src: "/journals_logos/Free_Press_Journal_logo.jpg",
        alt: "Free Press Journal",
        link: "https://www.freepressjournal.in/pune/pune-vardhan-group-invests-1-crore-in-ai-powered-child-development-initiative",
      },
      {
        src: "/journals_logos/business_standard.png",
        alt: "Business Standard",
        link: "https://www.business-standard.com/content/press-releases-ani/unique-ai-driven-platform-for-children-kick-started-with-an-investment-of-one-crore-from-vardhan-group-124070800869_1.html",
      },
      {
        src: "/journals_logos/press_trust_of_india.png",
        alt: "Business Standard",
        link: "https://www.ptinews.com/press-release/unique-ai-driven-platform-for-children-kick-started-with-an-investment-of-one-crore-from-vardhan-group/1640937",
      },
      {
        src: "/journals_logos/punekarNews.jpeg",
        alt: "Business Standard",
        link: "https://www.punekarnews.in/pune-startup-boostmychild-empowers-parents-and-teachers-with-innovative-child-development-tools/",
      },
      {
        src: "/journals_logos/edTechReview.jpeg",
        alt: "Business Standard",
        link: "https://www.edtechreview.in/news/vardhan-group-launches-boost-my-child-an-ai-powered-app-to-enhance-early-education/",
      },
      {
        src: "/journals_logos/the_bridge_chronicle.png",
        alt: "Business Standard",
        link: "https://www.thebridgechronicle.com/news/vardhan-group-invests-1-crore-in-ai-tech-platform-boostmychild",
      },
      {
        src: "/journals_logos/edukida.jpeg",
        alt: "Business Standard",
        link: "https://www.edukida.in/amp/trending/ai-powered-boost-my-child-platform-launched-in-pune-to-enhance-early-education/10783/",
      },
      {
        src: "/journals_logos/divya_marathi.jpeg",
        alt: "Business Standard",
        link: "https://divyamarathi.bhaskar.com/local/maharashtra/pune/news/boostmychild-supports-holistic-development-of-children-133276077.html",
      },
      {
        src: "/journals_logos/ani_news.png",
        alt: "Business Standard",
        link: "https://www.aninews.in/news/business/unique-ai-driven-platform-for-children-kick-started-with-an-investment-of-one-crore-from-vardhan-group20240708173227/",
      },
      {
        src: "/journals_logos/etv_bharat.png",
        alt: "Business Standard",
        link: "https://www.etvbharat.com/mr/!state/boostmychild-app-gets-a-booster-dose-vardhan-group-invests-rs-1-crore-mhs24070506359",
      },
      {
        src: "/journals_logos/devdiscourse.png",
        alt: "Business Standard",
        link: "https://www.devdiscourse.com/article/education/3009514-boostmychild-revolutionizing-early-childhood-development-with-ai",
      },
      {
        src: "/journals_logos/robinAge.png",
        alt: "Business Standard",
        link: "https://www.robinage.com/evaluating-childrens-development/",
      },
      {
        src: "/journals_logos/Lokmat-Times.jpg",
        alt: "Business Standard",
        link: "https://www.lokmattimes.com/business/unique-ai-driven-platform-for-children-kick-started-with-an-investment-of-one-crore-from-vardhan-group/",
      },
      // add more articles here
    ].map((article, idx) => (
      <img
        key={idx}
        src={article.src}
        alt={article.alt}
        className="h-12 w-auto cursor-pointer rounded-lg transition-transform duration-200 hover:scale-105"
        onClick={() => window.open(article.link, "_blank")}
      />
    ))}
  </div>
</div>

          </div>

          <h2 className="text-3xl md:text-4xl font-playful mb-6 drop-shadow-md">
            Ready for a Magical Learning Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-95 font-medium">
            Thousands of preschools and families already using BoostMyChild to
            help little ones discover their amazing potential!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="bg-white text-coral px-8 py-4 rounded-full hover:bg-mint hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-lg font-bold shadow-lg">
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-4 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-coral transition-all duration-300 text-lg font-bold shadow-lg">
              Schedule Demo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-mint" />
              <span className="font-semibold text-xl">30-day free trial</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-mint" />
              <span className="font-semibold text-xl">No setup fees</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-mint" />
              <span className="font-semibold text-xl">Cancel anytime</span>
            </div>
          </div>

          <div className="certification-logos w-full gap-10 mt-4">
            <img
              className="certification-logo-image"
              src="/DPIIT-logo.png"
              alt="DPIIT-logo"
            />
            <img
              className="certification-logo-image"
              src="maharashtra_startup.png"
              alt="maharashtra_startup"
            />
            <img
              className="certification-logo-image"
              src="msme_logo.png"
              alt="msme_logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
