// Subscription plan types
export type SubscriptionPlan = 'monthly' | 'yearly' | 'trial';

// Subscription status types
export type SubscriptionStatus =
  | 'active'      // Subscription is active and paid
  | 'past_due'    // Payment failed but grace period
  | 'trial'       // In trial period
  | 'cancelled'   // Cancelled by user or admin
  | 'suspended';  // Suspended due to non-payment or expired trial

// Pricing configuration (variable per restaurant)
export interface SubscriptionPricing {
  monthlyPrice: number;   // Price in INR for monthly plan
  yearlyPrice: number;    // Price in INR for yearly plan
}

// Payment record
export interface PaymentRecord {
  razorpayPaymentId: string;
  razorpayOrderId: string;
  amount: number;
  currency: string;
  status: 'success' | 'failed' | 'pending';
  plan: SubscriptionPlan;
  createdAt: Date | string;
}

// Subscription interface
export interface Subscription {
  plan: SubscriptionPlan;
  pricing: SubscriptionPricing;  // Variable pricing per restaurant
  status: SubscriptionStatus;
  razorpaySubscriptionId?: string;
  currentPeriodStart: Date | string;
  currentPeriodEnd: Date | string;
  trialEnd?: Date | string;
  cancelAtPeriodEnd?: boolean;
  lastPaymentId?: string;
  paymentHistory?: PaymentRecord[];
}
