'use client';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl flex flex-col md:flex-row gap-16">
        
        <div className="flex-1">
          <span className="inline-block text-violet-primary font-medium tracking-[0.2em] text-sm uppercase mb-4">Reach Out</span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Contact Support</h1>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Have a question about your purchase, account, or the story? Send us a message and we'll get back to you as soon as possible.
          </p>
          
          <div className="glass-card p-6 border-l-4 border-l-cyan-primary">
            <h4 className="text-white font-serif mb-2">Direct Email</h4>
            <p className="text-cyan-primary font-mono text-sm">support@alterianovel.placeholder.com</p>
          </div>
        </div>

        <div className="flex-1 glass-card p-8 md:p-10">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2 font-bold">Name</label>
              <input 
                type="text" 
                className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2 font-bold">Email</label>
              <input 
                type="email" 
                className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2 font-bold">Subject</label>
              <select className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-primary transition-colors appearance-none">
                <option>General Inquiry</option>
                <option>Account Support</option>
                <option>Payment Issue</option>
                <option>Bug Report</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2 font-bold">Message</label>
              <textarea 
                rows={5}
                className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-primary transition-colors resize-none"
                placeholder="How can we help?"
              />
            </div>

            <button className="w-full py-4 bg-white text-navy-900 rounded-lg hover:bg-slate-200 transition-colors font-bold tracking-widest uppercase mt-4">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
