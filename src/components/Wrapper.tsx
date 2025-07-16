import { cn } from "@/lib/utils";

export const Wrapper = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-6xl mx-auto", props.className)}>
      {props.children}
    </div>
  );
};
