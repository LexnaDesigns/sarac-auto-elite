import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AvaWidgetInline from "@/components/AvaWidgetInline";
import { Helmet } from "react-helmet";

const NewVsUsedCars = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>New vs. Used Cars: Which is Better for Your Budget? | Jason Sarac</title>
        <meta name="description" content="Should you buy new or used? Get expert advice on making the right choice for your budget and credit situation. Real-world analysis from automotive finance specialist Jason Sarac." />
        <meta name="keywords" content="new vs used cars, car buying advice, auto financing tips, best car for budget, certified pre-owned, used car financing, new car loans, Ottawa car buying" />
        <link rel="canonical" href="https://saracfinancial.com/blog/new-vs-used-cars" />
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
                Buyer's Guide
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-background mb-6 leading-tight">
                New vs. Used Cars: Which is Better for <span className="text-transparent bg-clip-text bg-gradient-accent">Your Budget?</span>
              </h1>

              <div className="flex items-center gap-6 text-silver/70 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>November 3, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>9 min read</span>
                </div>
              </div>

              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200"
                alt="New and used cars in dealership"
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
                  This is probably the most common question I get: "Jason, should I buy new or used?" And honestly? The answer isn't the same for everyone. After helping thousands of people finance vehicles over the past 12 years, I can tell you that the "right" choice depends entirely on your specific situation.
                </p>

                <p>
                  So let's break this down, no BS, no sales pitch. Just the real numbers, the pros and cons, and how to make the smartest decision for your budget and credit situation.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">The New Car Argument</h2>

                <p>
                  Let's start with new cars because, let's be honest, who doesn't love that new car smell? But there are some legitimate reasons beyond the smell to consider buying new.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Pros of Buying New</h3>

                <p>
                  <strong>1. Full Warranty Coverage</strong>
                </p>

                <p>
                  This is huge. Most new cars come with comprehensive warranties that cover pretty much everything for 3-5 years or 60,000-100,000 km. If something breaks, you're not paying for it. That peace of mind is worth something, especially if you're on a tight budget and can't afford a surprise $2,000 repair bill.
                </p>

                <p>
                  <strong>2. Latest Technology and Safety Features</strong>
                </p>

                <p>
                  Blind-spot monitoring, automatic emergency braking, better fuel economy, Apple CarPlay/Android Auto — new cars come loaded with tech that wasn't available even 5 years ago. Some of this tech can literally save your life.
                </p>

                <p>
                  <strong>3. Lower Interest Rates (Sometimes)</strong>
                </p>

                <p>
                  Here's where it gets interesting: if you have decent credit (680+), manufacturers often offer promotional financing on new vehicles — sometimes as low as 0% or 1.99%. That can make a new car's total cost competitive with used, even though the sticker price is higher.
                </p>

                <p>
                  <strong>4. Known History</strong>
                </p>

                <p>
                  You're the first owner. No previous accidents, no mystery maintenance issues, no "I wonder what the previous owner did to this car" anxiety.
                </p>

                <p>
                  <strong>5. Customization</strong>
                </p>

                <p>
                  You can usually pick your color, options, and packages. Want heated seats but no sunroof? You can do that with a new car.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Cons of Buying New</h3>

                <p>
                  <strong>1. Depreciation is Brutal</strong>
                </p>

                <p>
                  This is the big one. The moment you drive a new car off the lot, it loses about 20% of its value. In the first year alone, you can expect 25-30% depreciation. That means a $35,000 car is worth maybe $24,000 after one year.
                </p>

                <p>
                  Think about that: you just lost $11,000 in value. That's not a payment — that's just gone.
                </p>

                <p>
                  <strong>2. Higher Purchase Price</strong>
                </p>

                <p>
                  New cars cost more, period. The average new car in Canada costs around $45,000-$50,000 now. That's a big chunk of change.
                </p>

                <p>
                  <strong>3. Higher Insurance Costs</strong>
                </p>

                <p>
                  New cars = higher insurance premiums. You're usually required to carry comprehensive coverage, and insurers charge more for newer vehicles.
                </p>

                <p>
                  <strong>4. More Difficult to Get Approved with Bad Credit</strong>
                </p>

                <p>
                  Here's the reality in my world: if your credit is challenged (below 650), getting approved for a brand-new vehicle is tough. Most subprime lenders focus on used vehicles because the loan amounts are lower and the risk is reduced.
                </p>

                <p>
                  <strong>5. Higher Monthly Payments</strong>
                </p>

                <p>
                  Even with a lower interest rate, you're financing more money, so your monthly payment will be higher. That's less money in your pocket every month for rent, groceries, and life.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">The Used Car Argument</h2>

                <p>
                  Now let's talk about used cars. This is where most of my clients end up, and honestly, for good reason.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Pros of Buying Used</h3>

                <p>
                  <strong>1. Let Someone Else Take the Depreciation Hit</strong>
                </p>

                <p>
                  Remember that brutal first-year depreciation I mentioned? Not your problem. Someone else already ate that cost. A 2-3 year old car with 40,000 km might cost 30-40% less than new, but it's essentially the same car.
                </p>

                <p>
                  <strong>2. More Car for Your Money</strong>
                </p>

                <p>
                  Your $25,000 budget might get you a basic new compact car, or it could get you a 3-year-old luxury SUV with all the bells and whistles. Which sounds better?
                </p>

                <p>
                  <strong>3. Lower Insurance Costs</strong>
                </p>

                <p>
                  Used vehicles are cheaper to insure. Period. You might save $50-$150 per month compared to insuring the same car when it was new.
                </p>

                <p>
                  <strong>4. Easier Approval with Challenged Credit</strong>
                </p>

                <p>
                  This is crucial for my clients: if your credit is below 650, you have way better odds of getting approved for a used vehicle. The loan amounts are smaller, which means lower risk for lenders.
                </p>

                <p>
                  <strong>5. Proven Reliability</strong>
                </p>

                <p>
                  Here's something people don't think about: if a car has made it to 3-5 years old without major issues, it's probably going to keep running well. You can also research reliability data for specific model years — something you can't do with brand-new models.
                </p>

                <p>
                  <strong>6. More Negotiating Room</strong>
                </p>

                <p>
                  Used car prices have more flexibility than new car prices. There's usually room to negotiate, especially if you're paying cash or have a good down payment.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Cons of Buying Used</h3>

                <p>
                  <strong>1. Unknown History (Sometimes)</strong>
                </p>

                <p>
                  Even with a CARFAX report, you don't know everything. Was it maintained properly? Did the previous owner beat on it? You're taking on some risk.
                </p>

                <p>
                  <strong>2. Warranty May Be Limited or Expired</strong>
                </p>

                <p>
                  Once the original warranty expires, repairs come out of your pocket. A major repair can cost thousands — and that's money you might not have.
                </p>

                <p>
                  <strong>3. Potentially Higher Interest Rates</strong>
                </p>

                <p>
                  Used car loans typically have higher interest rates than new car loans, especially if your credit is challenged. We're talking 8-12% for good credit, 15-29% for subprime.
                </p>

                <p>
                  <strong>4. May Need Repairs Sooner</strong>
                </p>

                <p>
                  The older the car, the more likely something needs fixing. Brakes, tires, timing belts — these things wear out and need replacement.
                </p>

                <p>
                  <strong>5. Older Technology</strong>
                </p>

                <p>
                  A 5-year-old car might not have blind-spot monitoring, backup cameras (unless it's 2018 or newer), or the latest safety features.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">The Middle Ground: Certified Pre-Owned (CPO)</h2>

                <p>
                  Okay, so what if you want the best of both worlds? Enter certified pre-owned vehicles.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">What is CPO?</h3>

                <p>
                  Certified pre-owned programs are offered by manufacturers (not random dealerships). The vehicles must meet strict criteria:
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Usually less than 5 years old</li>
                  <li className="text-silver/90">Lower mileage (typically under 80,000 km)</li>
                  <li className="text-silver/90">Pass a comprehensive multi-point inspection</li>
                  <li className="text-silver/90">Clean history (no accidents, proper maintenance)</li>
                  <li className="text-silver/90">Come with an extended warranty from the manufacturer</li>
                </ul>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">The Benefits</h3>

                <p>
                  <strong>1. Factory Warranty Coverage</strong>
                </p>

                <p>
                  Most CPO programs include a manufacturer-backed warranty, sometimes extending the original warranty or adding a new one (like 1 year/20,000 km on top of what's left on the original warranty).
                </p>

                <p>
                  <strong>2. Better Financing Rates</strong>
                </p>

                <p>
                  CPO vehicles often qualify for better financing rates than regular used cars — sometimes close to new car rates.
                </p>

                <p>
                  <strong>3. Quality Assurance</strong>
                </p>

                <p>
                  That multi-point inspection means the car has been thoroughly checked. Any issues have been fixed before it hits the lot.
                </p>

                <p>
                  <strong>4. Still Cheaper Than New</strong>
                </p>

                <p>
                  You're still saving 20-35% compared to buying the same car new, but you're getting most of the benefits of a new car.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">The Downsides</h3>

                <p>
                  <strong>1. More Expensive Than Regular Used</strong>
                </p>

                <p>
                  CPO vehicles cost 10-15% more than the same non-certified used car. You're paying for that warranty and peace of mind.
                </p>

                <p>
                  <strong>2. Limited Selection</strong>
                </p>

                <p>
                  Not every used car qualifies for CPO status. Your choices are more limited than the broader used car market.
                </p>

                <p>
                  <strong>3. Still May Have Depreciation Ahead</strong>
                </p>

                <p>
                  While you've avoided the worst depreciation, a 2-3 year old car will continue to depreciate, just at a slower rate.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">Let's Talk Real Numbers</h2>

                <p>
                  Okay, enough theory. Let's look at actual numbers for a popular vehicle: the Honda CR-V.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Scenario 1: Brand New 2026 Honda CR-V Sport</h3>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90"><strong className="text-accent">Price:</strong> $42,000</li>
                  <li className="text-silver/90"><strong className="text-accent">Down Payment:</strong> $3,000</li>
                  <li className="text-silver/90"><strong className="text-accent">Amount Financed:</strong> $39,000</li>
                  <li className="text-silver/90"><strong className="text-accent">Interest Rate:</strong> 5.99% (good credit promotional rate)</li>
                  <li className="text-silver/90"><strong className="text-accent">Term:</strong> 60 months</li>
                  <li className="text-silver/90"><strong className="text-accent">Monthly Payment:</strong> $754</li>
                  <li className="text-silver/90"><strong className="text-accent">Total Paid:</strong> $48,240</li>
                  <li className="text-silver/90"><strong className="text-accent">Total Interest:</strong> $6,240</li>
                  <li className="text-silver/90"><strong className="text-accent">Insurance:</strong> ~$250/month</li>
                  <li className="text-silver/90"><strong className="text-accent">Total Monthly Cost:</strong> $1,004</li>
                </ul>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Scenario 2: Certified Pre-Owned 2023 Honda CR-V Sport</h3>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90"><strong className="text-accent">Price:</strong> $32,000</li>
                  <li className="text-silver/90"><strong className="text-accent">Mileage:</strong> 35,000 km</li>
                  <li className="text-silver/90"><strong className="text-accent">Down Payment:</strong> $3,000</li>
                  <li className="text-silver/90"><strong className="text-accent">Amount Financed:</strong> $29,000</li>
                  <li className="text-silver/90"><strong className="text-accent">Interest Rate:</strong> 6.99% (CPO rate)</li>
                  <li className="text-silver/90"><strong className="text-accent">Term:</strong> 60 months</li>
                  <li className="text-silver/90"><strong className="text-accent">Monthly Payment:</strong> $572</li>
                  <li className="text-silver/90"><strong className="text-accent">Total Paid:</strong> $37,320</li>
                  <li className="text-silver/90"><strong className="text-accent">Total Interest:</strong> $5,320</li>
                  <li className="text-silver/90"><strong className="text-accent">Insurance:</strong> ~$200/month</li>
                  <li className="text-silver/90"><strong className="text-accent">Total Monthly Cost:</strong> $772</li>
                  <li className="text-silver/90"><strong className="text-accent">Monthly Savings:</strong> $232</li>
                </ul>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Scenario 3: Regular Used 2021 Honda CR-V Sport</h3>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90"><strong className="text-accent">Price:</strong> $27,000</li>
                  <li className="text-silver/90"><strong className="text-accent">Mileage:</strong> 55,000 km</li>
                  <li className="text-silver/90"><strong className="text-accent">Down Payment:</strong> $3,000</li>
                  <li className="text-silver/90"><strong className="text-accent">Amount Financed:</strong> $24,000</li>
                  <li className="text-silver/90"><strong className="text-accent">Interest Rate:</strong> 9.99% (regular used car rate)</li>
                  <li className="text-silver/90"><strong className="text-accent">Term:</strong> 60 months</li>
                  <li className="text-silver/90"><strong className="text-accent">Monthly Payment:</strong> $509</li>
                  <li className="text-silver/90"><strong className="text-accent">Total Paid:</strong> $33,540</li>
                  <li className="text-silver/90"><strong className="text-accent">Total Interest:</strong> $6,540</li>
                  <li className="text-silver/90"><strong className="text-accent">Insurance:</strong> ~$180/month</li>
                  <li className="text-silver/90"><strong className="text-accent">Total Monthly Cost:</strong> $689</li>
                  <li className="text-silver/90"><strong className="text-accent">Monthly Savings vs New:</strong> $315</li>
                </ul>

                <p>
                  <strong>The Analysis:</strong>
                </p>

                <p>
                  Over 5 years, choosing the regular used car saves you $18,900 compared to new, even though you paid more in interest. That's $18,900 you could put toward paying off debt, building savings, or investing.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">My Recommendations Based on Your Situation</h2>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Go New If:</h3>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Your credit score is 700+ and you qualify for 0-2% promotional financing</li>
                  <li className="text-silver/90">You plan to keep the car for 10+ years (spreading that depreciation over many years)</li>
                  <li className="text-silver/90">You have a stable, high income and the monthly payment isn't a burden</li>
                  <li className="text-silver/90">You absolutely must have the latest safety technology</li>
                  <li className="text-silver/90">Warranty coverage is worth the premium to you</li>
                </ul>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Go CPO If:</h3>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Your credit score is 650-720 (you'll get decent rates)</li>
                  <li className="text-silver/90">You want warranty protection but can't afford new</li>
                  <li className="text-silver/90">You want a newer car (2-4 years old) with modern features</li>
                  <li className="text-silver/90">You value peace of mind and quality assurance</li>
                  <li className="text-silver/90">You can afford to pay a bit more for reduced risk</li>
                </ul>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">Go Used If:</h3>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Your credit score is below 650 (this is where I specialize)</li>
                  <li className="text-silver/90">You need to minimize your monthly payment</li>
                  <li className="text-silver/90">You have a good independent mechanic to inspect the vehicle</li>
                  <li className="text-silver/90">You're comfortable with some uncertainty</li>
                  <li className="text-silver/90">You want more car for your money</li>
                  <li className="text-silver/90">You're handy or don't mind occasional repairs</li>
                </ul>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">The Sweet Spot (My Personal Recommendation)</h2>

                <p>
                  After 12+ years in this business, I've found the sweet spot for most people:
                </p>

                <p>
                  <strong>2-4 year old vehicles with 30,000-60,000 km, preferably CPO if your credit allows it.</strong>
                </p>

                <p>
                  Why? Because:
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Someone else ate the worst depreciation</li>
                  <li className="text-silver/90">The car is still modern with good safety features</li>
                  <li className="text-silver/90">Major components (engine, transmission) should still be solid</li>
                  <li className="text-silver/90">You might still have some warranty left</li>
                  <li className="text-silver/90">Financing is more accessible, even with challenged credit</li>
                  <li className="text-silver/90">The total cost over ownership is significantly lower than new</li>
                </ul>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">Special Considerations for Bad Credit Buyers</h2>

                <p>
                  If your credit is challenged (below 650), here's what you need to know:
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">1. Used is Usually Your Only Option</h3>

                <p>
                  Most subprime lenders won't finance new vehicles. The loan amounts are too high, and the risk doesn't make sense for them. Don't take it personally — it's just math.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">2. Focus on Reliability Over Flash</h3>

                <p>
                  This isn't the time to stretch for a luxury brand or a vehicle with known reliability issues. Stick with:
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Honda (Civic, Accord, CR-V)</li>
                  <li className="text-silver/90">Toyota (Corolla, Camry, RAV4)</li>
                  <li className="text-silver/90">Mazda (Mazda3, CX-5)</li>
                  <li className="text-silver/90">Hyundai/Kia (Elantra, Sportage)</li>
                </ul>

                <p>
                  These brands are known for reliability, lower repair costs, and holding their value.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">3. A Bigger Down Payment Opens Doors</h3>

                <p>
                  Can't afford much car? Save up a bigger down payment. Going from $1,000 down to $3,000 down can be the difference between approval and denial.
                </p>

                <h3 className="text-2xl font-bold text-accent mt-8 mb-4">4. This is a Stepping Stone</h3>

                <p>
                  Remember: this probably isn't your forever car. It's the car that gets you mobile, helps you rebuild your credit, and positions you for a better car in 2-3 years. Don't fall in love with it — be practical.
                </p>

                <h2 className="text-3xl font-bold text-background mt-12 mb-6">Final Thoughts</h2>

                <p>
                  Look, there's no universal right answer. I've seen people make great decisions buying new, and I've seen people make terrible decisions buying used (and vice versa).
                </p>

                <p>
                  The right choice for you depends on your:
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="text-silver/90">Credit situation</li>
                  <li className="text-silver/90">Budget (be honest with yourself)</li>
                  <li className="text-silver/90">Income stability</li>
                  <li className="text-silver/90">How long you plan to keep the car</li>
                  <li className="text-silver/90">Tolerance for risk</li>
                  <li className="text-silver/90">Transportation needs</li>
                </ul>

                <p>
                  What I can tell you is this: don't let anyone pressure you into a new car just because of the low promotional rate or the shiny paint job. Run the numbers yourself. Think about the total cost over the time you'll own the vehicle.
                </p>

                <p>
                  And if you're in the Ottawa/Ontario area with challenged credit? Let's talk. I'll be straight with you about what you can afford, what makes sense, and what vehicles will work for your situation. No games, no overselling — just real talk about real solutions.
                </p>

                <p className="text-accent font-bold text-xl mt-8">
                  The best car isn't the newest or the flashiest — it's the one that meets your needs without breaking your budget.
                </p>
              </div>

              {/* CTA Section */}
              <div className="mt-16 p-8 bg-gradient-to-r from-accent/10 via-gold/10 to-accent/10 border border-accent/30 rounded-2xl">
                <h3 className="text-2xl font-bold text-background mb-4 text-center">
                  Ready to Find Your Perfect Vehicle?
                </h3>
                <p className="text-silver text-center mb-6">
                  Get pre-approved and see what you qualify for — new or used.
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

export default NewVsUsedCars;
