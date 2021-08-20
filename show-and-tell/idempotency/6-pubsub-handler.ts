/* eslint-disable */
// @ts-nocheck

const listingHandler = {
  topic: "listing",
  handlerFactory: ({listingsPersistence, log, stripe}: RestDeps) => (
    publication,
  ) => {
    async function buyListing(
      listingId: string,
      payment: {cardNumber: string; cvv: string; name: string},
    ): Promise<boolean> {
      try {
        await listingsPersistence.decrementQuantity(listingId)
        await stripe.makePayment(listingId, payment)
        return true
      } catch (error) {
        log.error("Failed to buy listing", error)
        throw error
      }
    }
  },
}
