import { cn } from "@/lib/utils";

interface ICarouselCard {
  bg: string;
  image: string;
  title: string;
  content: string;
  imageStyle?: string;
  style?: string;
  gradient?: string;
  textStyles?: string;
}

export const CarouselCard: React.FC<ICarouselCard> = ({
  bg,
  image,
  title,
  content,
  style = "primary",
  gradient,
  textStyles,
}) => {
  return (
    <div
      className={cn(
        `rounded-[20px] h-[375px] sm:h-[520px] overflow-hidden w-full group relative panel bg-[#FFBE0B]`,
        bg
      )}
    >
      <div
        className={`absolute ${
          style === "primary"
            ? "top-0 right-0"
            : "top-12 flex justify-center left-0"
        }`}
      >
        <img
          src={image}
          alt="icon"
          className={cn("w-5/12 mx-auto float-right")}
        />
      </div>

      <div
        className={`absolute z-30 bottom-7 sm:bottom-28 left-8 sm:left-20 w-9/12 sm:w-7/12 ${textStyles}`}
      >
        <p className="text-2xl sm:text-5xl medium">{title}</p>
        <p className="mt-3.5 text-xs sm:text-lg">{content}</p>
      </div>

      {style === "secondary" && gradient && (
        <div
          className={`h-[220px] sm:h-[520px] absolute z-20 bottom-0 left-0 w-full ${gradient}`}
        />
      )}
    </div>
  );
};
