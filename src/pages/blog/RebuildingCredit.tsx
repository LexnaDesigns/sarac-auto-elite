import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AvaWidgetInline from "@/components/AvaWidgetInline";
import { Helmet } from "react-helmet";

const RebuildingCredit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Rebuilding Credit Through Auto Financing: A Step-by-Step Guide | Jason Sarac</title>
        <meta name="description" content="Turn your car loan into a credit-building tool. Learn Jason Sarac's proven strategy for rebuilding credit while financing a vehicle, with real results from Ottawa clients." />
        <meta name="keywords" content="rebuild credit with car loan, improve credit score, credit building strategies, auto loan credit repair, bad credit to good credit, Ottawa credit specialist, subprime auto loan benefits" />
        <link rel="canonical" href="https://saracfinancial.com/blog/rebuilding-credit" />
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
                Credit Building
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-background mb-6 leading-tight">
                Rebuilding Credit Through Auto Financing: <span className="text-transparent bg-clip-text bg-gradient-accent">A Step-by-Step Guide</span>
              </h1>

              <div className="flex items-center gap-6 text-silver/70 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>October 20, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>10 min read</span>
                </div>
              </div>

              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200"
                alt="Person celebrating financial success"
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
                  Here's something most people don't realize: an auto loan can be one of the most powerful credit-building tools available. In fact, over the past 12 years, I've watched hundreds of clients use their car payment to transform their credit scores from the 500s to the 700s.
                </p>

                <p>
                  But here's the catch — it only works if you do it strategically. I've also seen people make it worse. So let me show you exactly how to turn your subprime auto loan into a launchpad for better credit.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">Why Auto Loans Are Credit-Building Gold</h2>

                <p>
                  Before we get into the how, let's talk about why auto loans are so effective for rebuilding credit.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">1. It's Installment Credit</h3>

                <p>
                  Credit scoring models love to see a mix of credit types. Most people with bad credit only have revolving credit (credit cards, lines of credit). An auto loan adds installment credit to your mix, which can boost your score by 10-30 points just from diversification.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">2. Regular Payment History</h3>

                <p>
                  Remember, payment history is 35% of your credit score — the single biggest factor. Every on-time car payment is a positive mark on your credit report. Make 12 consecutive on-time payments and lenders start to see you differently.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">3. It's Accessible Even with Bad Credit</h3>

                <p>
                  Unlike mortgages or prime credit cards, you can actually get approved for an auto loan with challenged credit. That means you can start rebuilding now, not years from now.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">4. It Serves a Practical Purpose</h3>

                <p>
                  You need transportation anyway. Why not use that necessity to rebuild your credit at the same time? You're not taking on debt just for credit building — you're getting value from it.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">The Strategic Credit-Rebuilding Timeline</h2>

                <p>
                  Let me show you what a typical credit-rebuilding journey looks like using an auto loan. These are real results I see with my clients.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Month 0: Starting Point</h3>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90"><strong>Credit Score:</strong> 550</li>
                  <li className="text-silver/90"><strong>Situation:</strong> Past bankruptcy/consumer proposal, some collections, limited recent credit history</li>
                  <li className="text-silver/90"><strong>Goal:</strong> Get approved for reliable transportation and start rebuilding</li>
                </ul>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Months 1-6: Foundation Building</h3>

                <p>
                  <strong>What You're Doing:</strong>
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Making every car payment on time (set up automatic payments!)</li>
                  <li className="text-silver/90">Paying down any remaining collections</li>
                  <li className="text-silver/90">Getting a secured credit card with $500-$1000 limit</li>
                  <li className="text-silver/90">Using the credit card for small purchases and paying it off in full monthly</li>
                </ul>

                <p>
                  <strong>Expected Results:</strong>
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90"><strong>Credit Score:</strong> 580-600</li>
                  <li className="text-silver/90"><strong>Score Increase:</strong> 30-50 points</li>
                  <li className="text-silver/90"><strong>Why:</strong> New positive payment history, collections resolved, credit mix improved</li>
                </ul>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Months 7-12: Momentum Building</h3>

                <p>
                  <strong>What You're Doing:</strong>
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Continuing perfect payment history on auto loan</li>
                  <li className="text-silver/90">Keeping credit card utilization under 30%</li>
                  <li className="text-silver/90">Possibly upgrading to an unsecured credit card</li>
                  <li className="text-silver/90">Building an emergency fund so you never miss a payment</li>
                </ul>

                <p>
                  <strong>Expected Results:</strong>
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90"><strong>Credit Score:</strong> 620-640</li>
                  <li className="text-silver/90"><strong>Score Increase:</strong> 70-90 points from start</li>
                  <li className="text-silver/90"><strong>Why:</strong> 12 months of perfect payment history carries serious weight</li>
                </ul>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Months 13-24: Breaking Into "Good Credit" Territory</h3>

                <p>
                  <strong>What You're Doing:</strong>
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Still maintaining perfect auto loan payments</li>
                  <li className="text-silver/90">Keeping 2-3 credit cards active with low utilization</li>
                  <li className="text-silver/90">Possibly making extra payments on the auto loan to reduce balance</li>
                  <li className="text-silver/90">Old negative marks are aging off (7 years for most items)</li>
                </ul>

                <p>
                  <strong>Expected Results:</strong>
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90"><strong>Credit Score:</strong> 660-690</li>
                  <li className="text-silver/90"><strong>Score Increase:</strong> 110-140 points from start</li>
                  <li className="text-silver/90"><strong>Why:</strong> Two years of perfect payment history, improved credit mix, older negative items have less impact</li>
                </ul>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Months 25-36: Prime Credit Achievement</h3>

                <p>
                  <strong>What You're Doing:</strong>
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">You might refinance your auto loan to a better rate</li>
                  <li className="text-silver/90">Continue managing credit responsibly</li>
                  <li className="text-silver/90">Possibly qualify for a prime credit card with rewards</li>
                  <li className="text-silver/90">Building savings for next vehicle down payment</li>
                </ul>

                <p>
                  <strong>Expected Results:</strong>
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90"><strong>Credit Score:</strong> 700-730</li>
                  <li className="text-silver/90"><strong>Score Increase:</strong> 150-180 points from start</li>
                  <li className="text-silver/90"><strong>Achievement Unlocked:</strong> You're now in "good credit" territory and qualify for prime rates</li>
                </ul>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">The Step-by-Step Game Plan</h2>

                <p>
                  Okay, so now you know what's possible. Let's break down exactly how to execute this strategy.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Step 1: Get Approved for the Right Auto Loan</h3>

                <p>
                  <strong>Choose Affordability Over Flash</strong>
                </p>

                <p>
                  This is crucial: you need a payment you can easily afford. If you're stretching to make the payment, you're setting yourself up to fail. Remember, one missed payment can drop your score by 60-100 points.
                </p>

                <p>
                  <strong>Target Payment:</strong> No more than 15% of your gross monthly income
                </p>

                <p>
                  If you make $3,000/month, your payment should be around $450 or less. Yes, that might mean a less expensive or older vehicle. That's okay — this is temporary.
                </p>

                <p>
                  <strong>Work with a Specialist</strong>
                </p>

                <p>
                  If your credit is below 650, don't waste time with traditional banks. Work with someone who specializes in subprime lending. We know which lenders report to credit bureaus regularly (not all do!) and which offer paths to refinancing later.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Step 2: Set Up Automatic Payments Immediately</h3>

                <p>
                  I can't stress this enough: the day you get your loan, set up automatic payments from your bank account.
                </p>

                <p>
                  <strong>Pro Tips:</strong>
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Schedule the payment for 3-5 days before the due date</li>
                  <li className="text-silver/90">Make sure there's always enough buffer in your account</li>
                  <li className="text-silver/90">Set up alerts to notify you when payment is processed</li>
                  <li className="text-silver/90">Never, ever rely on remembering to make manual payments</li>
                </ul>

                <p>
                  Life gets busy. Automatic payments ensure you never miss one because you forgot or got distracted.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Step 3: Add a Secured Credit Card</h3>

                <p>
                  Within the first month or two of your auto loan, get a secured credit card if you don't already have one.
                </p>

                <p>
                  <strong>Recommended Cards for Credit Building:</strong>
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Home Trust Secured Visa</li>
                  <li className="text-silver/90">Capital One Guaranteed Mastercard</li>
                  <li className="text-silver/90">Neo Secured Credit Card</li>
                </ul>

                <p>
                  <strong>How to Use It:</strong>
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Put one recurring bill on it (Netflix, Spotify, gym membership)</li>
                  <li className="text-silver/90">Set up auto-pay from your bank to pay it in full each month</li>
                  <li className="text-silver/90">Don't use it for anything else</li>
                  <li className="text-silver/90">Keep utilization under 10% (on a $1000 limit, keep balance under $100)</li>
                </ul>

                <p>
                  This creates a second positive payment stream on your credit report with minimal risk of overspending.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Step 4: Track Your Progress</h3>

                <p>
                  Check your credit score monthly. Many banks offer free credit score monitoring to customers. Seeing that number climb is incredibly motivating.
                </p>

                <p>
                  <strong>Recommended Free Monitoring Services:</strong>
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Borrowell (TransUnion score)</li>
                  <li className="text-silver/90">Credit Karma (TransUnion score)</li>
                  <li className="text-silver/90">Your bank's mobile app (most offer this now)</li>
                </ul>

                <p>
                  <strong>What to Watch For:</strong>
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Score increases after each on-time payment</li>
                  <li className="text-silver/90">Old negative items aging off</li>
                  <li className="text-silver/90">Improved credit utilization ratios</li>
                  <li className="text-silver/90">Any errors or unauthorized accounts (dispute immediately)</li>
                </ul>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Step 5: Resist the Temptation to Take On More Debt</h3>

                <p>
                  As your score improves, you'll start getting credit card offers in the mail. You'll see ads for loans. Your credit limits might increase automatically.
                </p>

                <p>
                  <strong>Resist.</strong>
                </p>

                <p>
                  Every new credit application is a hard inquiry. Every new account lowers your average credit age. More available credit means more temptation to spend.
                </p>

                <p>
                  <strong>The Rule:</strong> For the first 12-18 months, only have your auto loan and one secured credit card. That's it. No store cards, no new loans, nothing else.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Step 6: Gradually Build Your Credit Profile</h3>

                <p>
                  After 12 months of perfect payment history, you can start strategically expanding:
                </p>

                <p>
                  <strong>Months 13-18:</strong> Add one unsecured credit card if you're offered one with decent terms
                </p>

                <p>
                  <strong>Months 19-24:</strong> If needed, consider a small line of credit or another credit card
                </p>

                <p>
                  <strong>The Goal:</strong> By month 24, have 2-3 credit cards and your auto loan, all with perfect payment history
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Step 7: Consider Refinancing</h3>

                <p>
                  Once your score hits 650-680 (usually 18-24 months in), you should explore refinancing your auto loan.
                </p>

                <p>
                  <strong>Why Refinance?</strong>
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Lower interest rate (potentially 5-10% lower)</li>
                  <li className="text-silver/90">Lower monthly payment</li>
                  <li className="text-silver/90">Save thousands in total interest</li>
                  <li className="text-silver/90">Free up cash flow for other goals</li>
                </ul>

                <p>
                  <strong>Example:</strong><br />
                  Original loan: $20,000 at 19% for 60 months = $513/month, $10,780 total interest
                </p>

                <p>
                  After refinancing at month 24:<br />
                  Remaining balance: $12,000 at 9% for 36 months = $382/month, $1,752 total interest
                </p>

                <p>
                  That's $131 less per month and $9,000+ saved in interest!
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">Critical Do's and Don'ts</h2>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">DO:</h3>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">✓ Set up automatic payments</li>
                  <li className="text-silver/90">✓ Pay on time, every time (even if you can only afford the minimum)</li>
                  <li className="text-silver/90">✓ Keep a financial buffer in your account</li>
                  <li className="text-silver/90">✓ Monitor your credit monthly</li>
                  <li className="text-silver/90">✓ Celebrate milestones (every 50-point increase!)</li>
                  <li className="text-silver/90">✓ Consider making extra payments when possible</li>
                  <li className="text-silver/90">✓ Keep old accounts open (even if unused)</li>
                  <li className="text-silver/90">✓ Work with your lender if you're struggling (before missing a payment)</li>
                </ul>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">DON'T:</h3>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">✗ Ever miss a payment (seriously, this kills your progress)</li>
                  <li className="text-silver/90">✗ Max out credit cards</li>
                  <li className="text-silver/90">✗ Apply for multiple new credit accounts</li>
                  <li className="text-silver/90">✗ Close old credit accounts</li>
                  <li className="text-silver/90">✗ Co-sign for anyone (even family)</li>
                  <li className="text-silver/90">✗ Take on unnecessary debt</li>
                  <li className="text-silver/90">✗ Ignore your credit report</li>
                  <li className="text-silver/90">✗ Get discouraged by slow initial progress</li>
                </ul>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">What to Do If You're Struggling</h2>

                <p>
                  Life happens. Maybe you lost hours at work, had an unexpected expense, or got sick. What do you do if you're worried about making your payment?
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Option 1: Contact Your Lender BEFORE Missing the Payment</h3>

                <p>
                  Most lenders will work with you if you're proactive. Options might include:
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Pushing your payment back a week or two</li>
                  <li className="text-silver/90">Temporarily reducing your payment</li>
                  <li className="text-silver/90">Deferring a payment (adding it to the end of the loan)</li>
                </ul>

                <p>
                  The key: call them BEFORE you miss the payment, not after.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Option 2: Find the Money Somehow</h3>

                <p>
                  I know this sounds harsh, but protecting your credit is worth some sacrifice:
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Sell something</li>
                  <li className="text-silver/90">Pick up an extra shift or side gig</li>
                  <li className="text-silver/90">Borrow from family (not ideal, but better than a missed payment)</li>
                  <li className="text-silver/90">Use your emergency fund (that's what it's for)</li>
                </ul>

                <p>
                  One missed payment can drop your score by 60-100 points. That's months or years of progress destroyed in one moment.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Option 3: Restructure Your Budget</h3>

                <p>
                  If you're consistently struggling, you need to cut expenses elsewhere:
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Cancel subscriptions</li>
                  <li className="text-silver/90">Reduce dining out</li>
                  <li className="text-silver/90">Shop cheaper for groceries</li>
                  <li className="text-silver/90">Find ways to reduce your other bills</li>
                </ul>

                <p>
                  Your auto payment should be your #1 priority after housing and food.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">Real Success Stories</h2>

                <p>
                  Let me share a few real examples (names changed for privacy):
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Sarah's Journey: Bankruptcy to 720</h3>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90"><strong>Starting Point:</strong> Credit score 520 after bankruptcy discharge</li>
                  <li className="text-silver/90"><strong>Month 0:</strong> Approved for $15,000 used Honda Civic at 21% APR</li>
                  <li className="text-silver/90"><strong>Month 12:</strong> Score hit 610, added secured credit card</li>
                  <li className="text-silver/90"><strong>Month 24:</strong> Score hit 680, refinanced auto loan to 9%</li>
                  <li className="text-silver/90"><strong>Month 36:</strong> Score hit 720, qualified for prime credit cards and saved $12,000 in interest from refinancing</li>
                </ul>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Mike's Journey: Collections to 690</h3>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90"><strong>Starting Point:</strong> Credit score 550 with multiple collections</li>
                  <li className="text-silver/90"><strong>Month 0:</strong> Paid off collections, got approved for $18,000 used Toyota RAV4 at 19% APR</li>
                  <li className="text-silver/90"><strong>Month 6:</strong> Score hit 590 from on-time payments</li>
                  <li className="text-silver/90"><strong>Month 18:</strong> Score hit 650, added unsecured credit card</li>
                  <li className="text-silver/90"><strong>Month 30:</strong> Score hit 690, preparing to refinance and buy a house</li>
                </ul>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Common Pattern:</h3>

                <p>
                  Notice the pattern? It takes time, but it works. Most clients see:
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">30-50 point increase in first 6 months</li>
                  <li className="text-silver/90">70-90 point increase by month 12</li>
                  <li className="text-silver/90">110-150 point increase by month 24</li>
                  <li className="text-silver/90">150-180+ point increase by month 36</li>
                </ul>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">Your Action Plan Starting Today</h2>

                <p>
                  Ready to start? Here's your immediate action plan:
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">This Week:</h3>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Check your credit score and report</li>
                  <li className="text-silver/90">Calculate what auto payment you can comfortably afford</li>
                  <li className="text-silver/90">Start saving for a down payment (even $500 helps)</li>
                </ul>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">This Month:</h3>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Get pre-approved (soft inquiry only)</li>
                  <li className="text-silver/90">Research reliable vehicles in your price range</li>
                  <li className="text-silver/90">Set up a separate savings account for your car payment buffer</li>
                </ul>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Next 3 Months:</h3>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Secure your auto loan and vehicle</li>
                  <li className="text-silver/90">Set up automatic payments</li>
                  <li className="text-silver/90">Get a secured credit card</li>
                  <li className="text-silver/90">Start tracking your credit score monthly</li>
                </ul>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">Final Thoughts</h2>

                <p>
                  Rebuilding credit isn't sexy. It's not fast. But it's absolutely achievable, and an auto loan can be the perfect tool to do it.
                </p>

                <p>
                  Think of your subprime auto loan as tuition in the school of financial recovery. Yes, you're paying higher interest — that's the cost of your education. But if you play it smart, in 2-3 years you'll graduate with excellent credit and qualify for prime rates on everything.
                </p>

                <p>
                  That higher interest rate is temporary. The vehicle is temporary. But the improved credit score? That opens doors for the rest of your life.
                </p>

                <p>
                  I've seen it happen hundreds of times. People who thought they'd never get approved for anything, who thought their credit was permanently ruined, who were told "no" everywhere else — they followed this strategy and completely transformed their financial lives.
                </p>

                <p>
                  You can do this. It just takes a plan, discipline, and patience.
                </p>

                <p className="text-accent font-bold text-xl mt-8">
                  Your credit history tells the story of your past. Your auto loan can be the first chapter of your financial comeback.
                </p>
              </div>

              {/* CTA Section */}
              <div className="mt-16 p-8 bg-gradient-to-r from-accent/10 via-gold/10 to-accent/10 border border-accent/30 rounded-2xl">
                <h3 className="text-2xl font-bold text-background mb-4 text-center">
                  Start Your Credit Rebuilding Journey
                </h3>
                <p className="text-silver text-center mb-6">
                  Get pre-approved and take the first step toward better credit.
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

export default RebuildingCredit;
