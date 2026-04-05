// Responsive refresh: country cards now use proper chip wrapping and touch-friendly spacing.
import { Button } from "./ui/button";

export interface CardProps {
  code: string;
  name: string;
  visaType: string[];
  image: string;
  flag: string;
  popular?: boolean;
}

const ContriesCard = ({ name, visaType, image, flag, popular }: CardProps) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="h-44 w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
        {popular && (
          <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] backdrop-blur-md">
            Popular
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 text-center sm:p-6">
        <div className="flex items-start justify-between gap-4 text-left">
          <div>
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Visa support available
            </p>
          </div>
          <div className="text-2xl">{flag}</div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {visaType.map((type) => (
            <span
              key={`${name}-${type}`}
              className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {type}
            </span>
          ))}
        </div>

        <Button className="mt-6 h-11 w-full rounded-xl">Apply now</Button>
      </div>
    </article>
  );
};

export default ContriesCard;
