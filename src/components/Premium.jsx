import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";

const Premium = () => {
  const plans = [
    {
      name: "Silver",
      subtitle: "A little more room to connect.",
      price: "₹499",
      duration: "3 months",
      features: [
        "Chat with other people",
        "100 connection requests per day",
        "Blue verification tick",
        "3 months of membership",
      ],
      button: "Choose Silver",
      onClick: () => handleBuyClick("Silver"),
      popular: false,
    },
    {
      name: "Gold",
      subtitle: "For people who want more.",
      price: "₹999",
      duration: "6 months",
      features: [
        "Everything in Silver",
        "Unlimited connection requests",
        "Blue verification tick",
        "6 months of membership",
      ],
      button: "Choose Gold",
      onClick: () => handleBuyClick("Gold"),
      popular: true,
    },
  ];

  const handleBuyClick = async (type) => {
    // make an api call on server to create a payment order and get the order id
    const order = await axios.post(
      BASE_URL + "/payment/create",
      { memberShipType: type },
      { withCredentials: true },
    );

    // it should open the razorpay Dialog box with the order id and other details

    const { amount, keyId, notes, orderId } = order.data;

    const options = {
      key: keyId,
      amount,
      currency: "INR",
      name: "Dev Tinder",
      description: "Connect To other Developers",
      order_id: orderId,
      prefill: {
        name: notes.firstName + " " + notes.lastName,
        email: notes.emailId,
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <main className="min-h-screen bg-base-200 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            DevTinder Membership
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Make every connection count.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-base-content/65">
            Find your people, start conversations, and enjoy a little more with
            a membership made for you.
          </p>
        </header>

        {/* Membership Cards */}
        <section className="grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                plan.popular
                  ? "border-amber-400/60 bg-base-100 shadow-lg shadow-amber-500/5"
                  : "border-base-300 bg-base-100"
              }`}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-amber-400/15 px-3 py-1 text-xs font-semibold text-amber-700">
                  Most popular
                </span>
              )}

              {/* Plan Name */}
              <div className="mb-6">
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-xl ${
                    plan.popular ? "bg-amber-400/15" : "bg-slate-400/15"
                  }`}
                >
                  {plan.popular ? "♛" : "◇"}
                </div>

                <h2 className="text-2xl font-bold">{plan.name} Membership</h2>

                <p className="mt-2 text-sm text-base-content/60">
                  {plan.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="mb-7 flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight">
                  {plan.price}
                </span>

                <span className="text-sm text-base-content/60">
                  / {plan.duration}
                </span>
              </div>

              <div className="mb-6 border-t border-base-300" />

              {/* Features */}
              <p className="mb-5 text-sm font-semibold">
                Your membership includes
              </p>

              <ul className="mb-8 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-6 text-base-content/80"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        plan.popular
                          ? "bg-amber-400/20 text-amber-700"
                          : "bg-slate-400/20 text-slate-600"
                      }`}
                    >
                      ✓
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                type="button"
                className={`btn h-12 min-h-12 w-full rounded-xl border-0 text-sm font-semibold normal-case ${
                  plan.popular
                    ? "bg-amber-400 text-black hover:bg-amber-500"
                    : "btn-neutral"
                }`}
                onClick={plan.onClick}
              >
                {plan.button}
                <span aria-hidden="true">→</span>
              </button>

              <p className="mt-4 text-center text-xs text-base-content/50">
                {plan.duration} of membership
              </p>
            </article>
          ))}
        </section>

        {/* Footer Note */}
        <p className="mt-9 text-center text-sm text-base-content/55">
          Good connections start with a conversation.
        </p>
      </div>
    </main>
  );
};

export default Premium;
