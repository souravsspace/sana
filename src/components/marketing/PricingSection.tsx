import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Button } from "@/components/ui/button";
import { appConfig as siteConfig } from "@/constants/app-config";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface PricingTabsProps {
  activeTab: "cloud" | "self-hosted";
  setActiveTab: (tab: "cloud" | "self-hosted") => void;
  className?: string;
}

interface PriceDisplayProps {
  price: string;
  isCompact?: boolean;
}

type PricingTier = {
  name: string;
  price: string;
  yearlyPrice?: string;
  originalYearlyPrice?: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  isPopular: boolean;
  features: readonly string[];
  discountPercentage?: number;
};

interface PricingTierProps {
  tier: PricingTier;
  isCompact?: boolean;
  insideDialog?: boolean;
  billingPeriod?: "monthly" | "yearly";
}

// Components
function PricingTabs({ activeTab, setActiveTab, className }: PricingTabsProps) {
  return (
    <div
      className={cn(
        "relative flex w-fit items-center rounded-full border p-0.5 backdrop-blur-sm cursor-pointer h-9 flex-row bg-muted",
        className,
      )}
    >
      {["cloud", "self-hosted"].map((tab) => (
        <button
          type="button"
          key={tab}
          onClick={() => setActiveTab(tab as "cloud" | "self-hosted")}
          className={cn(
            "relative z-[1] px-3 h-8 flex items-center justify-center cursor-pointer",
            {
              "z-0": activeTab === tab,
            },
          )}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 rounded-full bg-white dark:bg-[#3F3F46] shadow-md border border-border"
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 25,
                velocity: 2,
              }}
            />
          )}
          <span
            className={cn(
              "relative block text-sm font-medium duration-200 shrink-0",
              activeTab === tab
                ? "text-zinc-800 dark:text-zinc-200"
                : "text-muted-foreground",
            )}
          >
            {tab === "cloud" ? "Cloud" : "Self-hosted"}
          </span>
        </button>
      ))}
    </div>
  );
}

function PriceDisplay({ price, isCompact }: PriceDisplayProps) {
  return (
    <motion.span
      key={price}
      className={isCompact ? "text-xl font-semibold" : "text-4xl font-semibold"}
      initial={{
        opacity: 0,
        x: 10,
        filter: "blur(5px)",
      }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
    >
      {price}
    </motion.span>
  );
}

function BillingPeriodToggle({
  billingPeriod,
  setBillingPeriod,
}: {
  billingPeriod: "monthly" | "yearly";
  setBillingPeriod: (period: "monthly" | "yearly") => void;
}) {
  return (
    <div className="flex items-center justify-center gap-3">
      <button
        type="button"
        className="relative bg-muted rounded-full p-1 cursor-pointer"
        onClick={() =>
          setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")
        }
      >
        <div className="flex">
          <div
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium transition-all duration-200",
              billingPeriod === "monthly"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground",
            )}
          >
            Monthly
          </div>
          <div
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1",
              billingPeriod === "yearly"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground",
            )}
          >
            Yearly
            <span className="bg-green-600 text-green-50 dark:bg-green-500 dark:text-green-50 text-[10px] px-1.5 py-0.5 rounded-full font-semibold whitespace-nowrap">
              15% off
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}

