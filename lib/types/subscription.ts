// Subscription plan types
export type SubscriptionPlan = 'monthly' | 'yearly' | 'trial';

// Subscription status types
export type SubscriptionStatus =
  | 'active'      // Subscription is active and paid
  | 'past_due'    // Payment failed but grace period
  | 'trial'       // In trial period
  | 'cancelled'   // Cancelled by user or admin
  | 'suspended';  // Suspended due to non-payment or expired trial

// Subscription interface
export interface Subscription {
  plan: SubscriptionPlan;
  price: number;
  status: SubscriptionStatus;
  razorpaySubscriptionId?: string;
  razorpayPlanId?: string;
  currentPeriodStart: Date | string;
  currentPeriodEnd: Date | string;
  trialEnd?: Date | string;
  cancelAtPeriodEnd?: boolean;
}
