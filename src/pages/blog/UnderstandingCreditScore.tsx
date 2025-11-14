import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AvaWidgetInline from "@/components/AvaWidgetInline";
import { Helmet } from "react-helmet";

const UnderstandingCreditScore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Understanding Your Credit Score: What Auto Lenders Really Look For | Jason Sarac</title>
        <meta name="description" content="Decode your credit score and learn what auto lenders actually care about. Expert insights from Jason Sarac on credit factors, scoring models, and how to improve your approval odds." />
        <meta name="keywords" content="credit score explained, what affects credit score, auto lender requirements, credit report Canada, Equifax credit score, improve credit score, Ottawa financing specialist" />
        <link rel="canonical" href="https://saracfinancial.com/blog/understanding-credit-score" />
      </Helmet>

      <div className="min-h-screen bg-black">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-charcoal to-black">
          <div className="container mx-auto px-6">
            <Link to="/#blog">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1 bg-accent/10 text-accent border border-accent/30 rounded-full text-sm font-bold tracking-wider uppercase mb-4">
                Finance Education
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-background mb-6 leading-tight">
                Understanding Your Credit Score: What Lenders <span className="text-transparent bg-clip-text bg-gradient-accent">Really Look For</span>
              </h1>

              <div className="flex items-center gap-6 text-silver/70 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>November 5, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>10 min read</span>
                </div>
              </div>

              <img 
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1200"
                alt="Credit score report with magnifying glass"
                className="w-full h-[400px] object-cover rounded-2xl mb-8"
              />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 bg-black">
          <div className="container mx-auto px-6">
            <article className="max-w-4xl mx-auto prose prose-invert prose-lg">
              <div className="text-silver/90 space-y-6 text-lg leading-relaxed">
                <p className="text-xl text-silver font-medium">
                  Your credit score is like your financial report card, except way more complicated and a lot more important. After 12+ years in the automotive finance game, I've seen thousands of credit reports, and I'm going to let you in on something: most people have no idea what their credit score actually means or what lenders are really looking for.
                </p>

                <p>
                  So let's demystify this thing. I'm going to break down exactly how credit scores work in Canada, what the different factors mean, and most importantly, what auto lenders actually care about when you're trying to finance a vehicle.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">Credit Score Basics: The Foundation</h2>

                <p>
                  In Canada, we primarily use two credit bureaus: Equifax and TransUnion. Your score with each bureau can be different because they might have slightly different information about you.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">The Score Range</h3>

                <p>
                  Canadian credit scores range from 300 to 900:
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90"><strong className="text-accent">800-900:</strong> Excellent (you're basically a credit unicorn)</li>
                  <li className="text-silver/90"><strong className="text-accent">720-799:</strong> Very Good (lenders love you)</li>
                  <li className="text-silver/90"><strong className="text-accent">650-719:</strong> Good (you're doing fine)</li>
                  <li className="text-silver/90"><strong className="text-accent">600-649:</strong> Fair (things get trickier here)</li>
                  <li className="text-silver/90"><strong className="text-accent">300-599:</strong> Poor (this is where I specialize)</li>
                </ul>

                <p>
                  But here's the kicker: that number is just a starting point. What really matters is what's behind that number.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">The 5 Factors That Make Up Your Score</h2>

                <p>
                  Your credit score isn't pulled out of thin air. It's calculated based on five main factors, and understanding these is crucial if you want to improve your score or understand why lenders make certain decisions.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">1. Payment History (35% of Your Score)</h3>

                <p>
                  This is the big one — the single most important factor. It's simple: do you pay your bills on time?
                </p>

                <p>
                  <strong>What lenders see:</strong>
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Every on-time payment (good)</li>
                  <li className="text-silver/90">Every late payment (bad)</li>
                  <li className="text-silver/90">How late payments were (30 days late vs. 90 days late makes a difference)</li>
                  <li className="text-silver/90">How recent those late payments were (recent = worse)</li>
                  <li className="text-silver/90">Collections, bankruptcies, consumer proposals (very bad)</li>
                </ul>

                <p>
                  <strong>Real talk:</strong> One 30-day late payment from three years ago? Not a deal-breaker. Three missed payments in the last six months? That's going to hurt.
                </p>

                <p>
                  I've approved people with past bankruptcies because their recent payment history was spotless. The trend matters more than ancient history.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">2. Credit Utilization (30% of Your Score)</h3>

                <p>
                  This is the ratio of how much credit you're using versus how much you have available. It's mostly about credit cards and lines of credit.
                </p>

                <p>
                  <strong>The magic number:</strong> Keep your utilization below 30%. Below 10% is even better.
                </p>

                <p>
                  <strong>Example:</strong> If you have a credit card with a $5,000 limit, you should keep the balance below $1,500. Ideally below $500.
                </p>

                <p>
                  <strong>Why it matters:</strong> Maxed-out cards scream "financial distress" to lenders. Even if you pay them off every month, high utilization can hurt your score.
                </p>

                <p>
                  <strong>Pro tip:</strong> If you're about to apply for a car loan, pay down your credit cards as much as possible first. It can boost your score by 20-50 points in a month.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">3. Length of Credit History (15% of Your Score)</h3>

                <p>
                  How long have you been using credit? Longer is better because it gives lenders more data to work with.
                </p>

                <p>
                  <strong>What counts:</strong>
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Age of your oldest account</li>
                  <li className="text-silver/90">Age of your newest account</li>
                  <li className="text-silver/90">Average age of all your accounts</li>
                </ul>

                <p>
                  <strong>Common mistake:</strong> Closing old credit cards. That account you opened in university and never use? Keep it open (just don't use it). Closing it can actually hurt your score by reducing your credit history length and increasing your utilization ratio.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">4. Credit Mix (10% of Your Score)</h3>

                <p>
                  This is about the variety of credit types you have. Different types of credit show you can manage different kinds of debt.
                </p>

                <p>
                  <strong>Types of credit:</strong>
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90"><strong className="text-accent">Revolving credit:</strong> Credit cards, lines of credit</li>
                  <li className="text-silver/90"><strong className="text-accent">Installment credit:</strong> Car loans, personal loans, mortgages</li>
                  <li className="text-silver/90"><strong className="text-accent">Open credit:</strong> Cell phone plans, utility bills</li>
                </ul>

                <p>
                  <strong>The sweet spot:</strong> Having 2-3 different types shows you can manage diverse credit. But don't go opening accounts just to improve your mix — that can backfire.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">5. Recent Credit Inquiries (10% of Your Score)</h3>

                <p>
                  Every time you apply for credit and a lender pulls your credit report, it creates a "hard inquiry." Too many in a short period signals risk.
                </p>

                <p>
                  <strong>The good news:</strong> Multiple inquiries for the same type of credit (like car shopping) within a 14-45 day window are typically counted as one inquiry. This is called "rate shopping protection."
                </p>

                <p>
                  <strong>The bad news:</strong> Applying for multiple credit cards, a car loan, and a personal loan all in the same month? That's going to hurt.
                </p>

                <p>
                  <strong>Insider tip:</strong> Ask for "soft inquiries" or "pre-approvals" when possible. These don't affect your score. That's exactly what our AVA credit tool does — it checks your eligibility without a hard pull.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">What Auto Lenders Actually Care About</h2>

                <p>
                  Okay, so you understand how scores are calculated. But here's what you really need to know: when I'm working to get you approved for a car loan, your score is just the beginning of the conversation.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Beyond the Score: The Real Factors</h3>

                <p>
                  <strong>1. The Story Behind the Score</strong>
                </p>

                <p>
                  Did your score tank because of a medical emergency? A divorce? Job loss? Lenders who specialize in subprime understand that life happens. If you can explain your situation and show that you've stabilized since then, it makes a huge difference.
                </p>

                <p>
                  <strong>2. Recent Payment Behavior</strong>
                </p>

                <p>
                  I can't stress this enough: recent behavior matters way more than old problems. If you had a rough patch 2-3 years ago but you've been perfect for the last 12 months, that's actually pretty compelling.
                </p>

                <p>
                  On the flip side, if you've got a decent score but you're currently 30 days late on three different bills, that's a red flag bigger than a football field.
                </p>

                <p>
                  <strong>3. Employment Stability</strong>
                </p>

                <p>
                  Honestly, this might be more important than your credit score. Someone with a 620 score who's been at the same job for three years is often a better bet than someone with a 680 score who changes jobs every six months.
                </p>

                <p>
                  <strong>4. Debt-to-Income Ratio</strong>
                </p>

                <p>
                  Your credit report shows your debts, but lenders want to see how those debts compare to your income. The standard guideline is keeping total debt payments under 40% of your gross monthly income.
                </p>

                <p>
                  <strong>Example:</strong><br />
                  Monthly income: $4,000<br />
                  Existing debts: $800/month<br />
                  Potential car payment: $400/month<br />
                  Total debt: $1,200 (30% of income) ✓ Good to go
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">The "Character" Factor</h3>

                <p>
                  Here's something most people don't know: in subprime lending, we look at what we call "the Four C's":
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90"><strong className="text-accent">Credit:</strong> Your score and history</li>
                  <li className="text-silver/90"><strong className="text-accent">Capacity:</strong> Your ability to repay (income)</li>
                  <li className="text-silver/90"><strong className="text-accent">Capital:</strong> Your down payment and assets</li>
                  <li className="text-silver/90"><strong className="text-accent">Character:</strong> Your overall reliability</li>
                </ul>

                <p>
                  That last one — character — is harder to quantify, but it's real. Do you show up for appointments on time? Do you have all your documents organized? Do you communicate clearly and honestly? These things matter more than you'd think.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">How to Actually Improve Your Credit Score</h2>

                <p>
                  Enough theory. Let's talk about actionable steps you can take right now to improve your credit.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Quick Wins (30-90 Days)</h3>

                <p>
                  <strong>1. Pay Down Credit Card Balances</strong>
                </p>

                <p>
                  This is the fastest way to boost your score. Focus on getting cards below 30% utilization, ideally below 10%. The impact on your score can be significant and shows up within one billing cycle.
                </p>

                <p>
                  <strong>2. Become an Authorized User</strong>
                </p>

                <p>
                  If you have a family member with excellent credit, ask if they'll add you as an authorized user on one of their credit cards. You get the benefit of their good payment history. Just make sure they have low utilization and perfect payment history.
                </p>

                <p>
                  <strong>3. Dispute Errors</strong>
                </p>

                <p>
                  According to some studies, about 20% of credit reports contain errors. Check yours and dispute anything that's inaccurate. I've seen scores jump 50+ points just from correcting mistakes.
                </p>

                <p>
                  <strong>4. Get Current on Late Payments</strong>
                </p>

                <p>
                  If you're behind on anything, get current ASAP. The damage is done from the late payment, but continuing to be late makes it worse every month.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Medium-Term Strategy (6-12 Months)</h3>

                <p>
                  <strong>1. Perfect Payment History</strong>
                </p>

                <p>
                  Set up automatic payments for at least the minimum on everything. Not because minimums are good (they're not — pay more if you can), but because you absolutely cannot afford any more late payments.
                </p>

                <p>
                  <strong>2. Strategic Balance Transfers</strong>
                </p>

                <p>
                  If you have multiple maxed-out cards, consider a balance transfer to a card with available credit. This can lower your overall utilization ratio. Just don't close the old cards.
                </p>

                <p>
                  <strong>3. Increase Your Credit Limits</strong>
                </p>

                <p>
                  Call your credit card companies and request limit increases. If your income has gone up or you've been a good customer, they'll often agree. This lowers your utilization ratio without you having to pay down balances (though you should still do that too).
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Long-Term Building (12-24 Months)</h3>

                <p>
                  <strong>1. Diversify Your Credit Mix</strong>
                </p>

                <p>
                  If you only have credit cards, consider adding an installment loan. An auto loan is actually perfect for this because you need the car anyway, and it helps build your credit.
                </p>

                <p>
                  <strong>2. Keep Old Accounts Open</strong>
                </p>

                <p>
                  Even if you're not using them, old accounts help your credit age. Just use them occasionally to keep them active (buy gas once every few months and pay it off immediately).
                </p>

                <p>
                  <strong>3. Monitor Regularly</strong>
                </p>

                <p>
                  Check your credit score monthly. Many banks offer free credit score monitoring. This helps you catch problems early and track your progress.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">Common Credit Myths (Let's Bust Them)</h2>

                <p>
                  <strong>Myth #1: "Checking my credit score will hurt it."</strong>
                </p>

                <p>
                  <strong>Truth:</strong> Checking your own score (a soft inquiry) doesn't affect it at all. Check as often as you want.
                </p>

                <p>
                  <strong>Myth #2: "Paying off collections will remove them from my report."</strong>
                </p>

                <p>
                  <strong>Truth:</strong> Nope. Paid collections stay on your report for 6 years in most provinces (7 in some). But paid is still better than unpaid.
                </p>

                <p>
                  <strong>Myth #3: "I need to carry a balance on my credit card to build credit."</strong>
                </p>

                <p>
                  <strong>Truth:</strong> Absolutely not. Use your card and pay it off in full every month. You build credit without paying interest. Win-win.
                </p>

                <p>
                  <strong>Myth #4: "Closing credit cards improves my score."</strong>
                </p>

                <p>
                  <strong>Truth:</strong> It usually hurts your score by reducing your available credit and shortening your credit history.
                </p>

                <p>
                  <strong>Myth #5: "You need perfect credit to buy a car."</strong>
                </p>

                <p>
                  <strong>Truth:</strong> This is the biggest myth of all. You absolutely do not need perfect credit. You don't even need good credit. You just need the right approach and the right lender.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">What to Do If Your Credit Is Really Bad</h2>

                <p>
                  Let's say your score is in the 500s or lower. You've got collections, maybe a bankruptcy or consumer proposal. What then?
                </p>

                <p>
                  First, don't panic. I work with people in this situation every single week. Here's the game plan:
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">1. Stabilize Your Current Situation</h3>

                <p>
                  Stop the bleeding. Whatever caused your credit problems, get that under control. If you're still accumulating late payments or collections, no lender will help you.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">2. Build a Down Payment</h3>

                <p>
                  This is your secret weapon. Even $1,000-$2,000 can make the difference between approval and denial. It shows commitment and reduces the lender's risk.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">3. Focus on Employment</h3>

                <p>
                  Stay at your current job. If you're job hunting, wait until after you get the car loan if possible. Job stability can overcome a lot of credit issues.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">4. Work with a Specialist</h3>

                <p>
                  This is where someone like me comes in. We have relationships with lenders who specialize in helping people with challenged credit. We know how to position your application, what documentation to provide, and which lenders are most likely to approve your specific situation.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">The Bottom Line</h2>

                <p>
                  Your credit score is important, but it's not everything. I've seen people obsess over every point while missing the bigger picture. Yes, work on improving your score. But also focus on:
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Building stable employment history</li>
                  <li className="text-silver/90">Saving for a down payment</li>
                  <li className="text-silver/90">Keeping your recent payment history perfect</li>
                  <li className="text-silver/90">Being realistic about your budget</li>
                  <li className="text-silver/90">Working with people who understand subprime lending</li>
                </ul>

                <p>
                  Remember: your credit score tells a story, but you get to write the next chapter. Past mistakes don't have to define your future, especially when it comes to getting into a reliable vehicle.
                </p>

                <p className="text-accent font-bold text-xl mt-8">
                  The best time to start improving your credit was yesterday. The second best time is right now.
                </p>
              </div>

              {/* CTA Section */}
              <div className="mt-16 p-8 bg-gradient-to-r from-accent/10 via-gold/10 to-accent/10 border border-accent/30 rounded-2xl">
                <h3 className="text-2xl font-bold text-background mb-4 text-center">
                  Check Your Credit Status Now
                </h3>
                <p className="text-silver text-center mb-6">
                  Get your free credit check and pre-approval — no impact to your credit score.
                </p>
                <AvaWidgetInline />
              </div>
            </article>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default UnderstandingCreditScore;