function PricingTier({
  tier,
  isCompact = false,
  insideDialog = false,
  billingPeriod = "monthly",
}: PricingTierProps) {
  const displayPrice =
    billingPeriod === "yearly" && tier.yearlyPrice
      ? tier.yearlyPrice
      : tier.price;

  const buttonClassName =
    tier.buttonColor === "default"
      ? "bg-primary hover:bg-primary/90 text-white"
      : "bg-secondary hover:bg-secondary/90 text-white";

  const handleSignup = () => {
    window.location.href = "/register";
  };

  return (
    <div
      className={cn(
        "rounded-xl flex flex-col relative",
        insideDialog ? "min-h-[300px]" : "h-full min-h-[300px]",
        tier.isPopular && !insideDialog
          ? "md:shadow-[0px_61px_24px_-10px_rgba(0,0,0,0.01),0px_34px_20px_-8px_rgba(0,0,0,0.05),0px_15px_15px_-6px_rgba(0,0,0,0.09),0px_4px_8px_-2px_rgba(0,0,0,0.10),0px_0px_0px_1px_rgba(0,0,0,0.08)] bg-accent"
          : "bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] border border-border",
      )}
    >
      <div className={cn("flex flex-col gap-3", insideDialog ? "p-3" : "p-4")}>
        <p className="text-sm flex items-center gap-2">
          {tier.name}
          {tier.isPopular && (
            <span className="bg-gradient-to-b from-secondary/50 from-[1.92%] to-secondary to-[100%] text-white inline-flex w-fit items-center justify-center px-1.5 py-0.5 rounded-full text-[10px] font-medium shadow-[0px_6px_6px_-3px_rgba(0,0,0,0.08),0px_3px_3px_-1.5px_rgba(0,0,0,0.08),0px_1px_1px_-0.5px_rgba(0,0,0,0.08),0px_0px_0px_1px_rgba(255,255,255,0.12)_inset,0px_1px_0px_0px_rgba(255,255,255,0.12)_inset]">
              Popular
            </span>
          )}
        </p>
        <div className="flex items-baseline mt-2">
          {billingPeriod === "yearly" &&
          tier.yearlyPrice &&
          displayPrice !== "$0" ? (
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <PriceDisplay
                  price={`$${Math.round(Number.parseFloat(tier.yearlyPrice.slice(1)) / 12)}`}
                  isCompact={insideDialog}
                />
                {tier.discountPercentage && (
                  <span className="text-xs line-through text-muted-foreground">
                    $
                    {Math.round(
                      Number.parseFloat(
                        tier.originalYearlyPrice?.slice(1) || "0",
                      ) / 12,
                    )}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-muted-foreground">/month</span>
                <span className="text-xs text-muted-foreground">
                  billed yearly
                </span>
              </div>
            </div>
          ) : (
            <div className="flex items-baseline">
              <PriceDisplay price={displayPrice} isCompact={insideDialog} />
              <span className="ml-2">
                {displayPrice !== "$0" ? "/month" : ""}
              </span>
            </div>
          )}
        </div>

        {billingPeriod === "yearly" &&
        tier.yearlyPrice &&
        tier.discountPercentage ? (
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-50 border-green-200 text-green-700 w-fit">
            Save $
            {Math.round(
              Number.parseFloat(tier.originalYearlyPrice?.slice(1) || "0") -
                Number.parseFloat(tier.yearlyPrice.slice(1)),
            )}{" "}
            per year
          </div>
        ) : null}
      </div>

      <div
        className={cn("flex-grow", insideDialog ? "px-3 pb-2" : "px-4 pb-3")}
      >
        {tier.features && tier.features.length > 0 && (
          <ul className="space-y-3">
            {tier.features.map((feature: string) => (
              <li key={feature} className="flex items-center gap-2">
                <div className="size-5 min-w-5 rounded-full border border-primary/20 flex items-center justify-center">
                  <CheckIcon className="size-3 text-primary" />
                </div>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        className={cn(
          "mt-auto",
          insideDialog ? "px-3 pt-1 pb-3" : "px-4 pt-2 pb-4",
        )}
      >
        <Button
          onClick={handleSignup}
          variant={tier.buttonColor === "default" ? "default" : "secondary"}
          className={cn(
            "w-full font-medium transition-all duration-200 bg-secondary hover:bg-secondary/90 text-white",
            isCompact || insideDialog
              ? "h-8 rounded-md text-xs"
              : "h-10 rounded-full text-sm",
            buttonClassName,
            tier.isPopular ? "!bg-primary" : "!hover:bg-primary/80",
          )}
        >
          {tier.buttonText}
        </Button>
      </div>
    </div>
  );
}

interface PricingSectionProps {
  showTitleAndTabs?: boolean;
  hideFree?: boolean;
  insideDialog?: boolean;
}

export function PricingSection({
  showTitleAndTabs = true,
  hideFree = false,
  insideDialog = false,
}: PricingSectionProps) {
  const [deploymentType, setDeploymentType] = useState<"cloud" | "self-hosted">(
    "cloud",
  );
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "yearly",
  );

  const handleTabChange = (tab: "cloud" | "self-hosted") => {
    if (tab === "self-hosted") {
      const openSourceSection = document.getElementById("open-source");
      if (openSourceSection) {
        const rect = openSourceSection.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const offsetPosition = scrollTop + rect.top - 100;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      setDeploymentType(tab);
    }
  };

  return (
    <section
      id="pricing"
      className={cn(
        "flex flex-col items-center justify-center gap-10 w-full relative",
      )}
    >
      {showTitleAndTabs && (
        <>
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
              Choose the right plan for your needs
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Start with our free plan or upgrade to a premium plan for more
              usage hours
            </p>
          </SectionHeader>
          <div className="relative w-full h-full">
            <div className="absolute -top-14 left-1/2 -translate-x-1/2">
              <PricingTabs
                activeTab={deploymentType}
                setActiveTab={handleTabChange}
                className="mx-auto"
              />
            </div>
          </div>
        </>
      )}

      {deploymentType === "cloud" && (
        <BillingPeriodToggle
          billingPeriod={billingPeriod}
          setBillingPeriod={setBillingPeriod}
        />
      )}

      {deploymentType === "cloud" && (
        <div
          className={cn(
            "grid gap-4 w-full mx-auto",
            {
              "px-6 max-w-7xl": !insideDialog,
              "max-w-7xl": insideDialog,
            },
            insideDialog
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3"
              : "min-[650px]:grid-cols-2 lg:grid-cols-3",
            !insideDialog && "grid-rows-1 items-stretch",
          )}
        >
          {siteConfig.cloudPricingItems
            .filter((tier) => !hideFree || tier.price !== "$0")
            .map((tier) => (
              <PricingTier
                key={tier.name}
                tier={tier as PricingTier}
                isCompact={insideDialog}
                insideDialog={insideDialog}
                billingPeriod={billingPeriod}
              />
            ))}
        </div>
      )}
    </section>
  );
}
