import ScrollButton from "@/components/ui/scroll-button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex items-center px-gutter pt-32 min-h-screen overflow-hidden"
    >
      {/* Background Elements */}
      <div className="-top-24 -right-24 absolute bg-secondary-container opacity-10 blur-[120px] rounded-full w-[600px] h-[600px]" />
      <div className="top-1/2 left-0 absolute opacity-40 w-96 h-96 orange-circle-glow" />

      <div className="z-10 relative gap-gutter grid grid-cols-12 mx-auto w-full max-w-container-max">
        <div className="col-span-12 md:col-span-10 lg:col-span-8">
          <span className="block mb-4 font-label-caps text-label-caps text-secondary">
            AI ENGINEER
          </span>
          <h1 className="mb-8 font-display-lg-mobile md:font-display-lg text-display-lg-mobile text-primary md:text-display-lg leading-[0.85] tracking-tighter">
            MAE
            <br />
            MABANTA
          </h1>
          <p className="mb-12 pl-6 border-primary-container border-l-4 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
            Building the future with human logic &amp; machine magic. I
            translate complex neural architectures into delightful, human
            experiences.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <ScrollButton sectionId="work" variant="hero" size="lg">
              View My Work
            </ScrollButton>
            <div className="flex items-center gap-4">
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                SCROLL TO EXPLORE
              </span>
              <Icon
                name="arrow_downward"
                className="text-primary animate-bounce"
              />
            </div>
          </div>
        </div>

        {/* Floating Abstract Shape */}
        <div className="hidden lg:block top-1/4 right-0 absolute animate-float">
          <svg
            className="text-tertiary"
            height="200"
            width="200"
            viewBox="0 0 200 200"
          >
            <path
              d="M10,100 Q50,20 100,100 T190,100"
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
