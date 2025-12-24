import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-[100px]", className)}>
      {children}
    </div>
  );
}
