export function ScreenshotsSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Designed for real work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mobile-first means you can take action anywhere. Desktop gives you the full picture.
          </p>
        </div>

        {/* Mobile Screenshots - Primary */}
        <div className="mb-12">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4" style={{ scrollbarWidth: "none" }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex-shrink-0 snap-start">
                <div className="w-44 sm:w-52">
                  <div className="bg-secondary rounded-[2rem] p-1.5 shadow-lg">
                    <div className="bg-muted rounded-[1.75rem] aspect-[9/19] flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 mx-auto mb-2"></div>
                        <div className="h-2 w-16 bg-border rounded mx-auto mb-1"></div>
                        <div className="h-2 w-12 bg-border rounded mx-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4 italic">
            Mobile app screenshots — placeholders to be replaced
          </p>
        </div>

        {/* Desktop Screenshots - Secondary */}
        <div className="grid sm:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="bg-background rounded-xl p-4 border border-border/50 shadow-sm">
              <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 mx-auto mb-3"></div>
                  <div className="h-3 w-24 bg-border rounded mx-auto mb-2"></div>
                  <div className="h-3 w-32 bg-border rounded mx-auto"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4 italic">
          Dashboard screenshots — placeholders to be replaced
        </p>
      </div>
    </section>
  );
}
