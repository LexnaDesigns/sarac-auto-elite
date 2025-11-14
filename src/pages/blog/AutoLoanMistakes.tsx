import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AvaWidgetInline from "@/components/AvaWidgetInline";
import { Helmet } from "react-helmet";

const AutoLoanMistakes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>5 Common Auto Loan Mistakes (And How to Avoid Them) | Jason Sarac</title>
        <meta name="description" content="Avoid costly auto loan mistakes that could cost you thousands. Expert advice from Jason Sarac on navigating car financing, credit checks, and dealer tricks." />
        <meta name="keywords" content="auto loan mistakes, car financing errors, avoid car loan traps, auto financing tips, dealer tricks, car loan advice, Ottawa car financing expert" />
        <link rel="canonical" href="https://saracfinancial.com/blog/auto-loan-mistakes" />
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
                Application Tips
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-background mb-6 leading-tight">
                5 Common Auto Loan Mistakes <span className="text-transparent bg-clip-text bg-gradient-accent">(And How to Avoid Them)</span>
              </h1>

              <div className="flex items-center gap-6 text-silver/70 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>October 28, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>9 min read</span>
                </div>
              </div>

              <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1200"
                alt="Person signing car loan documents"
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
                  I've been in the automotive finance game for over 12 years, and I've seen it all. Every single week, I meet people who've made mistakes that cost them thousands of dollars — mistakes that were 100% avoidable if they'd just known what to watch out for.
                </p>

                <p>
                  So let me save you some serious money and headaches. Here are the five biggest mistakes I see people make when getting an auto loan, and more importantly, exactly how to avoid them.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">Mistake #1: Not Checking Your Credit Before You Shop</h2>

                <p>
                  This is the big one. I can't tell you how many times someone walks into a dealership thinking their credit is "probably okay," only to find out it's way worse than they thought. Now they're embarrassed, frustrated, and in a weak negotiating position.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Why This Hurts You</h3>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90"><strong>You Have No Leverage:</strong> Dealerships can see your desperation. If you need a car right now and your credit is worse than expected, you're going to take whatever deal they offer.</li>
                  <li className="text-silver/90"><strong>You Can't Fix Errors:</strong> About 20% of credit reports have errors. If you don't check ahead of time, you can't dispute them before applying.</li>
                  <li className="text-silver/90"><strong>You Waste Time:</strong> Why spend three hours at a dealership only to find out you don't qualify for any of the vehicles you looked at?</li>
                  <li className="text-silver/90"><strong>Multiple Hard Inquiries:</strong> If you're not pre-approved and you start shopping around, each dealership might run your credit, which drops your score further.</li>
                </ul>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">How to Avoid This Mistake</h3>

                <p>
                  <strong>Step 1: Get Your Free Credit Report</strong>
                </p>

                <p>
                  In Canada, you're entitled to a free credit report from Equifax and TransUnion once per year. Do this at least 2-3 months before you plan to buy.
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Equifax: equifax.ca</li>
                  <li className="text-silver/90">TransUnion: transunion.ca</li>
                </ul>

                <p>
                  <strong>Step 2: Review for Errors</strong>
                </p>

                <p>
                  Look for:
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Accounts that aren't yours</li>
                  <li className="text-silver/90">Incorrect late payments</li>
                  <li className="text-silver/90">Incorrect balances</li>
                  <li className="text-silver/90">Accounts that should have been closed</li>
                </ul>

                <p>
                  If you find errors, dispute them immediately. It can take 30-45 days to resolve.
                </p>

                <p>
                  <strong>Step 3: Know Your Number</strong>
                </p>

                <p>
                  Use a free credit score service (many banks offer this free to customers) or a service like Borrowell or Credit Karma. Know what range you're in:
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">700+: You'll get good rates</li>
                  <li className="text-silver/90">650-699: You'll get approved but rates will be higher</li>
                  <li className="text-silver/90">600-649: You'll need a subprime lender</li>
                  <li className="text-silver/90">Below 600: You'll definitely need a specialist like me</li>
                </ul>

                <p>
                  <strong>Step 4: Get Pre-Approved</strong>
                </p>

                <p>
                  Use tools that do soft credit checks (like our AVA credit widget) to see what you qualify for without impacting your score. Walk into the dealership knowing your maximum budget.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">Mistake #2: Focusing Only on Monthly Payment</h2>

                <p>
                  "I just need the payment under $400 a month."
                </p>

                <p>
                  I hear this all the time, and it's exactly what dealerships want to hear. Why? Because they can make any payment work by stretching out the loan term. But you end up paying way more in the long run.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Why This Hurts You</h3>

                <p>
                  Let's look at the real numbers. Say you're financing $25,000 at 8% interest:
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90"><strong>48 months:</strong> Payment = $610/month, Total interest = $4,280</li>
                  <li className="text-silver/90"><strong>60 months:</strong> Payment = $507/month, Total interest = $5,420</li>
                  <li className="text-silver/90"><strong>84 months:</strong> Payment = $390/month, Total interest = $7,760</li>
                </ul>

                <p>
                  That "affordable" $390 payment costs you an extra $3,480 compared to the 48-month loan. That's a vacation, new appliances, or a significant chunk of your next down payment.
                </p>

                <p>
                  Plus, here's the kicker: on an 84-month loan, you'll be underwater (owe more than the car is worth) for most of the loan. If you want to trade in or sell before it's paid off, you're in trouble.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">How to Avoid This Mistake</h3>

                <p>
                  <strong>1. Think Total Cost, Not Monthly Payment</strong>
                </p>

                <p>
                  Always ask: "What's the total amount I'll pay over the life of this loan?" Calculate it yourself:
                </p>

                <p>
                  Monthly Payment × Number of Months = Total Cost
                </p>

                <p>
                  Then subtract the vehicle price to see how much interest you're paying.
                </p>

                <p>
                  <strong>2. Aim for the Shortest Term You Can Afford</strong>
                </p>

                <p>
                  48-60 months should be your target. Going beyond 60 months should only happen if you absolutely have no other choice.
                </p>

                <p>
                  <strong>3. Consider a Less Expensive Car</strong>
                </p>

                <p>
                  If the only way to make the payment work is stretching to 84 months, you're looking at too much car. Drop down a trim level, go a year or two older, or consider a different model.
                </p>

                <p>
                  <strong>4. Make Extra Payments When Possible</strong>
                </p>

                <p>
                  If you do end up with a longer-term loan, commit to making extra payments whenever you can. Even an extra $50-$100 per month makes a huge difference over time.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">Mistake #3: Not Having a Down Payment</h2>

                <p>
                  "Can I get approved with zero down?"
                </p>

                <p>
                  Yes, sometimes. Should you? Almost never.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Why This Hurts You</h3>

                <p>
                  <strong>1. You're Immediately Underwater</strong>
                </p>

                <p>
                  The moment you drive off the lot, your car is worth less than you owe. With no down payment, you could owe $5,000-$10,000 more than the car is worth for years.
                </p>

                <p>
                  <strong>2. Higher Interest Rates</strong>
                </p>

                <p>
                  Lenders see zero-down buyers as higher risk. You'll pay a higher interest rate — sometimes 2-5% higher — which costs thousands over the loan.
                </p>

                <p>
                  <strong>3. Higher Monthly Payments</strong>
                </p>

                <p>
                  You're financing the entire vehicle price plus taxes and fees. That's a big chunk of money, which means bigger payments.
                </p>

                <p>
                  <strong>4. Limited Options</strong>
                </p>

                <p>
                  If your credit is challenged, many lenders won't approve zero-down loans. You're limiting your options before you even start.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">How to Avoid This Mistake</h3>

                <p>
                  <strong>The Magic Number: 10-20%</strong>
                </p>

                <p>
                  Ideally, put down 10-20% of the vehicle price. On a $25,000 car, that's $2,500-$5,000.
                </p>

                <p>
                  "But Jason, I don't have that kind of cash!"
                </p>

                <p>
                  I get it. Here's what you can do:
                </p>

                <p>
                  <strong>1. Trade-In Your Current Vehicle</strong>
                </p>

                <p>
                  Even if you only get $2,000 for your old car, that's $2,000 toward your down payment.
                </p>

                <p>
                  <strong>2. Wait and Save</strong>
                </p>

                <p>
                  I know this isn't what you want to hear, but waiting 3-6 months to save up $2,000-$3,000 will save you thousands in interest and get you better approval terms.
                </p>

                <p>
                  Set up an automatic transfer to savings:
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">$100/week = $2,400 in 6 months</li>
                  <li className="text-silver/90">$150/week = $3,600 in 6 months</li>
                </ul>

                <p>
                  <strong>3. Use Your Tax Refund</strong>
                </p>

                <p>
                  If tax season is coming up and you usually get a refund, wait for it and use it as your down payment.
                </p>

                <p>
                  <strong>4. Sell Stuff You Don't Need</strong>
                </p>

                <p>
                  That old motorcycle, furniture, electronics — Facebook Marketplace and Kijiji make it easy to turn your unused stuff into down payment cash.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">Mistake #4: Letting the Dealer Run Your Credit Multiple Times</h2>

                <p>
                  This is sneaky and costs people points on their credit score all the time.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Why This Hurts You</h3>

                <p>
                  Every hard credit inquiry can drop your score by 2-5 points. Some dealerships will submit your application to 5, 10, even 15 different lenders to see who bites. Each one is a hard inquiry.
                </p>

                <p>
                  If you're borderline for approval, those extra inquiries could push your score down just enough to get you denied or bumped to a higher interest rate.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">How to Avoid This Mistake</h3>

                <p>
                  <strong>1. Ask How Many Lenders They'll Contact</strong>
                </p>

                <p>
                  Before signing any credit application, ask: "How many lenders are you submitting this to?"
                </p>

                <p>
                  If they say more than 3-4, push back. You can literally tell them: "I only authorize you to submit to 3 lenders of your choice. If those don't work, we'll discuss next steps."
                </p>

                <p>
                  <strong>2. Get Pre-Approved First</strong>
                </p>

                <p>
                  This is where working with a specialist like me makes a huge difference. I can shop your application to multiple lenders with one credit pull because I have established relationships and know who's most likely to approve.
                </p>

                <p>
                  <strong>3. Read Before You Sign</strong>
                </p>

                <p>
                  Credit applications will have language about authorization to check credit. Read it. If it says they can check "as many times as necessary" or similar vague language, cross it out and write in a specific number.
                </p>

                <p>
                  <strong>4. Shop Within a 14-Day Window</strong>
                </p>

                <p>
                  Credit scoring models have a "rate shopping" window — usually 14-45 days depending on the scoring model. Multiple inquiries for the same type of loan (auto loans) within this window are typically counted as a single inquiry.
                </p>

                <p>
                  So if you're shopping around, do it all at once rather than spreading it over months.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">Mistake #5: Saying Yes to Every Add-On Without Thinking</h2>

                <p>
                  You've negotiated a great price on the vehicle. You're feeling good. Then you sit down with the finance manager and they hit you with:
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Extended warranty</li>
                  <li className="text-silver/90">Paint protection</li>
                  <li className="text-silver/90">Rust protection</li>
                  <li className="text-silver/90">Fabric protection</li>
                  <li className="text-silver/90">GAP insurance</li>
                  <li className="text-silver/90">Tire and wheel protection</li>
                  <li className="text-silver/90">Theft protection</li>
                </ul>

                <p>
                  They make it sound so reasonable: "It's only $30 more per month to protect your investment."
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Why This Hurts You</h3>

                <p>
                  Those "small" add-ons add up fast:
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Extended warranty: $2,000-$3,500</li>
                  <li className="text-silver/90">Paint/fabric protection: $500-$1,500</li>
                  <li className="text-silver/90">GAP insurance: $600-$900</li>
                  <li className="text-silver/90">Wheel/tire protection: $800-$1,200</li>
                </ul>

                <p>
                  Add them all up and you just tacked on an extra $5,000-$7,000 to your loan. And here's the worst part: you're paying interest on these add-ons for the entire length of your loan.
                </p>

                <p>
                  That $2,500 extended warranty? At 8% interest over 60 months, the true cost is closer to $3,000.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">How to Avoid This Mistake</h3>

                <p>
                  <strong>1. Decide Ahead of Time What You Want</strong>
                </p>

                <p>
                  Before you even get to the finance office, know what add-ons (if any) you're willing to consider. Write them down. When the finance manager offers others, you can confidently say "No thanks, not interested."
                </p>

                <p>
                  <strong>2. Understand What's Actually Worth It</strong>
                </p>

                <p>
                  Here's my honest take on each add-on:
                </p>

                <p>
                  <strong>GAP Insurance:</strong> Actually worth considering if you're putting little to no money down and buying new/near-new. If your car is totaled, GAP covers the difference between what you owe and what insurance pays.
                </p>

                <p>
                  <strong>Extended Warranty:</strong> Can be worth it for luxury/European vehicles known for expensive repairs, but do your research on the specific warranty. Many exclude common problems or have high deductibles.
                </p>

                <p>
                  <strong>Paint/Fabric Protection:</strong> Hard pass. You can buy quality ceramic coating or fabric protection products yourself for $50-$200 and apply them yourself or pay a detail shop $300-$500. The dealer charges $1,000-$1,500.
                </p>

                <p>
                  <strong>Rust Protection:</strong> Most modern cars already have excellent rust protection from the factory. Unless you're in a heavy salt area and keeping the car 10+ years, skip it.
                </p>

                <p>
                  <strong>Tire/Wheel Protection:</strong> Usually not worth it. The conditions for claiming are often restrictive, and you're better off putting that money toward quality tires.
                </p>

                <p>
                  <strong>3. Never Decide Under Pressure</strong>
                </p>

                <p>
                  Finance managers are trained to create urgency: "This price is only good today" or "The warranty has to be purchased now."
                </p>

                <p>
                  That's mostly BS. Extended warranties can often be purchased later (even months after you buy the car). Take time to think about it and research.
                </p>

                <p>
                  <strong>4. Negotiate Add-Ons Too</strong>
                </p>

                <p>
                  If you do want an add-on, negotiate the price just like you negotiated the vehicle price. Dealerships have huge markups on these products — often 50-100% or more. Don't pay sticker price.
                </p>

                <p>
                  <strong>5. Read the Contract</strong>
                </p>

                <p>
                  Before you sign, review the final numbers. Make sure the add-ons you agreed to are listed correctly and nothing extra snuck in. I've seen dealers add things without explicit approval, hoping you won't notice.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">Bonus Mistake: Not Reading the Contract</h2>

                <p>
                  I know, I know — it's boring, it's long, you've been at the dealership for four hours already. But not reading your loan contract is playing Russian roulette with your finances.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">What to Check</h3>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90"><strong>Total Amount Financed:</strong> Does it match what you agreed to?</li>
                  <li className="text-silver/90"><strong>Interest Rate:</strong> Is it what you were quoted?</li>
                  <li className="text-silver/90"><strong>Monthly Payment:</strong> Does it match what you calculated?</li>
                  <li className="text-silver/90"><strong>Number of Payments:</strong> Is the term correct?</li>
                  <li className="text-silver/90"><strong>Add-Ons:</strong> Are only the ones you agreed to listed?</li>
                  <li className="text-silver/90"><strong>Total Amount to Be Paid:</strong> What's the final total?</li>
                  <li className="text-silver/90"><strong>Prepayment Penalties:</strong> Can you pay extra or pay off early without fees?</li>
                </ul>

                <p>
                  If anything doesn't match what you discussed, stop. Ask for clarification. Don't let them rush you.
                </p>

                <p>
                  <strong>It's 100% Okay to Walk Away</strong>
                </p>

                <p>
                  If something feels wrong, if the numbers don't match, if you feel pressured — walk away. There will always be another car, another dealership, another deal. Don't let anyone make you feel like this is your only shot.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">The Bottom Line</h2>

                <p>
                  These five mistakes cost people thousands of dollars every single day. The good news? They're all completely avoidable with a little knowledge and preparation.
                </p>

                <p>
                  Quick Recap:
                </p>

                <ol className="space-y-3 ml-6 list-decimal">
                  <li className="text-silver/90">Check your credit before shopping</li>
                  <li className="text-silver/90">Focus on total cost, not just monthly payment</li>
                  <li className="text-silver/90">Save up a down payment</li>
                  <li className="text-silver/90">Limit credit inquiries</li>
                  <li className="text-silver/90">Be selective about add-ons</li>
                </ol>

                <p>
                  Follow these rules and you'll be way ahead of most car buyers. You'll get better rates, save thousands in interest, and actually enjoy your vehicle instead of stressing about the payment.
                </p>

                <p>
                  And if you're in the Ottawa/Ontario area and need help navigating the auto loan process — especially if your credit is less than perfect — that's literally what I do. No judgment, no games, just honest guidance to help you avoid these mistakes and get into a vehicle you can actually afford.
                </p>

                <p className="text-accent font-bold text-xl mt-8">
                  The best defense against bad deals is knowledge. Now you have it — use it.
                </p>
              </div>

              {/* CTA Section */}
              <div className="mt-16 p-8 bg-gradient-to-r from-accent/10 via-gold/10 to-accent/10 border border-accent/30 rounded-2xl">
                <h3 className="text-2xl font-bold text-background mb-4 text-center">
                  Start Your Application the Right Way
                </h3>
                <p className="text-silver text-center mb-6">
                  Get pre-approved with no credit impact and avoid these costly mistakes.
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

export default AutoLoanMistakes;
