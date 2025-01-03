import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import SubscriptionCard from "./SubscriptionCard";


const monthlyPlan = [
    "Add unlimited project",
    "Access to live chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Customization Options",
    'Integration Support',
    "Advanced Security",
    "Training and Resources",
    "Access Control",
    "Custom Workflows",];

const annualPlan = [
    "Add unlimited project",
    "Access to live chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Everything which monthly plan has"
]

const freePlan = [
    "Add only 3 projects",
    "Basic Task Management",
    "Project Collaboration",
    "Basic Reporting",
    "Email Notifications",
    "Basic Access Control"
]

export const Subscription = () => {
  return (
    <div className="flex justify-between border p-10 rounded-lg">
        <ScrollArea className="h-[90vh] w-[100%]">
            <h1 className="text-5xl font-semibold py-5 pb-16 text-center">Pricing</h1>
            <div className="px-40 py-5 text-gray-400">
                <div className="flex flex-col lg:flex-row justify-center gap-9">
                    <SubscriptionCard data={{planName:"Free", features:freePlan, planType:"FREE", price:0, buttonName:true?"current plan" : "get started",}}/>
                    <SubscriptionCard data={{planName:"Monthly Paid Plan", features:monthlyPlan, planType:"MONTHLY", price:7.99, buttonName:true?"current plan" : "get started",}}/>
                    <SubscriptionCard data={{planName:"Annual Pain Plan", features:annualPlan, planType:"ANNUALY", price:99.99, buttonName:true?"current plan" : "get started",}}/>
                </div>
            </div>
        </ScrollArea>
    </div>
  )
}

export default Subscription;
