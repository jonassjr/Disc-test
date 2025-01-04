import { Skeleton } from "@/components/ui/skeleton"

export const ResultsPageSkeleton = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-12">
      <Skeleton className="w-full max-w-[400px] h-[310px]" />

      <div className="flex-1">
        <header className="space-y-2">
          <Skeleton className="w-[300px] h-[20px]" />
          <Skeleton className="w-[100px] h-[20px]" />
        </header>

        <div className="space-y-2">
          <Skeleton className="mt-4 w-[90%] h-[20px]" />
          <div className="space-y-1">
            <Skeleton className="mt-4 w-[100%] h-[20px]" />
            <Skeleton className="mt-4 w-[100%] h-[20px]" />
            <Skeleton className="mt-4 w-[90%] h-[20px]" />
            <Skeleton className="mt-4 w-[100%] h-[20px]" />
            <Skeleton className="mt-4 w-[40%] h-[20px]" />
          </div>

        </div>
      </div>
    </div>
  )
}